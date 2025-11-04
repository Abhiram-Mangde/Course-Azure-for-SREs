# Connect Azure Resources to Microsoft Sentinel

## Objective 

- Understand the role of Microsoft Sentinel as a cloud-native SIEM (Security Information and Event Management) and SOAR (Security Orchestration, Automation, and Response) platform.
- Deploy Sentinel on an existing Log Analytics workspace.
- Connect core Azure resources (e.g., Azure Virtual Machines, Azure Activity Logs, and Azure Key Vault) to Sentinel for unified security monitoring.
- Verify that logs are flowing into Sentinel and explore analytics and detection rules.
- Explain how Microsoft Sentinel integrates with Azure resources for security observability.
- Configure and connect Azure resources (VMs, Activity Logs, Key Vault, etc.) to Microsoft Sentinel.
- Validate data ingestion and visualize it in Sentinel’s workbooks and logs.
- Understand Sentinel’s analytics rules and alerts for proactive incident management.

### Review these key concepts:

| Concept                         | Description                                                                                                                              |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Microsoft Sentinel**          | A cloud-native SIEM/SOAR service that collects and analyzes security data from across Azure and other environments.                      |
| **Log Analytics Workspace**     | The foundational data store for Sentinel. All telemetry and log data are stored here.                                                    |
| **Data Connectors**             | Pre-built integrations that connect Azure and non-Azure resources to Sentinel (e.g., Azure Activity, Azure AD, VMs, Defender for Cloud). |
| **Workbooks & Analytics Rules** | Workbooks visualize security data; analytics rules detect threats based on ingested logs.                                                |
---

### Step 1: Create a Log Analytics Workspace

1. Sign in to the **Azure Portal** → Search for **Log Analytics workspaces** → **click + Create**.
2. Choose:
    - **Subscription**: (Your active subscription)
    - **Resource group**: `SRE-Sentinel-Lab` (create if not existing)
    - **Name**: `SRE-LogAnalytics`
    - **Region**: Same as your Azure resources (e.g., East US)
3. Click **Review + Create**, then **Create**.

*You should see your workspace in the list once deployment completes.*

### Step 2: Enable Microsoft Sentinel

1. In the Azure Portal, search for **Microsoft Sentinel**.
2. Select + **Create**.
3. Choose the existing Log Analytics workspace `SRE-LogAnalytics`.
4. Click **Add** to enable Sentinel on that workspace.

*Sentinel should now appear in your resource list, linked to your workspace.*

### Step 3: Connect Azure Activity Logs

1. Inside Sentinel, go to Data Connectors → search for Azure Activity.
2. Click on the Azure Activity connector → Open connector page.
3. Click Connect.
    - This streams all subscription-level activity logs (resource creation, deletion, access changes) to Sentinel.
4. Wait a few minutes for ingestion to begin.

**Verification:**
Go to Logs → run the query:

```kusto
AzureActivity
| take 10
```

*You should see recent subscription-level operations.*

### Step 4: Connect a Virtual Machine (via Log Analytics Agent)

1. Go to your Azure Virtual Machine → Monitoring → Insights → Logs.
2. Click Enable and select your existing SRE-LogAnalytics workspace.
3. This automatically installs the Azure Monitor Agent (AMA) to send telemetry to Sentinel.

**Verification:**
In Sentinel → **Logs**, run:
```kusto
Heartbeat
| where Computer contains "your-vm-name"
| take 10
```

*You should see heartbeat data confirming the connection.*

### Step 5: Connect Azure Key Vault Logs

1. Go to Key Vaults → select your Key Vault → Diagnostics settings → Add diagnostic setting.
2. Name it: KeyVaultToSentinel
3. Under Category details, select:
    - AuditEvent
    - AllLogs
4. Under Destination details, select Send to Log Analytics workspace → choose SRE-LogAnalytics.
5. Click Save.

**Verification:**
Run this query:
```kusto
AzureDiagnostics
| where ResourceType == "VAULTS"
| take 10
```

### Step 6: Create and Test a Workbook

1. In Sentinel, go to **Workbooks → + Add workbook**.
2. Choose a template like **Azure Activity Overview** or **Key Vault Audit Logs**.
3. Click **Save** → Name it `SRE-SecurityDashboard`.
4. Explore the visualizations — you should see activity data from your resources.

**Challenge Task:**
*Modify one chart to only show Key Vault activity.*

### Step 7: Enable Analytics Rules (Alerting)

1. In Sentinel → **Analytics → + Create → Scheduled Query Rule**.
2. Use the query:
```Kusto
AzureActivity
| where OperationNameValue == "Microsoft.Compute/virtualMachines/delete"
| project TimeGenerated, Caller, ResourceGroup, Resource
```
3. Name: `VM Deletion Alert`
4. Set frequency: Every 5 minutes, look back 15 minutes.
5. Under **Incident settings**, choose **Create incidents from alerts → Enabled**.
6. Save the rule.

**Test:**
*Manually delete a test VM and check if an incident appears under **Sentinel → Incidents**.*

### Step 8: (Optional) Automate Response via Playbook

1. In Sentinel → Automation → Playbooks → + Create.
2. Choose Blank Logic App.
3. Add a trigger When a response to an Azure Sentinel alert is triggered.
4. Add an action (e.g., Send email via Outlook) to notify SREs when a VM deletion occurs.

*You’ve implemented a basic SOAR action to complement SIEM alerts.*

### Questions: 
- How does Sentinel improve visibility for an SRE team managing Azure workloads?
- What’s the difference between Azure Monitor and Microsoft Sentinel?
- How can automated playbooks reduce mean time to detection (MTTD) and mean time to resolution (MTTR)?
- Which other Azure or non-Azure sources would you integrate into Sentinel in a real enterprise environment?
- Connect Microsoft Defender for Cloud or Azure AD Sign-In logs to Sentinel.
- Create a custom KQL query to detect failed logins from suspicious IPs.
- Integrate a non-Azure data source (e.g., AWS or on-prem firewall) via the Common Event Format (CEF) connector.