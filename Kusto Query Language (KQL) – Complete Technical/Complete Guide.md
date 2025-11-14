# Kusto Query Language (KQL) – Complete Technical + Conceptual Guide.

This guide is structured to help Site Reliability Engineers gain real expertise in diagnosing, analyzing, and improving system reliability using KQL across Azure Monitor, Log Analytics, and Application Insights.

## MODULE 1 — INTRODUCTION TO KQL

**1.1 What is Kusto Query Language?**
KQL is a read-only, columnar, distributed query language optimized for:
- high-volume logs
time-series metrics
- observability and diagnostics
- real-time root-cause analysis

It powers:
- Azure Monitor Logs
- Log Analytics Workspaces
- Application Insights
- Azure Data Explorer
- Microsoft Sentinel

### Key Characteristics
| Property                           | Description                                    |     |
| ---------------------------------- | ---------------------------------------------- | --- |
| **Read-only**                      | You cannot update or delete records.           |     |
| **Optimized for logs and metrics** | High-ingestion, low-latency analysis.          |     |
| **Columnar**                       | Efficient scanning of specific columns.        |     |
| **Functional style**               | Piped transformations (`                       | `). |
| **Stateless per query**            | No session context; every query is standalone. |     |
---

## MODULE 2 — DATA MODEL: CONCEPTUAL & TECHNICAL UNDERSTANDING

**2.1 Data Types You Must Know**

| Type       | Examples          | Notes                    |
| ---------- | ----------------- | ------------------------ |
| `string`   | "hello", "error"  | Most logs are strings    |
| `int`      | 1, 42, -3         | Whole numbers            |
| `real`     | 3.14              | Floating-point           |
| `bool`     | true/false        |                          |
| `datetime` | 2024-12-12T11:00Z | Core for time-series     |
| `timespan` | 5m, 30s           | Durations                |
| `dynamic`  | JSON objects      | Used in logs extensively |
---

**2.2 Most Important SRE Tables**

| Table              | Description                   |
| ------------------ | ----------------------------- |
| `AppRequests`      | Incoming request telemetry    |
| `AppDependencies`  | Outgoing HTTP/SQL/Queue calls |
| `AppExceptions`    | Exceptions & stack traces     |
| `AzureDiagnostics` | Platform logs                 |
| `Heartbeat`        | Agent health                  |
| `Syslog`           | Node logs                     |
| `InsightsMetrics`  | CPU, memory, custom metrics   |
---

## MODULE 3 — KQL FUNDAMENTALS

**3.1 Query Anatomy**
```kusto
TableName
| where ...
| summarize ...
| render ...
```

**Key Concepts:**
- Left-to-right pipeline
- No side effects
- Functional transformations
---

## MODULE 4 — FILTERING & PROJECTIONS (PRACTICAL)

**4.1 where**
```kusto
AppRequests
| where timestamp > ago(30m)
| where success == false
```

**4.2 project — select only required columns**
```kusto
| project timestamp, name, duration, success
```

**4.3 project-away — remove noise**
```kusto
| project-away cloud_RoleInstance, customDimensions
```

**4.4 extend**
```kusto
| extend duration_ms = toreal(duration) / 1ms
```

*PRACTICAL TIP: Always project early to reduce scan cost in large datasets.*
---

## MODULE 5 — AGGREGATION & SUMMARIZATION

**5.1 summarize core patterns**
```kusto
AppRequests
| summarize Count = count() by name
```

**Group by time**
```kusto
| summarize Count = count() by bin(timestamp, 5m)
```

**Multiple aggregations**
```kusto
| summarize 
      P95 = percentile(duration, 95), 
      Errors = countif(success == false) 
    by bin(timestamp, 5m)
```
---

## MODULE 6 — TIME SERIES ANALYSIS FOR SRE

This is where SREs use KQL the most.

**6.1 Latency percentiles**
```kusto
AppRequests
| summarize 
      P50 = percentile(duration, 50),
      P95 = percentile(duration, 95),
      P99 = percentile(duration, 99)
    by bin(timestamp, 1m)
```

**6.2 Requests per second (RPS)**
```kusto
AppRequests
| summarize RPS = count() / 60 by bin(timestamp, 1m)
```

**6.3 Error rates**
```kusto
AppRequests
| summarize ErrorRate = countif(success == false) / count() 
    by bin(timestamp, 5m)
```

**Visualization**
```kusto
| render timechart
```

## MODULE 7 — JOINS, UNIONS & DATA SHAPING (TECHNICAL DEEP DIVE)

**7.1 join**

Joining requests to dependencies:
```kusto
AppRequests
| where timestamp > ago(1h)
| join kind=inner (
      AppDependencies | project operation_Id, dependencyDuration = duration
  ) on operation_Id
```

**JOIN TYPES**

| Join       | Description                      |
| ---------- | -------------------------------- |
| inner      | only matching rows (most common) |
| leftouter  | all from left + matches          |
| rightouter | all from right                   |
| fullouter  | everything                       |
| anti       | left minus matches               |
---

**7.2 union**
```kql
union AppTraces, AppExceptions
| where severityLevel >= 3
```
---

## MODULE 8 — PARSING LOGS (CRITICAL FOR APP INSIGHTS & DEVOPS)

**8.1 parse**
```kql
AppTraces
| parse message with "User " userId " logged in from " ip
```

**8.2 extract() with regex**
```kql
| extend errorCode = extract("error:([0-9]+)", 1, message)
```

**8.3 JSON Parsing (dynamic)**
```kql
AppTraces
| extend json = parse_json(customDimensions)
| project timestamp, json.sessionId, json.env
```

**8.4 split strings**
```kql
| extend parts = split(message, " ")
```
---

## MODULE 9 — KQL IN AZURE MONITOR, APP INSIGHTS, AND LOG ANALYTICS

**9.1 Application Insights**

**Request tracing**
```kql
requests
| where operation_Id == "<ID>"
```

**Failed dependencies**
```kql
dependencies
| where success == false
```

**9.2 Azure Monitor Metrics (via InsightsMetrics)**
Example:
```kql
InsightsMetrics
| where Name == "cpuUsage"
| summarize avg(Val) by bin(TimeGenerated, 1m), Computer
```

**9.3 VM Logs (Syslog)**
```kql
Syslog
| where Facility == "auth"
| where SeverityLevel >= 3
```
---

## MODULE 10 — VISUALIZATION, DASHBOARDS & ALERTS

**10.1 Timechart**
```kql
| render timechart
```

**10.2 Barchart**
```kql
| render barchart
```

**10.3 Alerts (Scheduled Query Alerts)**
Example: High error-rate alert
```kql
AppRequests
| summarize Failures = countif(success == false) by bin(timestamp, 5m)
| where Failures > 30
```

*Alert frequency recommendation for SRE:*
- 1 min for critical services
- 5 min for medium
- 15 min for low-priority
---

## MODULE 11 — ADVANCED KQL FOR SRE

**11.1 make-series**
```kql
AppRequests
| make-series avg(duration) 
      on timestamp 
      from ago(2h) to now() 
      step 1m
```

**11.2 Anomaly Detection**
```kql
AppRequests
| summarize Avg = avg(duration) by bin(timestamp, 5m)
| extend (anom, score, baseline) = series_decompose_anomalies(Avg)
```

**11.3 Materialized Views**
Used for:
- Dashboards
- Heavy workloads
- Long-term trends

**11.4 Creating KQL Functions**
```kql
let ErrorRate = (t:timespan) {
    AppRequests
    | where timestamp > ago(t)
    | summarize ER = countif(success == false) / count()
};
ErrorRate(1h)
```
---

## MODULE 12 — HANDS-ON SRE LABS (PRACTICAL TRAINING)
### LAB 1 — Diagnose High Latency

**Goal: Find root cause of P99 spikes.**

*Steps:*
1. Identify impacted endpoints
```kql
AppRequests
| summarize P99 = percentile(duration, 99) by name
```

**2. Check dependencies**
```kql
AppDependencies
| summarize P95 = percentile(duration, 95) by target
```

**3. Join request & dependency**
```kql
AppRequests
| join AppDependencies on operation_Id
| summarize avg(duration), avg(dependencyDuration) by name, target
```

### LAB 2 — Failed Login Investigation
**Parse logs:**
```kql
AppTraces
| parse message with "login failed for user " userId ":" reason
```

**Group failures**
```kql
| summarize count() by userId, reason
```

### LAB 3 — Reliability Dashboard

Metrics to include:

- Error Rate
- P95 latency
- CPU usage
- Dependency failures
- RPS
Queries included earlier.

### LAB 4 — Anomaly Detection Alert
```kql
AppRequests
| summarize Avg = avg(duration) by bin(timestamp, 1m)
| extend (anom, score, baseline) = series_decompose_anomalies(Avg, 3, -1, 'linefit')
| where anom > 0
```
---

MODULE 13 — BEST PRACTICES (MOST IMPORTANT FOR SRE)

**Project early**
Reduces costs.

**Use bin() for time-series**
Avoid random timestamps.

**Use explicit column types**
Avoid dynamic unless needed.

**Don’t overuse join**
Large joins = slow & expensive.

**Use summarize before join**
Smaller datasets → faster.

**Use materialized views for dashboards**
Don’t compute heavy queries on the fly.