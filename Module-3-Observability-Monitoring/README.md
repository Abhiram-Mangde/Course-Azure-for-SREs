# Module 3: Observability & Monitoring

## Overview
Learn how to monitor Azure resources, set up dashboards, analyze logs, and configure alerts for proactive reliability.

---

## Lesson 3.1: Monitoring & Observability Fundamentals
- Importance of monitoring for SREs
- Three pillars: Metrics, Logs, Traces
- **Analogy:** Car dashboard for observability

---

## Lesson 3.2: Azure Monitor Basics
- Collect and visualize performance data
- Create dashboards and set alerts
- **Demo:**
  - Open Azure Monitor in the portal
  - Add CPU and network charts for a VM

---

## Lesson 3.3: Log Analytics & Application Insights
- Query logs and monitor applications
- **Demo:**
  - Enable Application Insights for a web app
  - Run a Log Analytics query: `search * | where Level == "Error"`

---

## Lesson 3.4: Alerts & Notifications
- Set up proactive alerts and notifications
- Tune alert rules for actionable insights
- **Demo:**
  - Create an alert for CPU > 70%
  - Trigger alert and receive email notification

---

## Assessment
- Quiz and dashboard creation lab


## Mini Project: Monitor Your First VM
**Goal:** Set up monitoring and alerts for a virtual machine.

**Tasks:**
1. Deploy a Linux VM in Azure.
2. Enable Azure Monitor and Application Insights for the VM.
3. Create a dashboard showing CPU and memory usage.
4. Set an alert for CPU > 70% and trigger it with a stress test.
5. Review logs and metrics in Log Analytics.

**Submission:**
- Submit screenshots of your dashboard, alert, and log query results.

---

## Hands-On Assignment
**Scenario:** You need to monitor a web app for performance and errors.

**Instructions:**
1. Describe three key metrics and logs you would track for a web app.
2. Explain how you would set up alerts for critical issues.
3. Share your monitoring plan in the course forum or with your instructor.

---

## Resources
- [Azure Monitor Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/overview)
- [Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)
- [Log Analytics](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-tutorial)
