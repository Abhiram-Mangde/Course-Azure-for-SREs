---
layout: page
title: Foundations: Containers, Kubernetes & Why AKS Exists
---

# Foundations: Containers, Kubernetes & Why AKS Exists

This module builds the mental model required before even touching AKS.
The explanations use real-world IT analogies so students instantly relate.

## 1. Why Did the Industry Move to Containers?

In traditional IT (VM-based deployments):
- Teams would deploy apps on VMs, install dependencies manually.
- Over time the VM would turn into a “snowflake server” — nobody knew what was installed or changed.
- Scaling meant creating more VMs, manually configuring them, copying configs, applying patches.

- Environment drift was common:
*“It works on my machine but not on production.”*

**Containers solved these problems.**

A container is like a **lightweight, packaged mini-environment** that contains:
- Your app
- All its dependencies
- A predictable runtime

This means:
- If it works on your laptop → it works on production.
- Apps are isolated.
- Spin up takes seconds, not minutes.
- Scaling becomes automated.

Think of a container as:
> **A shipping container for software — same shape, same size, moves anywhere.**

## 2. Why Kubernetes?

Once companies started using containers, they faced a new problem:
- How do you run hundreds of containers?
- What happens if a container crashes at 3 AM?
- Who restarts it?
- How do you update them without downtime?
- How do you scale them based on traffic?

Kubernetes acts like:
> A robot infrastructure administrator
who watches your containers 24×7 and ensures your desired state stays true.

Kubernetes responsibilities:
- Schedule containers across machines (nodes)
- Restart failed containers
- Scale apps automatically
- Load balance traffic
- Apply rolling updates with zero downtime
- Manage secrets, configs, volumes
- Provide an API for automation (great for SREs)

SRE perspective:

> **Kubernetes is an “operating system for the datacenter.”**

## 3. Kubernetes Architecture
Control Plane (Master components)

Like the “brain” of the cluster.
- API Server – The front door; everything goes through this.
- Scheduler – Places new pods on nodes.
- Controller Manager – Ensures desired state (e.g., 3 replicas means 3 must always run).
- ETCD – Kubernetes database; stores cluster state.

**Worker Nodes**

Nodes are the machines (VMs) where your containers actually run.

Each node has:
- **kubelet** – Talks to API server; ensures containers run as instructed.
- **container runtime** – Docker/containerd, runs your containers.
- **kube-proxy** – Network routing within the cluster.

You tell Kubernetes:

> *“I want 5 instances of this app.”*

Kubernetes ensures:
- If one fails → it creates another
- If a node dies → it rebalances pods
- If traffic spikes → it scales

## 4. Why AKS (Azure Kubernetes Service)?

Running Kubernetes yourself is like maintaining your own database:

- You must patch it
- Upgrade it
- Secure it
- Scale the control plane
- Maintain backups
- Handle certificates
- Monitor health
- Debug cluster failures

This is extremely high operational load.

So Azure introduced AKS, where Azure takes over:
- Control plane management
- Patching & security of control plane
- API server scaling
- Upgrade orchestration
- Node OS maintenance options

You only manage:
- Worker nodes
- Applications
- Configurations
- Networking decisions

This is why SREs love AKS.
It removes the undifferentiated heavy lifting of maintaining Kubernetes itself.

## 5. Where AKS Fits in the Modern Cloud Ecosystem

AKS integrates with:

- **ACR** → stores container images
- **Load Balancers & Ingress** → expose apps
- **Azure Monitor** → logs/metrics
- **Azure AD** → access control
- **Key Vault** → secrets
- **VNETs** → networking
- **Azure DevOps / GitHub Actions** → CI/CD pipelines

*This makes AKS a natural center-piece in cloud-native architecture.*

### Hands-On Activities

1. Install Docker & build a simple containerized app.
2. Push image to Azure Container Registry (ACR).
3. Install Minikube or kind locally.
4. Deploy your container to the local Kubernetes cluster.
5. Explore pods, deployments, services using kubectl.
6. Simulate failures & watch Kubernetes self-heal locally.