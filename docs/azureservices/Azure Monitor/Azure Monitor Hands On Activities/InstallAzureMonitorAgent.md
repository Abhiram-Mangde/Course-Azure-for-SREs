---
layout: page
title: Install and Verify Azure Monitor Agent (AMA) on an Azure VM
---

# Install and Verify Azure Monitor Agent (AMA) on an Azure VM

## Objective:
- Understand what Azure Monitor Agent (AMA) is and why SREs use it
- Install AMA on an Azure Virtual Machine
- Configure data collection using Data Collection Rules (DCR)
- Verify that logs and metrics are successfully flowing to Azure Monitor / Log Analytics

## 1. Why Azure Monitor Agent Matters for SREs

From an SRE perspective, observability is non-negotiable. You cannot:
- Detect incidents
- Measure SLIs/SLOs
- Perform root cause analysis
- …without reliable telemetry.

### What is Azure Monitor Agent (AMA)?
Azure Monitor Agent is the unified monitoring agent used by Azure to collect:
- Metrics (CPU, memory, disk, network)
- Logs (syslog, Windows Event Logs, performance counters)

AMA **replaces legacy agents:**
- Log Analytics Agent (MMA)
- Azure Diagnostics Extension

**Why AMA is Better**
- Centralized configuration via Data Collection Rules (DCRs)
- More secure (managed identity–based)
- Better performance and scalability
- Required for modern Azure Monitor features

## 2. Prerequisites

Before starting, make sure you have:

**Azure Resources**
- An active Azure subscription
- One Azure Virtual Machine:
  - Linux or Windows
  - Running state
- A Log Analytics Workspace

**Access Requirements**
- Owner or Contributor role on the resource group

## Step 1: Create or Identify a Log Analytics Workspace

1. Go to **Azure Portal**
2. Search for Log Analytics workspaces
3. Either:
  - Use an existing workspace, or
  - Create a new one:
      - Resource Group: same as VM (recommended)
      - Region: same as VM (best practice)

*Note the workspace name—you’ll need it later.*

## Step 2: Create a Data Collection Rule (DCR)

**Why DCR?**

Think of a DCR as:
> “What data should I collect, and where should I send it?”

**Create the DCR**
1. Go to Azure Monitor
2. Select Data Collection Rules
3. Click Create

**Basic Settings**
- Name: dcr-vm-monitoring
- Region: Same as VM
- Platform Type:
  - Linux or Windows (match your VM)

**Add Data Sources**

*For Linux VM (example)*
- Syslog
  - Facilities: auth, daemon, syslog
  - Log levels: Info, Warning, Error, Critical
- Performance Counters
  - CPU utilization
  - Memory usage
  - Disk usage

*For Windows VM (example)*
- Windows Event Logs
  - System
  - Application
- Performance Counters
  - Processor Time
  - Available Memory

**Destination**
- Select Log Analytics Workspace
- Choose your workspace

Review + Create

## Step 3: Install Azure Monitor Agent on the VM

**Option A: Install via Azure Portal**
1. Navigate to your Virtual Machine
2. Go to Extensions + applications
3. Click Add
4. Select Azure Monitor Agent
5. Click Next → Create

Azure will:
- Install the agent
- Use managed identity automatically

##  4: Associate the DCR with the VM

This is the most commonly missed step.
1. Go back to Data Collection Rules
2. Open your DCR (dcr-vm-monitoring)
3. Click Resources
4. Select Add
5. Choose your VM
6. Click Apply

*Now the VM knows what data to send.*

## Step 5: Verify Agent Installation

**Check from VM**

1. Go to VM → Extensions
2. Confirm:
  - AzureMonitorLinuxAgent or
  - AzureMonitorWindowsAgent
3. Status should be Provisioning succeeded

## Step 6: Verify Data in Log Analytics (Critical SRE Step)
**Open Log Analytics**
1. Go to Log Analytics Workspace
2. Click Logs

*Run Sample Queries*

**Verify Heartbeat (Agent Health)**
```kusto
Heartbeat
| sort by TimeGenerated desc
```
You should see your VM sending heartbeats every minute.

**Verify Performance Metrics**
```kusto
Perf
| where TimeGenerated > ago(10m)
| summarize avg(CounterValue) by CounterName, Computer
```

**Verify Syslog (Linux)**
```kusto
Syslog
| sort by TimeGenerated desc
```

**Verify Windows Events**
```kusto
Event
| sort by TimeGenerated desc
```
*If you see data, AMA is working correctly.*

## 3. Common Issues and Troubleshooting
**No Data Appearing?**

Check:
- Is the DCR associated with the VM?
- Is the DCR platform type correct (Linux vs Windows)?
- Is the VM running?

**Agent Installed but No Logs?**
- Verify DCR includes log sources
- Ensure correct log levels are selected
- Wait 5–10 minutes (initial delay is normal)
