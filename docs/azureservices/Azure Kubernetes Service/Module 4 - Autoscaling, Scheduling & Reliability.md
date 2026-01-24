---
layout: page
title: Autoscaling, Scheduling & Reliability Engineering in AKS
---

# Autoscaling, Scheduling & Reliability Engineering in AKS

This module shows how Kubernetes ensures reliability, scalability, and self-healing, and how SREs design systems for zero downtime.

## 1. Autoscaling in Kubernetes: How It Really Works

There are 3 types of autoscaling:

### 1. Horizontal Pod Autoscaler (HPA)

Scales pods based on:
- CPU
- Memory
- Custom metrics
- External metrics (when using KEDA)

Analogy:

> *More customers → more checkout counters open.*

### 2. Vertical Pod Autoscaler (VPA)

Adjusts resource requests automatically.

Analogy:

> *A small desk being upgraded to a bigger one if an employee needs more space.*

Not recommended for stateless production workloads unless used in recommendation mode.

### 3. Cluster Autoscaler (CA)

Scales nodes based on pod demands.

Analogy:

> *If all desks in the office are full, the office expands with more desks.*

Cluster autoscaler works with:
- VM scale sets
- Node pools

## 4. KEDA (Event-Driven Autoscaling)

KEDA enables scaling based on:
- Queue length
- Kafka lag
- Event Hub load
- Custom external metrics

**Analogy:**

> *The office hires temporary staff only when the number of tasks in the inbox increases.*

**SRE Love Reason:**

> *Saves huge cost by scaling to ZERO when idle.*

## 5. Kubernetes Scheduling 

Scheduler decides which node a pod should run on using:
- Resource availability
- Affinity/Anti-affinity rules
- Node taints & tolerations
- Pod priority

Analogy:

> *You place employees in departments where they fit best based on skills and available workspace.*

## 6. Self-Healing & Resilience Features

Kubernetes ensures:
- Restart on failure
- Relocation of pods when node dies
- ReplicaSets maintain desired state

Probes:
- Liveness → Is the app healthy?
- Readiness → Is the app ready for traffic?
- Startup → Is the app booting slowly?

SRE Comparison:

> *Kubernetes will automatically page itself before paging you.*

## 7. Pod Disruption Budgets (PDB) & Drain Safety

PDB ensures:
- During upgrades
- During node drains
- During disruptions

Your app stays available.

Example:
*“You must keep at least 2 pods running at all times.”*

This prevents downtime during maintenance cycles.

### Hands-On Activities (List Only)

1. Implement CPU-based autoscaling using HPA.
2. Configure Cluster Autoscaler on a node pool.
3. Deploy KEDA and scale based on Azure Queue.
4. Apply node taints, tolerations & affinity rules.
5. Configure Pod Disruption Budgets.
6. Simulate node failure and watch pod eviction/recovery.
7. Add liveness and readiness probes to applications.