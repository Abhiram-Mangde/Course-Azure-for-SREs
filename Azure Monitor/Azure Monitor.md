# 1. What is Azure Monitor?

## Conceptually:
Azure Monitor is the full-stack monitoring service for Azure, designed to collect, analyze, and act on telemetry data from your cloud and on-premises environments. Its purpose is to maximize the performance and availability of applications and services.

**Key ideas for SREs:**

- Observability is about metrics, logs, and traces.
- Monitoring is about alerting, troubleshooting, and proactive maintenance.
- Azure Monitor is centralized; it unifies monitoring for infrastructure, applications, and network.

**Practical Example:**
- You have an Azure App Service hosting an API. Azure Monitor can tell you how many requests per second, response times, failed requests, and CPU/memory usage of the service.

## 2. Key Concepts in Azure Monitor

### 2.1 Telemetry Types
Azure Monitor collects three main types of data:

**1. Metrics**
- Numeric values over time.
- High-frequency, structured, and lightweight.
- ***Example:** CPU utilization of a VM, request count for an app.*

**2. Logs**
- Rich, structured or unstructured data.
- Stored in a Log Analytics workspace.
- ***Example:** Application exceptions, resource creation logs, security events.*

**3. Traces**
- Part of distributed tracing for applications.
- Tracks a single request across multiple services.
- ***Example:** An API request going through frontend → backend → database.*

### 2.2 Core Components

**1. Data Sources**
- **Azure resources:** VMs, App Services, Functions, AKS, Storage.
- **On-prem or other clouds:** Using agents or exporters.
- **Custom applications:** Using SDKs or REST API.

**2. Data Collection**
- **Agents:** e.g., Log Analytics agent, Azure Monitor agent (AMA).
- **Diagnostics settings:** Configure which metrics/logs are sent.

**3. Data Stores**
- **Metrics store:** Time-series database optimized for quick visualization.
- **Log Analytics workspace:** Stores logs for querying with Kusto Query Language (KQL).

**4. Analysis Tools**
- **Metrics Explorer:** Visualize trends in real time.
- **Log Analytics:** Query logs with KQL.
- **Workbooks:** Custom dashboards combining logs, metrics, text, and visuals.

**5. Action/Automation**
- Alerts: Triggered when metrics/logs exceed thresholds.
- Autoscale: Automatically scale resources based on metrics.
- Logic Apps/Runbooks: Automate operational responses.

### 2.3 Alerts

- **Metric Alerts:** Triggered when numeric metric crosses a threshold.
- **Log Alerts:** Triggered by specific log patterns (using KQL queries).
- **Smart Alerts:** AI-based anomaly detection.
- **Action Groups:** Define notifications/actions (email, SMS, webhook, Logic App).

***Practical Example:***
- Trigger an alert if VM CPU > 80% for 5 minutes.
- Trigger an alert if your API throws more than 50 errors in 1 minute.

### 2.4 Visualizations

- **Azure Dashboards:** Combine metrics, logs, and workbooks.
- **Workbooks:** Interactive reports for troubleshooting and SRE reports.
- **Application Insights:** Part of Azure Monitor focused on application performance monitoring (APM).
---

## 3. Practical Implementation Steps
### Step 1: Enable Azure Monitor
- Most Azure resources have Monitoring/Diagnostics settings.
- Configure diagnostic settings to send logs and metrics to:
    - Log Analytics workspace
    - Storage Account
    - Event Hub

### Step 2: Collect Data

- **VMs →** Install Azure Monitor agent.
- **App Services →** Enable Application Insights.
- **AKS →** Enable Container Insights.

### Step 3: Query and Analyze
- Use Log Analytics workspace:
```kusto
// Count failed requests in last 1 hour
requests
| where success == "False"
| summarize count() by bin(timestamp, 1h)
```
- Metrics Explorer: visualize CPU, memory, disk, network over time.

### Step 4: Set Alerts
- Metric alert: CPU > 80% for 5 minutes.
- Log alert: More than 10 failed requests in 5 minutes.
- Use action groups to notify Slack/email/Teams.

### Step 5: Visualize
- Build dashboards combining metrics, logs, and alerts.
- Use workbooks for SRE reporting and postmortems.

## 4. Advanced Concepts for SREs

**1. Application Insights**
- Performance monitoring: request duration, failure rate, dependencies.
- Distributed tracing for microservices.
- Live Metrics Stream for real-time observation.

**2. Autoscale & Insights**
- Scale VMs or App Services automatically based on metrics.

**3. Log Analytics & KQL**
- Powerful query language for troubleshooting.
- ***Example:** Find top 5 VMs with highest memory usage in last 24 hours:*
```kusto
Perf
| where ObjectName == "Memory" and CounterName == "Available MBytes"
| summarize avg(CounterValue) by Computer
| top 5 by avg_CounterValue desc
```

**4. Integration**

- **Azure Monitor →** PagerDuty/ServiceNow for incident response.
- **Azure Monitor →** Grafana for advanced visualizations.
- **Log-based metrics →** Autoscale decisions.

**5. Best Practices for SRE Monitoring**

1. Centralized logging: Use one Log Analytics workspace per environment.
2. Tag resources consistently: Easier filtering in logs.
3. Alert only actionable events: Avoid alert fatigue.
4. Use dashboards and workbooks for SRE reporting.
5. Enable retention policies: Keep logs long enough for postmortems (30–90 days typical).
---

## Summary

| Concept      | Description                        | Example                                     |
| ------------ | ---------------------------------- | ------------------------------------------- |
| Metrics      | Numeric, high-frequency data       | CPU %, HTTP requests/sec                    |
| Logs         | Structured/unstructured event data | App exceptions, VM events                   |
| Traces       | Distributed request tracking       | API call through microservices              |
| Data Sources | Azure, on-prem, custom apps        | VMs, AKS, Functions                         |
| Collection   | Agents, diagnostic settings        | AMA, App Insights SDK                       |
| Analysis     | Metrics Explorer, KQL, Workbooks   | Query failed requests, visualize CPU trends |
| Alerts       | Metric/log-based                   | CPU > 80%, API errors > 50/min              |
| Actions      | Notifications, automation          | Email, Logic App, Autoscale                 |
