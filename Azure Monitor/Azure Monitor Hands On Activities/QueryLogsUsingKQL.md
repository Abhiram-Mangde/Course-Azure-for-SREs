# Querying Azure Logs using Kusto Query Language (KQL)

## Learning Objectives

- Understand the role of KQL in Azure observability
- Navigate Azure Log Analytics Workspace
- Write basic to advanced KQL queries
- Analyze application, infrastructure, and platform logs
- Perform filtering, aggregation, and time-series analysis
- Use KQL to detect incidents, anomalies, and SRE signals
- Apply KQL for SLI/SLO validation and troubleshooting

## Prerequisites
**Technical Requirements**
- Azure subscription
- Access to:
  - Azure Portal
  - Log Analytics Workspace
- One or more of the following resources sending logs:
  - Azure Virtual Machine
  - Azure Kubernetes Service (AKS)
  - Azure App Service
  - Azure Monitor / Activity Logs

*Knowledge Prerequisites*
- Basic understanding of:
  - Azure Monitor
  - Logs vs Metrics
  - SRE concepts (SLIs, incidents, MTTR)
 
## Scenario

You are an SRE supporting a production workload on Azure.
Users are reporting intermittent latency and errors. Your task is to:
1. Explore logs using KQL
2. Identify error patterns
3. Analyze performance trends
4. Generate actionable insights for reliability improvement

## Lab Environment Overview

You will work with:
- Azure Log Analytics Workspace
- Tables such as:
  - AzureActivity
  - AppRequests
  - AppExceptions
  - ContainerLog
  - SecurityEvent
  - Heartbeat
 
## Part 1: Accessing Log Analytics and Understanding Data
### Step 1: Open Log Analytics Workspace

1. Sign in to Azure Portal
2. Navigate to Log Analytics Workspaces
3. Select your workspace
4. Click Logs

*You will see the KQL Query Editor.*

### Step 2: Explore Available Tables

*Run:*
```kql
.show tables
```

*Concept:
Tables represent different telemetry sources (VMs, apps, containers, platform logs).*

### Step 3: Inspect a Table Schema

*Example:*
```kql
AppRequests
| getschema
```

*Concept:
Understanding schema is critical before querying logs effectively.*

## Part 2: Basic KQL Queries
### Step 4: Retrieve Sample Records
```kql
*AppRequests*
| take 10
```
**Key Concepts:**
- take retrieves sample rows
- Queries are pipe (|) based

### Step 5: Filter Logs Using where
```kql
*AppRequests*
| where TimeGenerated > ago(1h)
```

*SRE Use Case:
Focus on recent incidents.*

### Step 6: Filter by HTTP Response Code
```kql
*AppRequests*
| where ResultCode >= 500
```

*SRE Insight:
HTTP 5xx errors indicate service-side failures.*

## Part 3: Aggregation and Metrics Analysis
### Step 7: Count Errors Over Time
*AppRequests*
```kql
| where ResultCode >= 500
| summarize ErrorCount = count() by bin(TimeGenerated, 5m)
```

**Concepts Introduced:**
- summarize
- count()
- bin() for time-series data

*Use Case:
Visualize error spikes during incidents.*

### Step 8: Calculate Average Response Time
*AppRequests*
```kql
| summarize AvgLatency = avg(DurationMs)
```

### Step 9: Latency by Endpoint
*AppRequests*
```kql
| summarize AvgLatency = avg(DurationMs) by Name
| order by AvgLatency desc
```

*Outcome:
Identify slow endpoints impacting user experience.*

## Part 4: Advanced Filtering and Parsing
### Step 10: Analyze Application Exceptions
*AppExceptions*
```kql
| where TimeGenerated > ago(24h)
| project TimeGenerated, Type, Message
```

### Step 11: Group Exceptions by Type
*AppExceptions*
```
| summarize Count = count() by Type
| order by Count desc
```

*Insight:
Helps prioritize recurring failure modes.*

## Part 5: Working with Infrastructure Logs (VMs / Containers)
### Step 12: VM Heartbeat Check
*Heartbeat*
```
| summarize LastSeen = max(TimeGenerated) by Computer
```

*Use Case:
Detect unresponsive or unhealthy nodes.*

### Step 13: Container Logs (AKS)
*ContainerLog*
```kql
| where TimeGenerated > ago(30m)
| project TimeGenerated, ContainerName, LogMessage
```
Step 14: Search for Error Patterns
ContainerLog
| where LogMessage contains "error"

## Part 6: Correlation and Root Cause Analysis
### Step 15: Correlate Requests and Exceptions
*AppRequests*
```kql
| where ResultCode >= 500
| join kind=inner (
    AppExceptions
) on OperationId
```

*Concept:
join allows cross-log correlation.*

*Outcome:
Link user-facing failures to internal exceptions.*

## Part 7: SRE-Focused Queries (SLI/SLO)
### Step 16: Error Rate (SLI Example)
*AppRequests*
```kql
| summarize
    TotalRequests = count(),
    FailedRequests = countif(ResultCode >= 500)
| extend ErrorRate = FailedRequests * 100.0 / TotalRequests
```

### Step 17: Availability SLI Over Time
*AppRequests*
```kql
| summarize
    Availability = 100.0 - (countif(ResultCode >= 500) * 100.0 / count())
    by bin(TimeGenerated, 10m)
```

*Application:
Used for SLO tracking and error budget calculations.*

## Part 8: Visualization
### Step 18: Render Time-Series Charts
*AppRequests*
```kql
| summarize count() by bin(TimeGenerated, 5m)
| render timechart
```
Available visualizations:
- timechart
- barchart
- piechart
