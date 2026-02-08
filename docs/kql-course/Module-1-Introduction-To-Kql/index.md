MODULE 1 — INTRODUCTION TO KQL

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
| **Functional style**               | Piped transformations (`              `).      |     |
| **Stateless per query**            | No session context; every query is standalone. |     |