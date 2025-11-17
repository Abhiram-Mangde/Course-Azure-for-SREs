# CheatSheet

## A complete quick-reference guide for everyday operational use

### 1. KQL Query Basics

**Structure**
```kql
Table
| where ...
| summarize ... by ...
| project ...
| order by ...
```

**Comments**
```kql
// single line
/* multi-line */
```
---

### 2. Core Operators

**Filtering**
```kql
where Column == "value"
where Column != "value"
where Column contains "error"
where Column has "timeout"        // token-based search
where Column !has "success"
```

**String Matching**
```kql
startswith()
endswith()
matches regex ""
contains_cs    // case-sensitive
```

**Logical**
```kql
and, or, in, !in
```
---

### 3. Time Handling (Most used in SRE work)
**Common Time Filters**
```kql
where TimeGenerated > ago(1h)
where Timestamp between (datetime(2025-01-01) .. datetime(2025-01-02))
```

**Binning Time**
```kql
bin(TimeGenerated, 5m)
```

**Time Charts**
```kql
| summarize count() by bin(TimeGenerated, 1m)
| render timechart
```
---

### 4. Summaries & Aggregations
**Frequently used aggregations**
```kql
count()
dcount()
sum()
avg()
min()
max()
percentile(Column, 95)
make_bag()
make_list()
```

**Grouping**
```kql
summarize avg(CPU) by Computer, bin(TimeGenerated, 5m)
```
---

### 5. Projections & Transformations
```kql
project Column1, Column2
extend NewColumn = Column1 + 10
project-away UnwantedColumn
distinct Column
```
---

### 6. Joins (Critical for Correlating Logs)
**Inner Join**
```kql
A | join kind=inner B on CorrelationId
```

**Left Outer Join (most used for RCA)**
```kql
A | join kind=leftouter B on OperationId
```

**Union Tables**
```kql
union AppRequests, AppDependencies, traces
```
---

### 7. Parsing Data (JSON, strings, patterns)
**Parse JSON**
```kql
extend d = parse_json(CustomDimensions)
```

**Parse string with patterns**
```kql
parse Message with "User:" UserId " Action:" ActionName
```

**Extract regex**
```kql
extract("(\\d+\\.\\d+\\.\\d+)", 0, Message)
```
---

### 8. Error & Exception Handling
**Show all failed requests**
```kql
AppRequests
| where success == "False"
```

**Extract exception type**
```kql
exceptions
| extend exType = type
```

**Group errors**
```kql
| summarize count() by type, innermostMessage
```
---

### 9. Dependency & API Performance Analysis
**Find slow dependencies**
```kql
AppDependencies
| where duration > 1s
| order by duration desc
```

**Correlate dependency with request**
```kql
AppDependencies
| join kind=inner AppRequests on OperationId
```
---

### 10. VM Performance (CPU, Memory, Disk)
**CPU**
```kql
Perf
| where CounterName == "% Processor Time"
| summarize avg(CounterValue) by Computer, bin(TimeGenerated, 5m)
```

**Memory**
```kql
Perf
| where CounterName == "Available MBytes"
```

**Disk**
```kql
Perf
| where CounterName contains "Disk"
```
---

### 11. AKS / Kubernetes Logs
**Pod restarts**
```kql
KubePodInventory
| where RestartCount > 0
```

**Container logs**
```kql
ContainerLog
| where ContainerName == "app"
```

**High CPU containers**
```kql
InsightsMetrics
| where Name == "cpuUsageNanoCores"
```
---

### 12. Azure Networking Troubleshooting
**NSG Denies**
```kql
AzureDiagnostics
| where Category == "NetworkSecurityGroupRuleCounter"
| where DeniedOutflows > 0 or DeniedInflows > 0
```

**Firewall blocks**
```kql
AzureDiagnostics
| where Action == "Deny"
```
---

### 13. Azure AD / Security Logs
**Failed sign-ins**
```kql
SigninLogs
| where ResultType != 0
```

**Brute-force detection**
```kql
| summarize count() by IPAddress
| where count_ > 20
```
---
### 14. Table Navigation & Discovery
**List all tables**
```kql
.show tables
```

**Show schema**
```kql
TableName | getschema
```
---

### 15. Power Tips (Used Daily by Real SREs)
**Find top N**
```kql
top 10 by count_
```

**Case statements**
```kql
extend Health = iif(CPU > 90, "Critical", "OK")
```

**Materialize for performance**
```kql
let dataset = materialize(Table | where ...);
dataset | summarize ...
```

**String cleanup**
```kql
trim(" ", Column)
tolower()
toupper()
replace()
```
---

### 16. Visualization Commands
```kql
| render timechart
| render piechart
| render barchart
| render table
```
---

### 17. Useful SRE-Specific One-Liners
**Top error codes**
```kql
AppRequests
| summarize count() by resultCode
```

**Find noisy containers**
```kql
ContainerLog
| summarize count() by ContainerName
```

**High-latency operations**
```kql
AppRequests
| where duration > 2000
```

**Show service dependencies map**
```kql
AppDependencies
| summarize dcount(target) by name
```
---

*Note: This version is optimized for daily use, quick lookups, and deep operational insight — exactly what an SRE needs.*
