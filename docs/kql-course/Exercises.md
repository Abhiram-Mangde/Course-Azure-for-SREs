# Azure for SRE: Hands-On KQL Exercises

Below exercises simulate real incidents, operational tasks, and analysis workflows an SRE will perform in enterprise Azure environments. Each exercise includes:

- Context (why this matters for SREs)
- Scenario
- Task Requirements
- Hints (optional)
- Expected Skills Learned

## 1. Investigating High CPU Usage Across VM Fleet
### Scenario
Users report intermittent slowdowns in an internal application. Monitoring hints toward VM CPU saturation.

### Task
Using `Perf` table, identify:
- VMs with **>80% average CPU** over the past **2 hours**.
- Create a time-series showing CPU trend every **5 minutes**.
- Highlight the top **5 hottest VMs**.

### Skills
*Aggregation, binning, operational analysis, time-series.*

---

## 2. Tracking Memory Leaks on Application Servers
### Scenario
A microservice experiences periodic crashes suspected due to memory leaks.

### Task
Using `Perf` table:
- Track **Available MBytes** and detect **downward memory trends**.
- Identify machines with **steady multi-hour decline**.
- Highlight probable memory leaks.

### Skills
*Trend analysis, summarization, series inspection.*

---

## 3. Detecting API Endpoint Failures (App Insights)
### Scenario

API errors increased after deployment.

### Task
Using `AppRequests`:
- Find all API endpoints with **success == false** in the last **24 hours**.
- Identify the top failing endpoints and their **correlation operation IDs**.
- Determine whether failures spiked after deployment timestamp.

### Skills
*Failure analysis, grouping, deployment correlation.*

---
## 4. Root Cause Analysis of High Latency Calls
### Scenario
Latency degradation is observed for downstream dependencies.

### Task
Using `AppDependencies`:
- Find dependency calls with **duration > 1 se**c.
- Merge with **AppRequests** to locate the calling operation.
- Identify the **primary sources** of slow dependency calls.

### Skills
*Joining tables, dependency correlation.*

---
## 5. Monitoring Kubernetes Pod Restarts (AKS)
### Scenario
A cluster experiences pod restart loops.

### Task
Using `KubePodInventory `and `ContainerLog`:

- dentify pods with **RestartCount > 3** in the last **6 hours**.
- Determine associated namespaces and container images.
- Extract last **10 log lines** before each restart (via ContainerLog).

### Skills
*Kubernetes troubleshooting, cross-table analysis.*

---
## 6. Detecting Noisy Neighbors in AKS Node Pools
### Scenario
A multi-tenant AKS cluster shows inconsistent application performance.

### Task
Using `Perf`, `KubeNodeInventory`, and `InsightsMetrics`:
- Find nodes with **CPU > 90%** or **Memory > 85%**.
- Map which pods/containers were running on those nodes at that time.
- Identify heavy resource consumers.

### Skills
*Node-level performance, multi-table joins, correlation.*

---
## 7. Visualizing Traffic Spikes to Applications
### Scenario
You suspect a traffic spike due to marketing campaign.

### Task
Using `AppRequests`:
- Build a timechart of incoming requests for last **48h** with **1-minute bins**.
- Identify sudden spikes.
- List the **top 10 client IPs** during spike.

### Skills
*Traffic analysis, time-series visualization.*

---
## 8. Detecting Authentication Failures
### Scenario
Security team reports unusual authentication problems.

### Task
Using `SignInLogs` or `AzureDiagnostics` (depending on workspace):
- Identify failed sign-ins in past **24 hours**.
- Group by user, IP, and resource.
- Detect potential brute-force patterns (more than 20 failures per IP).

### Skills
*Security analytics, pattern detection.*

---
## 9. Analyzing Azure Firewall Logs for Blocked Traffic
### Scenario
A partner system cannot connect to an internal API.

### Task
Using `AzureDiagnostics`:
- Identify recently **denied NSG/Firewall** connections.
- Group by source IP, destination port.
- Visualize the top-blocked traffic.

### Skills
*Azure diagnostics analysis, network troubleshooting.*

---
## 10. Investigating Slow SQL Database Queries
### Scenario
Reports indicate slow app responses traced to SQL backend.

### Task
- Using AzureDiagnostics (SQLInsights):
- Extract query performance data.
- Find queries with **duration > 3 seconds**.
- Group by **database + query** text patterns.
- Identify top slow-running SQL operations.

### Skills
*DB performance, query signature grouping.*

---
## 11. Evaluating Application Deployment Impact
### Scenario
A new deployment was pushed at 14:00, issues started soon after.

### Task
Using `AppRequests` and `traces`:
- Compare **error rate** 1 hour before vs 1 hour after deployment.
- Identify degradation in response time.
- Highlight affected services or endpoints.

### Skills
*Baseline comparison, windowed time filtering, version correlation.*

---
## 12. Detecting Anomalies Using make-series
### Scenario
You want to proactively detect sudden metric abnormalities.

### Task
Using operational metrics of your choice (CPU, API duration, dependency failures):
- Build a **time series** using `make-series`.
- Apply anomaly detection using `series_decompose_anomalies()`.
- Plot the anomaly points.

### Skills
*Advanced analytics, anomaly detection.*

---
## 13. Log Pattern Extraction from Custom Logs
### Scenario
Custom application logs include JSON blobs with inconsistent schemas.

### Task
Using `CustomLogs`:
- Extract fields from JSON using `parse_json`.
- Normalize logs into a table.
- Group by event type and **count occurrences**.
- Identify error patterns and top error categories.

### Skills
*JSON parsing, log normalization, pattern extraction.*

---
## 14. Detecting Misconfigured Load Balancer Health Probes
### Scenario
A backend VM keeps getting removed from Load Balancer pool.

### Task
Using `AzureDiagnostics` (LoadBalancerProbeHealthStatus):
- Identify the probe failures for any backend.
- Correlate with **VM CPU/RAM spikes**.
- Produce a summary of probe failure trends.

### Skills
*LB troubleshooting, multi-source correlation.*

---
## 15. End-to-End RCA: Full-Service Outage Drill
### Scenario
During a simulated outage, multiple services fail. Logs show:
- Spiking CPU
- Dependency timeouts
- 500 errors
- Pod restarts
- High latency DB queries
- Blocked NSG traffic

### Task
Using at least 5 different tables, construct an RCA:
1. Find timeline of events (requests, dependencies, pod restarts).
2. Correlate failures with infrastructure symptoms (CPU, memory, networking).
3. Identify root cause and blast radius.
4. Provide recommendation as if writing a professional RCA report.

### Skills
*Full-stack analysis, correlation, SRE-level diagnosis, RCA writing.*

---

