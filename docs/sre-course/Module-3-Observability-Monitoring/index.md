---
layout: page
title: Module 3 - Observability & Monitoring
---

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

## Troubleshooting Tips & Common Mistakes

- If metrics are missing, check that monitoring is enabled for the resource.
- Alerts not firing? Verify thresholds and notification settings.
- Common mistake: Not configuring Log Analytics workspace for logs.
- Use tags to organize resources for easier monitoring.

---

## Visual Guide

![Azure Monitor Dashboard Example](https://learn.microsoft.com/en-us/azure/media/azure-monitor/overview/monitor-dashboard.png)
*Sample Azure Monitor dashboard.*

---

## Quick Quiz

1. What are the three pillars of observability?
2. How do you set up an alert for high CPU usage?
3. What is the role of Application Insights?

*Discuss your answers in the course forum or with your instructor.*

---

## Community & Discussion

- Join the [Azure SRE Learners Forum](https://techcommunity.microsoft.com/t5/azure/ct-p/Azure)
  to ask questions, share projects, and connect with peers.

---

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
