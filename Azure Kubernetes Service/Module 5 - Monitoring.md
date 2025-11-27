# Observability, Logging & Monitoring in AKS

Monitoring is the **heart of SRE work.**
This module gives your learners the exact mental model used by production SRE teams.

## 1 What SREs Care About: SLOs, SLIs & Error Budgets

Before monitoring tools, SREs define:
- SLOs → e.g., 99.9% availability
- SLIs → request latency, error rates
- Error budget → allowed failure before reacting

Analogy:

> *A company sets rules like “95% of customer issues must be resolved within 1 hour.”*

Monitoring is built around these goals.

## 2 Azure Monitor for Containers

Azure Monitor collects:
- CPU, memory metrics
- Node & pod health
- Container logs
- Kube events
- Node disk/IO health

It provides:
- Insights dashboards
- Out-of-the-box alerts
- Log Analytics workspace integration

SRE Perspective:

> *It’s your single pane of glass for cluster health.*

## 3 Logs, Metrics & Traces — The Three Pillars
**Metrics**
- Quantitative (CPU, Memory, QPS).
- Stored in time-series databases.

**Logs**
- Event details (errors, warnings, debug).

**Traces**

Multi-service request flows (good for microservices).

Analogy:
- Metrics = vital signs (heart rate)
- Logs = doctor’s notes
- Traces = MRI scans showing flow inside

## 4. Prometheus & Grafana (Open Source Observability)

**Prometheus:**
- Scrapes metrics from pods & nodes
- Stores time-series data

**Grafana:**
- Visualizes metrics in custom dashboards

Why SREs love it:

> *Full transparency + customization + alerts driven by queries.*

## 5. Application Insights & Distributed Tracing

Great for:
- Microservices
- API performance
- Tracing calls between services

Helps detect:
- Latency hotspots
- Downstream failures
- Dependency failures

## 6. Alerting Strategy for SRE

Alerts must be:
- Actionable
- Non-noisy
- Based on SLOs
- Routed via PagerDuty / Teams / Slack

Examples:
- Pod restart loop
- Node pressure (CPU/memory/disk)
- API latency above threshold
- Error rate spike

## 7. Logging Architecture for AKS

Azure Monitor collects:
- Container logs (stdout/stderr)
- Node logs
- Audit logs

You can route logs to:
- Event Hub
- Storage Account
- SIEM systems
- Third-party tools like Splunk or Elastic

This gives deep visibility across the cluster.

### Hands-On Activities

1. Enable Azure Monitor for AKS.
2. View live metrics, logs, and events in Container Insights.
3. Deploy Prometheus and Grafana using Helm.
4. Create custom Grafana dashboards for pods/nodes/apps.
5. Enable Application Insights tracing in sample apps.
6. Configure alerts based on SLOs.
7. Explore logs in Log Analytics and write Kusto queries.