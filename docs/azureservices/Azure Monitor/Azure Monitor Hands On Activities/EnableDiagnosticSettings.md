---
layout: page
title: Enable Diagnostic Settings on Key Azure Services
---

# Enable Diagnostic Settings on Key Azure Services

## Objectives

- Understand what Azure Diagnostic Settings are and why they matter for SRE operations.
- Enable Diagnostic Settings for Azure Virtual Machines, Storage Accounts, and Azure App Service.
- Route logs and metrics to Log Analytics Workspaces, Event Hub, or Storage Accounts.
- Validate diagnostic data using Kusto Query Language (KQL).
- Understand the impact on observability, incident response, SLO monitoring, and root cause analysis.

## 1. Core Concepts
**What Are Diagnostic Settings?**

Azure resources generate **platform logs and metrics**. These are not automatically retained unless you explicitly configure diagnostic settings.

SREs need diagnostic settings to:
- Perform **real-time monitoring**
- Identify **error patterns & latency spikes**
- Build **SLIs/SLO dashboards**
- Trigger **alert rules** with precise conditions
- Conduct **post-incident forensics**

### Types of data emitted
| Data Type         | Description                                         | Why SREs Care                             |
| ----------------- | --------------------------------------------------- | ----------------------------------------- |
| **Metrics**       | Numerical performance data (CPU, requests, latency) | Build SLIs, resource saturation detection |
| **Resource Logs** | Detailed logs about operations                      | Identify failures, root cause analysis    |
| **Activity Logs** | Subscription-level operations                       | Change tracking, audit trails             |
---

## 2. Target Architecture for This Lab

We will configure Diagnostic Settings to send logs to:

**Log Analytics Workspace**
- Centralizing logs for KQL analysis
- Integrated with Azure Monitor, Alerts, Workbooks

**Optional Destinations**
- Storage Account → Long-term retention (cheap!)
- Event Hub → Integrate with SIEM or external monitoring tools

This is what the SRE observability pipeline looks like:
```
Azure Resource → Diagnostic Settings → Log Analytics → Alerts/Dashboards/KQL Queries
```

## 3. Hands-On: Create Prerequisite Resources

- Step 1: Create a Resource Group
  - Go to Azure Portal
  - Search for Resource Groups
  - Click Create
  - Provide:
    - Name: `rg-sre-diagnostics-lab`
    - Region: choose the closest region
- Click Review + Create → Create

- Step 2: Create a Log Analytics Workspace
  - Search for Log Analytics Workspace
  - Click Create
  - Provide:
    - Name: `law-sre-monitoring`
    - Region: same as your resource group
  - Pricing Tier: PerGB (default)
  - Create the workspace
 
## 4. Lab 1: Enable Diagnostic Settings on a Storage Account

**Conceptual**

Storage accounts emit logs such as:
- Authentication logs
- Blob/Queue/Table access logs
- Read/Write/Delete operations
- Network and firewall logs

These logs help SREs detect incidents such as:
- Unexpected spikes in download operations
- Unauthorized access attempts
- Latency issues

**Practical Steps**
- Step 1: Create the Storage Account
  - Search Storage Accounts
  - Click Create
  - Settings:
    - Name: `stdiagnosticsdev01`
    - Region: same as workspace
    - Redundancy: LRS
  - Create the storage account

- Step 2: Enable Diagnostic Settings
  - Open the storage account
  - Scroll left menu → Monitoring → Diagnostic Settings
  - Click + Add diagnostic setting
  - Name the setting: `diag-to-law`
  - Select:
    - Blob, Queue, Table logging
    - Metrics (all categories)
  - Select destination:
    - Send to Log Analytics Workspace
    - Choose: law-sre-monitoring
  - Click Save
 
 ## 5. Lab 2: Enable Diagnostic Settings for Azure App Service
**Conceptual**

App Services emit logs such as:
- HTTP request logs
- Detailed error logs
- Worker process logs
- Deployment logs

This helps SREs:
- Detect high 5xx response rates
- Identify slow endpoints
- Diagnose application crashes

**Practical Steps**

- Step 1: Create App Service + Plan
  - Search App Services → Create
  - Create a Windows or Linux Web App
  - Use an App Service Plan: B1 or Free

- Step 2: Enable Diagnostic Settings
  - Go to the App Service
  - Left menu → Monitoring → Diagnostic Settings
  - Click + Add diagnostic setting
  - Choose logs:
    - AppServiceHTTPLogs
    - AppServiceConsoleLogs
    - AppServiceAppLogs
    - AppServiceAuditLogs

- Choose metrics (all categories)
- Destination → Log Analytics Workspace (law-sre-monitoring)
- Save

## 6. Lab 3: Enable Diagnostic Settings for a Virtual Machine (via VM Insights)
**Conceptual**

Azure VMs rely on the Azure Monitor Agent (AMA) to send:
- Performance counters
- Syslog / Windows Event Logs
- Heartbeats
- Dependency map data

Useful for SREs in:
- OS-level debugging
- CPU/memory saturation detection
- Kernel / system events

**Practical Steps**
- Step 1: Create a VM
  - Use any small VM (Standard B1s to save cost)

- Step 2: Enable VM Insights
  - Go to Azure Monitor
  - Select Virtual Machines
  - Find your VM → Enable
  - Select workspace → law-sre-monitoring
  - Enable “Insights” (deploys the Monitoring Agent)

- Step 3: Enable Additional Diagnostic Settings
  - Go to the VM
  - Monitoring → Diagnostic settings
  - Add:
    - GuestPerformanceLogs
    - Heartbeat
    - Syslog / Windows Event Logs
  - Destination → Log Analytics Workspace
  - Save
 
## 7. Validate Logs with KQL Queries
**Storage Account Access Logs**
```kql
StorageBlobLogs
| where TimeGenerated > ago(30m)
| summarize count() by OperationName, ResponseType
```

**App Service 5xx Errors**
```kql
AppServiceHTTPLogs
| where scStatus >= 500
| summarize count() by csUriStem, scStatus
```

**VM CPU Spike Detection**
```kql
InsightsMetrics
| where Name == "Percentage CPU"
| summarize avg(Val) by bin(TimeGenerated, 5m)
| order by TimeGenerated asc
```

## 8. Common Issues & Troubleshooting

| Issue                           | Explanation                                 | Fix                                     |
| ------------------------------- | ------------------------------------------- | --------------------------------------- |
| No logs appear in Log Analytics | Diagnostic settings not applied correctly   | Re-check resource → Diagnostic Settings |
| Logs delayed by 5–10 mins       | Normal ingestion delay                      | Wait or add filters                     |
| Workspace not selectable        | Resource & workspace must be in same region | Re-create workspace                     |
| VM logs missing                 | AMA not installed                           | Re-enable VM insights                   |
---


## 9. SRE Discussion: Mapping Logs to SLOs

| Resource        | Useful Metrics                | Related SLO                              |
| --------------- | ----------------------------- | ---------------------------------------- |
| Storage Account | Success E2E operation latency | “Storage latency < 10ms 95th percentile” |
| App Service     | HTTP 5xx rate                 | “Error rate < 1%”                        |
| VM              | CPU %, Memory %, Heartbeat    | “Availability 99.9%”                     |
---

*Discuss how Diagnostic Settings → Metrics → Dashboards → Alerts support Error Budgets.*
