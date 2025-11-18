# Create and Link a Log Analytics Workspace

## Objectives
- Understand what a Log Analytics Workspace is and why it matters in SRE.
- Create a workspace using:
    - Azure Portal
    - Azure CLI
    - (Optional) ARM/Bicep or Terraform

- Link resources (VMs, Azure Monitor agent, Application Insights, VMSS, AKS, etc.)
- Run Kusto queries to validate ingestion.
- Understand data retention, RBAC, and cost-control considerations.

## SRE Context & Explanation

**What is a Log Analytics Workspace?**

A Log Analytics Workspace is a central data store within Azure Monitor where logs and metrics from Azure resources, apps, and agents are aggregated.

**It enables:**
- Unified observability
- Querying via Kusto Query Language (KQL)
- Alerts, dashboards, anomaly detection
- Compliance & audit trails

**Why SREs care:**
- Core for monitoring, incident investigation, RCA
- Centralized logging improves MTTD and MTTR
- Enables automation using queries and alerts

## Step 1 — Create a Log Analytics Workspace (Portal)

### Task 1: Prepare the Resource Group
1. In Azure Portal, search for **Resource Groups**.
2. Create a new group:
    - Name: `sre-observability-rg`
    - Region: `East US` (or nearest)

### Task 2: Create the Workspace
1. Portal search → **Log Analytics workspaces** → Create
2. Fill the form:
    - Resource Group: `sre-observability-rg`
    - Name: `sre-laworkspace`
    - Region: Same as RG
3. Review and Create

*Note: When possible, keep Workspace and Resources in same region to avoid ingestion latency and cross-region data charges.*

## Step 2 — Create a Log Analytics Workspace (Azure CLI)
Run in Cloud Shell or local terminal:
```bash
# Variables
RG="sre-observability-rg"
LOCATION="eastus"
WORKSPACE="sre-laworkspace-cli"

# Create RG
az group create --name $RG --location $LOCATION

# Create Workspace
az monitor log-analytics workspace create \
  --resource-group $RG \
  --workspace-name $WORKSPACE \
  --location $LOCATION
```

**Retrieve workspace details:**
```bash
az monitor log-analytics workspace show \
  --resource-group $RG \
  --workspace-name $WORKSPACE
```

## Step 3 — Link a VM to the Log Analytics Workspace

This section teaches students how to connect compute resources (critical for SRE monitoring).

### Task 3: Create a Test VM
```bash
az vm create \
  --resource-group $RG \
  --name sre-testvm \
  --image Ubuntu2204 \
  --admin-username azureuser \
  --generate-ssh-keys
```

### Task 4: Install & Configure Azure Monitor Agent (AMA)

```bash
WORKSPACE_ID=$(az monitor log-analytics workspace show \
 --resource-group $RG \
 --workspace-name $WORKSPACE \
 --query customerId -o tsv)

az vm extension set \
  --publisher Microsoft.Azure.Monitor \
  --name AzureMonitorLinuxAgent \
  --vm-name sre-testvm \
  --resource-group $RG
```

(Optional) On Windows VM, use `AzureMonitorWindowsAgent`.

## Step 4 — Link Application Insights to the Workspace
**Create Application Insights**
```bash
az monitor app-insights component create \
  --app sre-appinsights \
  --location $LOCATION \
  --resource-group $RG \
  --workspace $WORKSPACE
```

*This links App Insights telemetry to the Log Analytics Workspace for unified logging.*

## Step 5 — Run Validation Queries in Kusto

Open Azure Portal → Log Analytics Workspace → **Logs**.

**Confirm VM Heartbeats:**
```kusto
Heartbeat
| where Computer startswith "sre-testvm"
| order by TimeGenerated desc
```

**Check Syslog Ingestion:**
```kusto
Syslog
| where HostName startswith "sre-testvm"
| summarize count() by Facility, SeverityLevel
```

**Application Insights Logs:**
```kusto
traces
| order by timestamp desc
| take 20
```

## Step 6 — Set Retention, RBAC & Cost Controls

**Modify retention period (CLI)**
```bash
az monitor log-analytics workspace update \
  --resource-group $RG \
  --workspace-name $WORKSPACE \
  --retention-time 30
```

**Add SRE team as Reader:**
```bash
az role assignment create \
  --assignee "<email_or_objectId>" \
  --role "Log Analytics Reader" \
  --scope $(az monitor log-analytics workspace show \
     --resource-group $RG \
     --workspace-name $WORKSPACE \
     --query id -o tsv)
```

## Questions

1. Why is centralizing logs critical for SRE troubleshooting?
2. What are the trade-offs of high data retention?
3. What ingestion pattern (push vs pull) does AMA use?
4. Describe a scenario where misconfigured workspace linking caused an outage or alerting failure.
5. How would you detect ingestion failures proactively?

## Optional — Deploy with Bicep or Terraform
Bicep Example:
```bicep
resource law 'Microsoft.OperationalInsights/workspaces@2021-06-01' = {
  name: 'sre-laworkspace-iac'
  location: 'eastus'
  properties: {
    retentionInDays: 30
  }
}
```

Cleanup
```bash
az group delete --name $RG --yes --no-wait
```
---