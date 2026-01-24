---
layout: page
title: Security & Governance in AKS
---

# Security & Governance in AKS

This module addresses production-grade, SRE-level security—the part that often makes or breaks enterprise adoption.

## 1 Security Model in Kubernetes

In traditional IT:
- Security is applied at VM firewalls, network appliances, and OS level.

In Kubernetes:
- Everything is decentralized.
- Pods can come and go at any time.
- Security must be attached to identity, not to machines.

Core idea:

> *Kubernetes security is about who can do what and which workload can talk to which workload.*

## 2. Azure AD Integration — Enterprise-Grade Authentication

AKS integrates natively with Azure AD.
This means:
- Users authenticate with corporate identity (SSO).
- Role assignments are centrally managed.
- Access removal is automatic when someone leaves the company.

Real-world benefit:

> *No more “shared Kubernetes admin passwords” or local kubeconfigs everywhere.*

## 3. RBAC in AKS — Fine-Grained Authorization
Kubernetes RBAC maps:
- Users
- Groups
- Roles
- Permissions

Azure AD groups → Kubernetes roles.

This ensures:

- Developers only access their namespaces
- SREs have cluster-level view
- Security team has audit access

RBAC is basically:
> *The “Active Directory permissions model” of Kubernetes.*

## 4. Workload Identity — The Future of Secure Access to Azure Services

Traditionally, apps inside Kubernetes stored secrets for accessing:
- Key Vault
- Storage
- Databases

This is risky.

Workload Identity allows pods to get Azure access without secrets.

Analogy:

> *A pod shows its company badge (token), and Azure services recognize it automatically.*

It eliminates:
- Secret rotation
- Hardcoded credentials
- Password leakage risks

## 5. Secrets Management in AKS
Best practices:

- Never store secrets in container images
- Never use plaintext Kubernetes secrets
- Prefer Azure Key Vault + CSI provider

Key Vault + CSI:
- Secrets injected directly into pods
- No need to store in cluster
- Automatic rotation support

## 6. Network Security
Tools:
- Network Policies (pod-level firewall)
- NSGs (subnet level)
- Azure Firewall (cluster boundary)
- Private Link (restrict access)

SRE mindset:
> *Every component should only talk to what’s required—nothing else.*

## 7. Image Security & Supply Chain Protection
Use:
- ACR for trusted images
- Defender for Cloud → vulnerability scanning
- Admission controllers
- Azure Policy for AKS → restrict deployments

Example policies:
- No privileged containers
- Only images from approved registries
- Mandatory resource requests/limits

### Hands-On Activities

1. Integrate AKS with Azure AD for authentication.
2. Create Kubernetes RBAC roles and assign Azure AD groups.
3. Implement Workload Identity for accessing Key Vault.
4. Mount Key Vault secrets using CSI driver.
5. Configure Azure Network Policies to restrict cross-namespace traffic.
6. Enable Microsoft Defender for Cloud for AKS.
7. Apply Azure Policies (e.g., disallow privileged pods).