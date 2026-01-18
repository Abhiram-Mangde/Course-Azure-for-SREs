---
layout: page
title: Auditing Azure VMs Without Defender Agent
---

# Auditing Azure VMs Without Defender Agent

## Objective: 

- Identify which Azure Virtual Machines do not have the Microsoft Defender for Servers agent (Log Analytics / Defender extension) installed.
- Understand how Azure Security Center (Microsoft Defender for Cloud) surfaces this information.
- Learn how to automate audits using Azure CLI and Azure Resource Graph.

## Conceptual Background

Azure Defender for Servers (part of Microsoft Defender for Cloud) provides endpoint protection and advanced threat detection for virtual machines.
However, it relies on specific agents/extensions (e.g., Log Analytics Agent or Azure Monitor Agent) to collect telemetry.

For Site Reliability Engineers (SREs), maintaining visibility into which VMs lack this protection is critical to:
- Detect potential blind spots in monitoring or threat detection.
- Ensure compliance with organizational or regulatory security baselines.
- Automate remediation or alerting workflows.

### Prerequisites

1. Access to an **Azure Subscription** with:
    - At least 3–5 running VMs across different resource groups.
    - Microsoft Defender for Cloud (Free or Standard) enabled.
2. Azure CLI installed and logged in:
```bash
az login
```
3. Contributor or Security Reader permissions on the subscription.

### Step 1: Review Defender for Cloud Recommendations

1. Go to the **Azure Portal → Defender for Cloud → Recommendations**.
2. Search for:
*“Machines should have the Microsoft Defender for Endpoint agent installed”
or
“Machines should be monitored by Microsoft Defender for Servers”*
3. Review the **“Unhealthy Resources”** list.
- These are the **VMs currently without the Defender agent**.

*Defender for Cloud continuously assesses your environment and surfaces non-compliant machines under “Security Posture.” This is a **built-in audit** view.*

### Step 2: Audit Using Azure CLI

Let’s perform the same audit programmatically.
1. Run the following command to list all VMs and check their extensions:
```bash
az vm list --query "[].{name:name, resourceGroup:resourceGroup, extensions:resources[].name}" -o table
```

2. Next, check which VMs lack the Defender (Log Analytics or MMA) agent:
```bash
az vm list --query "[?resources[?type=='Microsoft.Compute/virtualMachines/extensions'] | !contains(join(' ', resources[].name), 'OmsAgentForLinux') && !contains(join(' ', resources[].name), 'MicrosoftMonitoringAgent')].{VMName:name, RG:resourceGroup}" -o table
```
- The query filters VMs without `OmsAgentForLinux` or `MicrosoftMonitoringAgent` extensions.
- These are common identifiers for Defender/Log Analytics agents.

### Step 3: Use Azure Resource Graph (ARG) Query
Azure Resource Graph lets you audit resources across large-scale environments efficiently.

Run the following query in the Azure Portal → Resource Graph Explorer, or via CLI:
```kusto
resources
| where type == "microsoft.compute/virtualmachines"
| extend extensions = properties.extensions
| extend hasDefenderAgent = tostring(extensions)
| where hasDefenderAgent !contains "OmsAgentForLinux"
    and hasDefenderAgent !contains "MicrosoftMonitoringAgent"
| project name, resourceGroup, location, id
```
*List of VMs missing the Defender agent.*

### Step 4: (Optional) Automate the Audit

Create a scheduled audit using an **Azure Automation Runbook** or **Logic App** that:
1. Executes the ARG query daily.
2. Sends results to:
    - A Teams channel, or
    - A ServiceNow/Jira ticket, or
    - An email alert for non-compliant machines.

**Example (CLI-based automation script outline):**
```bash
#!/bin/bash
nonCompliantVMs=$(az graph query -q "
resources
| where type == 'microsoft.compute/virtualmachines'
| extend extensions = properties.extensions
| extend hasDefenderAgent = tostring(extensions)
| where hasDefenderAgent !contains 'OmsAgentForLinux'
    and hasDefenderAgent !contains 'MicrosoftMonitoringAgent'
| project name, resourceGroup, location
" -o tsv)

if [ -n "$nonCompliantVMs" ]; then
    echo "The following VMs lack Defender agent:"
    echo "$nonCompliantVMs"
else
    echo "All VMs have Defender agents installed."
fi
```

### Step 5: Remediation (Optional)

Once identified, install the missing agent using:

**For Linux:**
```bash
az vm extension set \
  --publisher Microsoft.EnterpriseCloud.Monitoring \
  --name OmsAgentForLinux \
  --vm-name <vm-name> \
  --resource-group <resource-group> \
  --settings '{"workspaceId":"<log-analytics-workspace-id>"}' \
  --protected-settings '{"workspaceKey":"<workspace-key>"}'
```

**For Windows:**
```bash
az vm extension set \
  --publisher Microsoft.EnterpriseCloud.Monitoring \
  --name MicrosoftMonitoringAgent \
  --vm-name <vm-name> \
  --resource-group <resource-group> \
  --settings '{"workspaceId":"<log-analytics-workspace-id>"}' \
  --protected-settings '{"workspaceKey":"<workspace-key>"}'
```

## Summary 
| Task                             | Concept                  | Tool                    |
| -------------------------------- | ------------------------ | ----------------------- |
| Identify missing Defender agents | Posture assessment       | Defender for Cloud      |
| CLI audit                        | Programmatic visibility  | Azure CLI               |
| Large-scale query                | Cross-subscription audit | Azure Resource Graph    |
| Automate check                   | Continuous monitoring    | Automation / Logic Apps |
| Remediation                      | Install missing agent    | VM Extension command    |


## Questions: 
- What risks arise if a VM runs without the Defender agent?
- How can you integrate this audit into your CI/CD or compliance pipelines?
- What’s the tradeoff between real-time protection vs. audit frequency?