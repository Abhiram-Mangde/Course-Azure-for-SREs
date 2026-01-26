---
layout: page
title: Case Study – Building Reliability During Traffic Spikes Using SRE Principles on Azure
---

# Building Reliability During Traffic Spikes Using SRE Principles on Azure
## Problem Statement
A mid-sized product company operates a customer-facing web application hosted on Microsoft Azure.
The application supports approximately **50,000 daily active users** and experiences traffic peaks during **business hours and marketing campaigns**.

The organization follows **DevOps practices** for CI/CD and cloud deployments but does not yet have a formal Site Reliability Engineering (SRE) process in place.

During a major marketing campaign, the system failed to handle a sudden surge in demand, resulting in partial service outage, degraded performance, and business impact.

## Existing Azure Architecture
The application is built on the following Azure services:

- Azure Application Gateway (WAF enabled)
- Azure App Service (Web API layer)
- Azure SQL Database
- Azure Redis Cache
- Azure Blob Storage
- Azure Monitor & Log Analytics
- Azure DevOps Pipelines

The architecture was designed for normal traffic patterns but not explicitly validated for burst traffic scenarios.

## Incident Summary
During the marketing campaign:
- Incoming traffic increased 3× within 15 minutes
- Application response time degraded rapidly
- Users experienced:
  - Request timeouts
  - HTTP 500 errors
- The incident lasted 47 minutes

## Business Impact
- Approximately 18% of transactions failed
- Customer complaints increased significantly
- Loss of revenue during peak campaign hours
- DevOps team spent time firefighting instead of diagnosing root causes
- Erosion of customer trust and brand reliability

## Initial Assumption

> “Azure will automatically scale everything.”
This assumption proved to be incorrect and risky.

While some components scaled automatically, critical dependencies did not, exposing hidden system limits.

## Root Cause Analysis (SRE Approach)

### 1. What Failed?
- Azure App Service scaled out successfully
- Azure SQL Database did not scale
  - Connection pool exhaustion occurred
- Azure Redis Cache reached memory limits
- No early warning alerts fired before user impact

### 2. Why It Failed?
| Layer         | Issue                                     |
| ------------- | ----------------------------------------- |
| Application   | No graceful degradation mechanism         |
| Scaling       | Autoscale configured only for App Service |
| Database      | Single-tier SQL, no replicas              |
| Observability | Alerts were reactive, not proactive       |
| Process       | No defined SLOs or error budget           |

The objective of SRE is not zero failures, but to:
- Detect issues early
- Limit blast radius
- Recover quickly
- Learn and continuously improve

## Step 1: Define SLI, SLO & Error Budget
**Service Level Indicators (SLIs)**
- API success rate (% of 2xx responses)
- API latency (P95)

**Service Level Objectives (SLOs)**
- 99.5% API success rate per month
- P95 latency < 800 ms

**Error Budget**
- Allowed downtime: ~3.6 hours per month

This provided clarity on:
- When to act urgently
- When not to panic
- When to slow feature releases

## Step 2: Holistic Auto-Scaling (Beyond App Service)

**App Service Scaling**

Configured autoscale based on:
- CPU utilization
- Memory usage
- HTTP request queue length

**Azure SQL Database**
- Moved to Elastic Pool or Hyperscale
- Introduced read replicas for reporting and read-heavy traffic

**Azure Redis Cache**
- Memory-based alerts configured:
  - 70% usage → Warning
  - 85% usage → Critical

Scaling decisions now account for dependent services, not just compute.

## Step 3: Implement Graceful Degradation
Instead of hard failures:
- If Redis slows down:
  - Fall back to in-memory cache
  - Serve slightly stale data
- If SQL is under pressure:
  - Temporarily disable non-critical features
    - Reports
    - Exports
    - Background analytics

Users experience reduced functionality, not outages.

## Step 4: Proactive Alerting (Before Users Notice)
**Key Azure Monitor Alerts**

| Metric           | Threshold         | Action            |
| ---------------- | ----------------- | ----------------- |
| API failure rate | >1% for 5 minutes | Page on-call      |
| SQL DTU usage    | >80%              | Scale or throttle |
| App latency      | >700 ms           | Investigate       |
| Redis memory     | >70%              | Scale cache       |

Alerts are now:
- Symptom-based
- Focused on user experience
- Not infrastructure noise

## Step 5: Improved Observability
**Tools Used**
- Azure Application Insights
- Azure Log Analytics
- KQL dashboards

**Improvements Made**
- Distributed tracing enabled
- Dependency maps activated
- Slow SQL queries logged automatically

**Result:**
Mean Time To Detect (MTTD) reduced significantly

## Step 6: Incident Response Playbook

A simple, repeatable runbook was created:
1. Check API failure rate dashboard
2. Validate dependency health (SQL, Redis)
3. Apply predefined scaling actions
4. Communicate status to stakeholders
5. Conduct post-incident review

This reduced confusion and panic during incidents.

## Step 7: Post-Incident Review
**Key Learnings**
- Autoscaling alone does not ensure reliability
- Dependencies define true system limits
- SLOs align engineering decisions with business impact

**Action Items**
- Introduce quarterly chaos testing
- Load test scaling policies regularly
- Review and evolve SLOs as traffic grows

**This case demonstrates how real Azure systems fail — not due to lack of tools, but lack of reliability thinking.**

Small, practical SRE-driven changes:
- Improved resilience
- Reduced downtime
- Protected revenue
- Increased customer trust

SRE is not a role — it is a mindset.
