---
layout: page
title: Getting Started With AKS
---

# Getting Started With AKS

This module transitions students from understanding Kubernetes to actually understanding the design and architecture of AKS.

## 1. What Exactly Is AKS?

Think of AKS as:

> **Kubernetes-as-a-service where Azure manages the brain, and you manage the muscles.**

Azure fully manages:
- Control plane VMs
- ETCD database
- Master node upgrades
- API server availability
- Certificate rotation

You manage:
- Worker nodes
- Node pools
- Autoscaling
- Networking decisions
- Deployed applications

SRE takeaway:

> *AKS gives you production-grade Kubernetes with drastically reduced operational burden.*

## 2. AKS Architecture: What Happens Behind the Scenes
**Managed Control Plane**

You never see these VMs. They’re hidden.
But internally they include:
- ETCD cluster
- API server
- Scheduler
- Controller Manager

Azure ensures:
- High availability
- Automatic backups
- Zero maintenance required
- Version consistency

**Node Pools (Worker Nodes)**

You control these.
Each node is a VM managed by Azure VM Scale Sets.

**SRE analogy:**

> *Node pools are like different “departments” — each can have different skills (CPU-heavy, GPU-heavy, spot, etc.)*

Types:
-**System node pool**— runs AKS core services
- **User node pool** — runs your workloads
- **Spot node pool** — cheap but not guaranteed
- **GPU node pool** — ML & compute workloads

## 3. AKS Networking Explained in Real-World Terms

AKS must assign:
- IPs to nodes
- IPs to pods
- IPs to services

Azure gives you two ways:

**Kubenet**
- Simpler, uses NAT.
- Pods get IPs from a secondary private range.
- Nodes do routing.
- Suitable for smaller clusters.

**Azure CNI**
- Pods get IPs directly from the VNET.
- Allows deeper VNET integration.
- Standard for enterprise setups.

**Analogy:**

- Kubenet = internal office extension numbers
- Azure CNI = dedicated company phone numbers for every employee

## 4. Identity & Security Foundation in AKS

AKS integrates with Azure AD for:
- Authentication (who can access the cluster)
- RBAC (what they can do)

Each AKS cluster also has:
- **Managed Identity** (for interacting with other Azure services)
- **Node Managed Identity** (each VM/node has an identity)

Real-world case:

When your application needs secrets, it can use workload identity to securely access Key Vault **without storing passwords.**

## 5. How SREs Think When Deploying AKS

SRE focuses:
- Reliability
- Scalability
- Observability
- Security
- Cost efficiency

So the initial cluster decisions must account for:
- Node pool separation
- Network model
- Identity design
- Upgrades & maintenance
- Future integrations (monitoring, ingress, policy)

SRE analogy:

> *Setting up AKS is like designing the foundation of a skyscraper — everything else stands on it.*

### Hands-On Activities

1. Create a Resource Group for AKS.
2. Deploy AKS cluster using Portal (default settings).
3. Deploy AKS using Azure CLI with custom networking.
4. Deploy AKS using Terraform/Bicep.
5. Create additional node pools (system/user/spot).
6. Integrate AKS with ACR using managed identities.
7. Connect to AKS using kubectl from Cloud Shell and local machine.
8. Deploy a sample application and test cluster behavior.