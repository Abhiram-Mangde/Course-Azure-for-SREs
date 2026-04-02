---
layout: page
title: "Zero Trust"
date: 2026-04-01
categories: [Security]
description: "Zero Trust is a modern security model used in Microsoft Azure and Microsoft Entra ID."
---

# Zero Trust

Zero Trust is a modern security model used in Microsoft Azure and Microsoft Entra ID. The idea is simple:

*Never trust anyone automatically. Always verify everything. Assume attackers are already inside.
This is confirmed directly by Microsoft’s Zero Trust documentation, which defines it as a strategy that assumes breach and verifies each request as though it originated from an uncontrolled network.*

## WHY ZERO TRUST EXISTS 

**Old security model ("castle and moat")**

If you're inside the company network, you’re trusted. Only people outside the firewall are considered dangerous.

*Problem today:*
Employees work from home, cloud apps, mobiles… attackers can steal credentials easily.

*New security reality*
- Anyone can be anywhere
- Devices can be unsafe
- Networks can be hacked
- Identities can be stolen
- This is why Microsoft says: *Identity and access are now the first layers of defense.*

`Modern solution = Zero Trust`

## ZERO TRUST PRINCIPLES
Microsoft defines three basic principles for Zero Trust:

### 1. Verify explicitly
*Always check:*
- Who is the user?
- What device?
- What location?
- Is the device healthy?
- Is the request risky?

*Example:* If user logs in from location A normally, but suddenly from Location B → Azure blocks or asks MFA.

### 2. Use least‑privilege access
Give only the minimum access needed.

*Includes:*
- RBAC (Role-Based Access Control)
- Just-In-Time (JIT) access
- Just-Enough-Access (JEA)

**Example:* A developer should not have full admin access to all Azure resources — only the VM he needs.

### 3. Assume breach
Act as if attackers are already inside. So we:
- Segment the network
- Limit lateral movement
- Use encryption
- Monitor continuously

*Example:* Even if someone hacks a VM, they cannot reach the SQL database because the network is segmented.

## ZERO TRUST ARCHITECTURE IN AZURE – HOW IT WORKS
Microsoft explains that Zero Trust extends across the entire digital estate including identity, devices, data, network, infrastructure, and operations. Microsoft currently uses 7 main pillars, and recently added an AI pillar.
1. Identity
2. Devices
3. Data
4. Network
5. Infrastructure
6. Security Operations
7. AI (New)

### 1. Identity (Most Important)
`Identity = users + apps + service principals`

Microsoft says protecting identities is a foundational step. Tools used:
- Microsoft Entra ID (Azure AD)
- Conditional Access
- MFA
- Passwordless authentication
- Privileged Identity Management (PIM)

*Example:* If user signs in from a new device →
Conditional Access forces MFA + checks device compliance.

### 2. Devices
Manage and secure devices using:
- Microsoft Intune
- Defender EDR
- Device compliance policies

*Example:* If a laptop has outdated antivirus → access to SharePoint is blocked.

### 3. Data
Data must be classified, encrypted, and protected. Tools:
- Azure Information Protection (AIP)
- Data Loss Prevention (DLP)
- Encryption (at rest + in transit)

*Example:* Financial data in a SQL database is automatically encrypted and cannot be downloaded to personal devices.

### 4. Network
Block lateral movement. Tools:
- Virtual Networks (VNet)
- Network Security Groups (NSG)
- Azure Firewall
- Private Links
- Micro-segmentation

**Example:* Developers’ VMs cannot reach production VMs (different subnet + NSG).

### 5. Infrastructure
*Protecting Azure resources like:*
- VMs
- Storage
- Kubernetes
- Databases

*Includes:*
- JIT VM access
- Managed identities (avoid passwords)
- Microsoft recommends avoiding client secrets for apps because they may leak.

### 6. Security Operations (SecOps)
*Tools used:*
- Microsoft Sentinel (SIEM)
- Defender for Cloud
- Automated incident response

*Example:* If unusual sign-in activity is detected → Sentinel triggers automated actions like disabling the account.

### 7. AI
Microsoft recently added AI Resources as a dedicated pillar. AI agents, copilots, and model servers need protection like any other workload.


## HOW AZURE IMPLEMENTS ZERO TRUST (Technical Mapping)
Microsoft explains how the three core principles translate into Azure:

### Verify explicitly implementation:
- Entra ID authentication
- Conditional Access signals (user, device, workload, location)
- Certificate-based authentication
- Continuous risk evaluation (Identity Protection)

### Least privilege access implementation:
- Azure RBAC
- Privileged Identity Management (PIM)
- Just-In-Time access for administrators
- Managed Identities instead of secrets [learn.microsoft.com]

### Assume breach implementation:
- Network segmentation
- Encryption everywhere
- Logging & monitoring (Sentinel, Defender)
- Immutable backups


## STEP-BY-STEP EXAMPLE: ZERO TRUST FOR A COMPANY (Beginner Friendly)
### Scenario
- Developer needs VM access
- Analyst needs SQL database
- Support staff needs limited access


### Step 1 — Strong Identity Verification
- Enable MFA
- Conditional Access
- Passwordless login
- PIM for admin accounts

### Step 2 — Device Security
- Only Intune‑compliant devices allowed
- Non‑compliant devices cannot access sensitive apps


### Step 3 — Network Segmentation
- Separate subnets for test VMs and production
- NSGs to block unwanted traffic
- Azure Firewall for control


### Step 4 — Data Protection
- Sensitive data labeled **Confidential*
- Downloading blocked on unmanaged devices

### Step 5 — Monitoring & Response
- Sentinel detects anomalies
- Defender for Cloud gives recommendations
- Automated response actions triggered


## ZERO TRUST FOR IDENTITY (Specific to the User’s Link)
Microsoft Learn explains how Entra ID uses Zero Trust identity:
- User identity is the primary security boundary
- Access is always evaluated based on signals
- Policies are adaptive (risk-based)
- Administrative accounts must be highly protected
- Passwordless + MFA are strongly recommended


## EASY ANALOGY (To Understand Zero Trust)
Imagine your office is a building:

*Old model:* If someone enters the building once → they can go anywhere.

*Zero Trust model:*
- Every door checks your ID
- Every door knows if you belong there
- Some doors ask for extra verification
- CCTV monitors all movement
- Doors close automatically when suspicious activity is detected

