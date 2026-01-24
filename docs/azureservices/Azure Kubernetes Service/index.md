---
layout: page
title: Azure Kubernetes Service (AKS) – Reliability Patterns for SREs
---

# Azure Kubernetes Service (AKS) – Reliability Patterns for SREs

**Why Reliability Matters in AKS**

Kubernetes gives you powerful primitives, **but reliability is not automatic**.
AKS makes it easier to run Kubernetes on Azure, but **poor architecture decisions can still cause outages**.

From an SRE perspective, reliability in AKS means:
- Your application keeps serving users despite failures
- Failures are isolated, detected early, and recovered automatically
- Changes (deployments, scaling) do not break production

This module focuses on real-world reliability patterns you should apply when running workloads on AKS.

## Common AKS Failure Scenarios

Before patterns, let’s understand what actually fails in production:

| Failure            | Real Example         |
| ------------------ | -------------------- |
| Node failure       | Azure VM host reboot |
| Pod crash          | App bug, OOMKilled   |
| Zone outage        | Single AZ dependency |
| Bad deployment     | Broken image pushed  |
| Traffic spike      | Marketing campaign   |
| Dependency failure | DB or API down       |

*Reliability patterns exist to handle these gracefully.*

## Pattern 1: Multi-Node Pool Architecture (Fault Isolation)

**Anti-Pattern**

Running everything in one node pool:
- System pods
- Application pods
- Batch jobs

If one workload misbehaves → **entire cluster impacted**

**Reliability Pattern**

Use multiple node pools:
| Node Pool        | Purpose                            |
| ---------------- | ---------------------------------- |
| `system`         | Core Kubernetes & Azure components |
| `app`            | Production workloads               |
| `spot` / `batch` | Non-critical or batch jobs         |

*Why This Works*
- Isolates noisy workloads
- Prevents system components from starving
- Easier scaling & maintenance
- Treat node pools like **failure domains**, not just compute.

## Pattern 2: Multi-Availability Zone AKS Clusters

**Anti-Pattern**

Single Availability Zone AKS:
- Entire cluster depends on one data center

**Reliability Pattern**

Deploy AKS with **Availability Zones enabled**:
- Nodes spread across AZs
- Load balancer distributes traffic

What This Protects Against
- Azure datacenter failure
- Power or network issues in one zone
- AZs protect infrastructure, **not your app logic** — you still need pod-level resilience.

## Pattern 3: Pod Disruption Budgets (PDBs)
**Problem**

During:
- Node upgrades
- Auto-scaling
- Maintenance

Kubernetes may evict **too many pods at once**.

**Reliability Pattern**

Use **Pod Disruption Budgets** to control availability:

*Conceptually:*

- At least N pods must always be running

*Example Use Case*
- API service with 5 replicas
- Require minimum 4 always available

*This prevents:*
- Accidental downtime during upgrades
- All replicas being drained at once
- If a service is user-facing → it needs a PDB.

## Pattern 4: Horizontal Pod Autoscaling (HPA)
**Anti-Pattern**

Fixed number of replicas:
- Works fine… until traffic spikes

**Reliability Pattern**

Use Horizontal Pod Autoscaler based on:
- CPU
- Memory
- Custom metrics (latency, requests/sec)

*Real-World Example*

- Traffic doubles
- HPA scales pods automatically
- No manual intervention required
- Reliability improves when systems **adapt automatically**, not manually.

## Pattern 5: Readiness & Liveness Probes
**Why This Is Critical**

Kubernetes assumes your app is healthy unless you tell it otherwise.

Without probes:
- Traffic may go to broken pods
- Crashed apps may never restart

**Reliability Pattern**

| Probe     | Purpose                        |
| --------- | ------------------------------ |
| Liveness  | Restart broken containers      |
| Readiness | Stop traffic to unhealthy pods |

Real-World Impact

- Bad deployment? → traffic is blocked
- Partial outage? → pod removed from service
- No probes = unreliable service.

## Pattern 6: Rolling & Progressive Deployments
**Anti-Pattern**

Replace all pods at once:
- One bad image → full outage

**Reliability Pattern**

Use:
- Rolling deployments
- Small batch updates
- Health checks before rollout continues

*Even Better*
- Blue-Green deployments
- Canary releases (small % of traffic)
- Deploy changes without users noticing.

## Pattern 7: Graceful Shutdown & Pod Termination
**The Hidden Reliability Killer**

When pods terminate:
- Requests may be dropped
- In-flight traffic lost

**Reliability Pattern**

Ensure:
- Graceful shutdown handling in app
- Proper termination grace periods
- Load balancer stops routing traffic first
- Many outages happen during scale-down or deployments, not failures.

## Pattern 8: Observability-Driven Reliability

Reliability requires **visibility**.

*Minimum Observability Stack for AKS*
- Metrics (CPU, memory, latency)
- Logs (application + Kubernetes)
- Alerts (SLO-driven, not noise)

*Azure Tools*
- Azure Monitor
- Container Insights
- Prometheus + Grafana (optional)
- If you can’t measure it, you can’t make it reliable.

## Pattern 9: Dependency Resilience

Your AKS app is only as reliable as its dependencies.

**Reliability Techniques**
- Timeouts
- Retries (with backoff)
- Circuit breakers
- Fallbacks

*Example*

- DB is slow → app degrades gracefully
- External API down → cached response used
- Retries without limits can **make outages worse**.

## Pattern 10: Backup, Recovery & Disaster Planning
*What Can Go Wrong*
- Accidental deletes
- Bad configuration
- Cluster recreation needed

**Reliability Pattern**
- Backup cluster state
- Backup persistent volumes
- Document recovery steps
- Test recovery (not just assume)
- Backups that aren’t tested don’t exist.

## Think reliability in layers:

1. Infrastructure – AZs, node pools
2. Platform – Kubernetes primitives
3. Application – probes, shutdowns
4. Traffic – load balancing, rollout strategies
5. Operations – monitoring, alerts, recovery
6. Each layer reduces blast radius.

AKS reliability is **not about avoiding failure** — failures will happen.

It’s about:
- Detecting issues early
- Limiting impact
- Recovering automatically

If you design with reliability patterns from day one, AKS becomes a **powerful, stable platform** for real-world production workloads.
