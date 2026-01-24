---
layout: page
title: AKS Networking
---

# AKS Networking

Networking is the most confusing part of Kubernetes for most engineers.
This module explains it using plain English, real datacenter analogies, and SRE-level clarity.

## 1. Why Networking in Kubernetes Feels “Different”

Traditional IT experience:
- Each VM gets one IP
- Internal network uses firewalls, routes, VLANs
- Apps talk via hostnames or IPs

Kubernetes world:
- Every pod gets an IP
- Pods communicate flatly (no NAT in cluster)
- Services provide stable virtual IPs
- Load balancing is done by services or ingress

Analogy:

> *Instead of giving an office desk to each employee (VM), Kubernetes gives every employee’s laptop (pod) its own direct network presence.*

## 2. The AKS Networking Models

### 1. Kubenet (Azure-managed basic mode)
- Nodes get IPs from the VNET.
- Pods get IPs from a private internal range, not VNET.
- NAT used for outbound connectivity.

Use Case:
- Smaller clusters
- Simpler IP planning
- No strict enterprise networking constraints

Analogy:

> *Pods are like internal office extensions — not visible outside unless routed.*

### 2. Azure CNI
- Pods get IPs directly from the VNET.
- Fully routable within enterprise network.
- More enterprise-friendly.

Use Case:
- Large clusters
- Enterprise networks requiring pod-level visibility
- Advanced policies and firewalling

Analogy:

*Every pod gets its own phone number from the company phone directory.*

### 3. Azure CNI Overlay
- Fixes IP exhaustion problem.
- Pods get IP from internal overlay range.
- Nodes NAT traffic to VNET.
- High scalability (thousands of pods).

Use Case:
- Large multi-tenant clusters
- Avoid large VNET IP allocations

## 3. Kubernetes Service Types in AKS
**ClusterIP**
- Internal service.
- *Analogy: An internal helpdesk phone number.*

**NodePort**
- Opens a port on each node.
- *Analogy: Every office in the building opens the same external door.*

**LoadBalancer**
- Azure Load Balancer gets created automatically.
- *Analogy: Customers can reach your office through a dedicated reception desk.*

**Ingress**

A smarter layer on top:
- Handles routes
- SSL termination
- Path-based routing
- Custom domain mapping

Ingress controller (like Nginx or AGIC) is like:

> *A receptionist who decides which department a customer should go to.*

## 4. Network Policies (Security Perspective)

By default:
- Every pod can talk to every pod.

Network policies let you restrict traffic:
- Pod-to-pod
- Namespace-to-namespace

Equivalent to:
- Firewalls at pod level.

In AKS, you can use:
- Azure Network Policies
- Calico policies

SRE Reasoning:

> *Least privilege networking reduces blast radius in case of a breach.*

## 5. Outbound Traffic Control (Very Important for SREs)

Outbound traffic from AKS can be routed through:
- NAT gateway
- Azure Firewall
- Forced tunneling
- Private endpoints

This enables:
- Control of egress traffic
- Compliance
- Auditing

### Hands-On Activities

1. Create AKS with Kubenet and Azure CNI to compare behavior.
2. Deploy a sample app and expose it using ClusterIP, NodePort, LoadBalancer.
3. Install & configure Nginx/AGIC Ingress Controller.
4. Configure Ingress rules for multiple services.
5. Create and test Azure Network Policies.
6. Integrate NAT Gateway for outbound control.
7. Inspect traffic using tcpdump inside pods.