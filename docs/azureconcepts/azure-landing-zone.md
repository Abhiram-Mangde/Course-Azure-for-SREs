---
layout: page
title: "Azure Landing Zone"
date: 2026-04-05
categories: [Migration]
description: "A pre-configured, scalable, governed cloud environment where you deploy workloads safely and consistently."
---

# Azure Landing Zone 
## 1. What is an Azure Landing Zone?
An Azure Landing Zone is: `A pre-configured, scalable, governed cloud environment where you deploy workloads safely and consistently.`

*Think of Azure like land:*
- Without landing zone → You just start building random houses
- With landing zone → You first build:
    - Roads
    - Electricity
    - Water
    - Security gates
    - → Then build houses (applications)

`So a Landing Zone = Cloud Infrastructure before applications`

## 2. Why Landing Zones Exist
*Without landing zones:*
- No governance (anyone creates anything)
- Security gaps
- Cost chaos
- Network conflicts
- No scalability

*With landing zones:*
- Standardization across teams
- Built-in governance & policies
- Secure-by-design architecture
- Scalable multi-subscription model

## 3. Core Idea: Platform vs Application Landing Zones
`Azure Landing Zone = Platform + Application zones`

### A. Platform Landing Zone (Foundation Layer)
*Provides shared services*

Includes:
- Identity (Azure AD / Entra ID)
- Networking (VNets, hub-spoke)
- Monitoring (Log Analytics)
- Security (Defender, policies)

> Managed by central IT/platform team

*Example:*
Company builds:
- Central firewall
- Central identity system
- Shared monitoring

`All apps use these.`

### B. Application Landing Zone (Workload Layer)
*Each application gets its own environment.*

Includes:
- App resources (VMs, AKS, DB)
- Dev/Test/Prod environments
- App-specific configurations

> Managed by application teams

*Example:*
- Banking app → separate landing zone
- E-commerce app → separate landing zone

## 4. Architecture Structure
Azure Landing Zones use a **hierarchical structure**
```
Tenant (Azure AD)
   ↓
Management Groups
   ↓
Subscriptions
   ↓
Resource Groups
   ↓
Resources
```

*Why this matters:*
- Policies apply top-down
- Governance is centralized
- Teams are isolated

*Example:*
```
Management Group: Platform
   ├── Identity Subscription
   ├── Connectivity Subscription
   ├── Management Subscription

Management Group: Landing Zones
   ├── App1-Prod Subscription
   ├── App1-Dev Subscription
   ├── App2-Prod Subscription
```
*This ensures:*
- Shared services separated
- Apps isolated
- Policies inherited

## 5. The 8 Design Areas
Azure Landing Zones are built around 8 design pillars

### 1. Identity & Access Management
- Azure AD (Entra ID)
- RBAC (Role-based access)

*Example:*
- Developers → limited access
- Admins → full access

### 2. Network Topology & Connectivity
- Hub-spoke model
- VPN / ExpressRoute

*Example:*
- Hub → firewall
- Spokes → application VNets

### 3. Resource Organization
- Management groups
- Subscription design

*Example:*
- Separate subscriptions per app

### 4. Security
- Defender for Cloud
- Policies
- Zero Trust model

### 5. Governance
- Azure Policy
- Cost control
- Tagging strategy

*Example:*
- Enforce no public IP

### 6. Management
- Monitoring
- Logging
- Backup

### 7. Platform Automation & DevOps
- Infrastructure as Code (IaC)
- CI/CD pipelines

*Tools:*
- Terraform
- Bicep

### 8. Billing & Cost Management
- Subscription billing separation
- Cost tracking per team

## 6. Key Concept: Subscription Vending
Landing zones are pre-created automatically

### What is Subscription Vending?

*Automated process to:*
- Create subscriptions
- Apply policies
- Assign access

*Example:*
When a new app team joins:
- System automatically creates:
- Dev subscription
- Prod subscription
- Policies applied

## 7. Management Models
Azure defines 3 operating models

### 1. Centralized Model
- IT team controls everything

*Good for:* Enterprises with strict governance

### 2. Application Team Model
- App teams manage their own environments

*Good for:* Agile teams / startups

### 3. Shared Model
- Platform team manages infra
- App teams manage apps

## 8. Deployment Options (How to Build Landing Zones)
`Recommended: Infrastructure as Code (IaC)`

*Tools:*
- Terraform
- Bicep

*Benefits:*
- Repeatable
- Scalable
- Version-controlled

**Alternative: Portal-based**
- Manual setup via Azure Portal
- Less scalable

## 9. Key Architecture Pattern: Hub-Spoke

Very commonly used in landing zones
```
        Hub (Firewall, Shared services)
         /      |       \
     App1     App2     App3
   (Spokes) (Spokes) (Spokes)
```

*Benefits:*
- Centralized security
- Controlled traffic
- Easier monitoring

## 10. Real-World Example (End-to-End)

*Scenario: Banking Company*
### Step 1: Platform Landing Zone
- Identity → Azure AD
- Networking → Hub VNet + Firewall
- Monitoring → Log Analytics

### Step 2: Application Landing Zones
- App: Mobile Banking
- Dev Subscription
- Test Subscription
- Prod Subscription

### Step 3: Policies Applied
- No public IPs
- Mandatory tagging
- Encrypted storage

### Step 4: Automation
- Terraform creates:
    - VMs
    - AKS cluster
    - Databases

`Landing Zone = Everything you MUST set up BEFORE deploying applications in Azure at scale`