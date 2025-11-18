# Azure Microsoft Entra ID Service

Welcome to the advance part of this course designed to help Site Reliability Engineers (SREs) understand Microsoft Entra ID from scratch to advanced levels. This Service is focused on conceptual clarity, practical examples, and real-world applications.

## How to Use This Course
- Each section introduces key concepts, practical scenarios, and real-world examples.
- Hands-on labs (coming soon) will help you implement these ideas in Azure.
- Focus on understanding why each concept or service exists and how it helps secure your systems.

---
## What is Microsoft Entra ID?

### In Simple, Non-Technical Terms  
Microsoft Entra ID is like a digital gatekeeper that controls who can enter your online services and what they can do once inside. Imagine a security guard at a building who checks IDs, decides who gets in, and what rooms they can access. Entra ID helps companies keep their systems safe by managing these digital identities and permissions.

### In Technical Terms  
Microsoft Entra ID (formerly Azure Active Directory) is a cloud-based Identity and Access Management (IAM) service that provides authentication and authorization for users, applications, and services. It enables secure access to resources by managing identities, enforcing policies like Multi-Factor Authentication (MFA), and applying access controls such as Role-Based Access Control (RBAC) and Conditional Access.

---

### 1. Core Security Concepts

#### Shared Responsibility Model  
- **Concept**: Security responsibilities are shared between Microsoft (cloud provider) and you (customer).  
- **Example**: Microsoft protects the physical data centers and infrastructure, while you manage user access and data protection.

#### Zero Trust Model  
- **Concept**: Never trust, always verify. No user or device is trusted by default, even if inside the network.  
- **Example**: Before allowing access, Entra ID checks user identity, device health, location, and other factors.

#### CIA Triad  
- **Concept**: Three core security principles - Confidentiality (data privacy), Integrity (data accuracy), and Availability (data access).  
- **Example**: Entra ID helps ensure only authorized users see data (Confidentiality), data isn’t tampered with (Integrity), and services are accessible when needed (Availability).

#### Defense in Depth  
- **Concept**: Layered security approach with multiple protections so if one layer fails, others still protect you.  
- **Example**: Using Entra ID MFA along with network security and device compliance policies.

---

### 2. Identity & Access Security/Management
In the cloud, managing who can access what, and under what conditions is absolutely critical. This section covers how Microsoft Entra ID helps you control identity and access securely.

#### Authentication (MFA, Password)  
- **What it is**:  
  Authentication is the process of verifying *who* you are before you get access. It answers the question: *"Are you really who you say you are?"*
- **Why it's important**:  
  Passwords can be guessed or stolen. Adding another method (like a phone verification) drastically reduces the chances of unauthorized access.
- **Real-world analogy**:  
  Entering a building with an ID badge (password), but also needing a fingerprint scan (MFA) to get through the secure doors.
- **Practical Azure Example**:
  - User logs into the Azure Portal using their email and password.
  - Entra ID enforces **Multi-Factor Authentication (MFA)**, so the user also has to approve a notification on the Microsoft Authenticator app.
  - If the user fails MFA, access is denied—even if the password is correct.

#### Authorization (RBAC, PIM Roles)  
- **What it is**:  
  Authorization defines *what actions* a user or app can perform *after* they're authenticated. It answers: *"Now that I know who you are—what are you allowed to do?"*
- **Key Concepts**:
  - **RBAC (Role-Based Access Control)**: Assigns permissions based on job roles (e.g., Reader, Contributor, Owner).
  - **PIM (Privileged Identity Management)**: Provides just-in-time, time-limited access to sensitive roles. No permanent admin access.
- **Real-world analogy**:  
  You’re in the building, but not every door opens for you. Only HR employees can enter the HR department; others can't.
- **Practical Azure Examples**:
  - **RBAC**: A developer is assigned the "Reader" role for a resource group. They can see resources but can’t modify or delete anything.
  - **PIM**: A security engineer needs global admin rights only during an incident. They request temporary elevation via PIM, and it's auto-approved for 2 hours. All activity is audited.


#### Conditional Access  
- **What it is**:  
  Conditional Access applies policies to decide whether a user should be granted access, *based on conditions* like:
    - User location
    - Device compliance
    - Sign-in risk
    - Time of day
- **Why it matters**:  
  Not all logins are equal. A login attempt from an unknown location at 3 a.m. should be treated more suspiciously than one during business hours from a known device.
- **Real-world analogy**:  
  You can access your company systems from your laptop at work, but if you try from a public café in another country, you may be blocked or asked for extra verification.
- **Practical Azure Example**:
  - Policy: If a user signs in from outside the country and is not using a compliant device → Require MFA.
  - Policy: Block all logins from high-risk countries or Tor exit nodes.

#### Entra ID Governance
Entra ID Governance is about **managing identities and access in an organized, secure, and automated way over time**. It ensures the **right people have the right access at the right time — and only for as long as they need it**.

- **What it is**:  
  Governance is about managing access *over time* to ensure people have only the access they truly need. It helps prevent over-permissioned users, orphaned accounts, and security gaps.
- **Why it matters**:  
    In cloud environments, identities can multiply quickly. Without governance, organizations face:
    - **Over-permissioned users** (users with more access than needed)
    - **Stale accounts** (users who left the org but still have access)
    - **Audit & compliance failures** (especially for SOC2, ISO, HIPAA, etc.)
    
    As an SRE or platform engineer, you’re not just keeping systems up—you’re also responsible for **security hygiene**, and that’s where governance fits in.

- **Key Features**:
 Key Components of Entra ID Governance

    **I. Access Reviews**
    - **What it is**: Scheduled check-ins to review who still needs access to a group, app, or role.
    - **Why it’s useful**: Ensures users don't retain access they no longer need.
    - **Who can review**: Group owners, managers, or admins.

    **Example Use Case**:
    > A group called “Privileged VM Operators” gets reviewed every 90 days. Members who haven’t logged in for 60 days are flagged for removal.

    **II. Entitlement Management**
    - **What it is**: A framework to bundle access rights (to groups, apps, SharePoint sites) into **Access Packages**.
    - **Why it’s useful**: Simplifies onboarding, offboarding, and delegating access to teams and external users.

    **Example Use Case**:
    > Create an **Access Package** with:
    > - Access to Teams group`group-name`
    > - Access to internal wiki
    > - Read-only Azure Monitor dashboards  
    > Automatically expires in 60 days unless extended.

    **3. Lifecycle Workflows** *(NEW in Entra)*  
    - **What it is**: Automates tasks based on identity events like user joining, leaving, or moving departments.
    - **Why it’s useful**: Reduces manual work and enforces consistent access policies.

    **Example Use Case**:
    > When a new user joins the "DevOps" department:
    > - Assigns default access package
    > - Sends welcome email
    > - Notifies team lead in Teams

#### Practical Entra Governance Scenarios

| Scenario | Feature Used | What Happens |
|---------|---------------|--------------|
| Intern joins for 2 months | Entitlement Mgmt | Given temporary access via Access Package |
| Contractor offboards | Lifecycle Workflow | Automatically removes access & disables account |
| Quarterly review of sensitive groups | Access Review | Managers receive prompt to validate membership |
| Employee changes department | Lifecycle Workflow | Revokes old access, applies new department access |
---

- **Real-world analogy**:  
  Employees return keys when they leave a job. You don’t want ex-employees walking into your office months later.
- **Practical Azure Example**:
  - An access review is scheduled every 3 months for a sensitive group (e.g., "Finance Admins").
  - Group owners receive a prompt to confirm if members still need access.
  - Users who no longer need it are removed automatically.


#### Privileged Access  
- **What it is**:  
  Managing high-impact roles like Global Administrator, Security Administrator, or Billing Admin. Privileged Access Management ensures these accounts are:
    - Used only when needed
    - Closely monitored
    - Protected with stricter policies
- **Why it matters**:  
  These roles can delete data, change billing, or compromise the entire environment. If misused or compromised, the impact is massive.
- **Real-world analogy**:  
  Like a master key to every room in a building—only certain people can have it, and usage is logged every time it's used.
- **Practical Azure Example**:
  - Only a few users are eligible for the **Global Administrator** role.
  - When needed, they activate the role using PIM for a limited time (e.g., 1 hour).
  - Admins must provide justification, and their actions are audited for compliance.

---
#### Summary

| **Concept**          | **Purpose**                      | **Tools Used in Entra ID**               |
|----------------------|----------------------------------|------------------------------------------|
| Authentication       | Verify identity                  | Passwords, MFA, Microsoft Authenticator  |
| Authorization        | Define access permissions        | RBAC, PIM                                |
| Conditional Access   | Grant/deny access based on risk  | Conditional Access Policies              |
| Governance           | Manage access lifecycle          | Access Reviews, Entitlement Management   |
| Privileged Access    | Secure high-impact roles         | PIM, Audit Logs, Approval Workflows      |
---

#### Real-World Analogy

Imagine your organization like a secure office building:
- **Access Reviews** are the security team checking who still needs keycards.
- **Entitlement Management** is the front desk giving keycards based on your department.
- **Lifecycle Workflows** are HR automating keycard issuance or deactivation when you join, change teams, or leave.

#### Best Practices for Entra ID Governance

- **Automate Reviews**: Set periodic access reviews for high-privilege groups.
- **Use Expiring Access**: Set expiration dates for contractors and vendors.
- **Bundle Access Intelligently**: Use Access Packages to avoid manual permissions.
- **Monitor & Audit**: Use Entra’s built-in reports to track access changes.
---

### 3. Network Security

Securing your cloud resources isn’t just about who can log in—it’s also about controlling how traffic flows in and out of your network. In Azure, several powerful tools help you manage and protect your virtual networks from external and internal threats.

---

#### Network Security Groups (NSGs)

- **What it is**:  
  NSGs are like mini firewalls attached to your Azure resources (like virtual machines or subnets). They control *inbound and outbound* traffic based on **rules** you define (like IPs, ports, protocols).

- **Why it matters**:  
  NSGs help prevent unauthorized network access. Without them, your VMs and services might be exposed to the public internet.

- **Real-world analogy**:  
  Think of NSGs like a security guard at a building entrance, checking what’s allowed in or out based on a list of rules.

- **Practical Azure Example**:
  - You create an NSG for a web server VM.
  - **Inbound rule**: Allow traffic on port 80 (HTTP) and 443 (HTTPS).
  - **Outbound rule**: Allow traffic to DNS and other required services.
  - Block everything else by default (implicit deny rule).

---

#### Application Security Groups (ASGs)

- **What it is**:  
  ASGs let you **group VMs based on their function** (e.g., web servers, app servers) and apply NSG rules to the group rather than individual IP addresses.

- **Why it matters**:  
  They simplify network rule management, especially in large environments with many VMs.

- **Real-world analogy**:  
  Instead of writing individual access rules for each employee, you give rules to departments (like "Marketing", "Finance").

- **Practical Azure Example**:
  - Create an ASG called `WebServers` for all your front-end VMs.
  - NSG rule: Allow HTTP (80) traffic *to* the `WebServers` ASG.
  - When you add new VMs to this ASG, the rule automatically applies—no need to update NSG rules manually.

---

#### Azure Firewall

- **What it is**:  
  Azure Firewall is a **stateful, managed network security service** that controls both inbound and outbound traffic at the network level with advanced filtering (FQDNs, applications, threat intelligence, etc.).

- **Why it matters**:  
  It provides **centralized protection** for all your Azure network traffic and integrates well with logging and monitoring tools.

- **Real-world analogy**:  
  Like a high-end security checkpoint that checks every packet going in or out of your building—much more powerful than a door lock.

- **Practical Azure Example**:
  - You want to block all internet access *except* to `microsoft.com`.
  - Azure Firewall rules are set to allow FQDN: `*.microsoft.com`, block everything else.
  - Logs all denied and allowed traffic for auditing.

---

#### Private Endpoints

- **What it is**:  
  Private Endpoints allow you to **connect securely to Azure services (like Storage, SQL, Key Vault) using private IPs**, without exposing them to the public internet.

- **Why it matters**:  
  It reduces exposure to the public internet and ensures data never leaves the Microsoft backbone network.

- **Real-world analogy**:  
  Instead of using a public highway to reach a data center, you use a private underground tunnel—safe and hidden.

- **Practical Azure Example**:
  - You have a web app hosted in Azure App Service.
  - It connects to Azure SQL Database through a **Private Endpoint**.
  - SQL Database is no longer publicly accessible—only accessible via private virtual network.

---

#### DDoS Protection

- **What it is**:  
  Distributed Denial of Service (DDoS) protection guards your Azure services against massive, automated attacks that try to flood your application with fake traffic.

- **Why it matters**:  
  Without DDoS protection, your services can be taken offline by attackers—causing outages and financial loss.

- **Real-world analogy**:  
  Like a crowd-control system that prevents fake visitors from overwhelming your store during a Black Friday sale.

- **Types in Azure**:
  - **Basic (Free)**: Always-on, automatic protection for public IPs.
  - **Standard (Paid)**: Enhanced mitigation, telemetry, alerts, and integration with Azure Monitor and Virtual Networks.

- **Practical Azure Example**:
  - Your e-commerce site hosted on Azure gets hit by a 10 Gbps DDoS attack.
  - With **DDoS Standard**, Azure auto-detects and mitigates it before it hits your app, and sends alert to your SOC team.

---

### Summary

| Feature                | Purpose                                             | Practical Example                                     |
|------------------------|-----------------------------------------------------|-------------------------------------------------------|
| **NSGs**               | Control inbound/outbound traffic to VMs/subnets     | Allow only HTTP/HTTPS traffic to web VMs              |
| **ASGs**               | Group VMs for simplified network rules              | Apply rules to all `WebServers` in one place          |
| **Azure Firewall**     | Centralized, stateful packet filtering              | Block all traffic except `*.microsoft.com`            |
| **Private Endpoints**  | Private, secure access to Azure PaaS services       | Connect to Azure SQL without public IP exposure       |
| **DDoS Protection**    | Protect from large-scale, automated attacks         | Automatically block bot traffic during a surge        |

---

### 4. Data Protection

This section covers how to protect data whether it’s stored, moving, or being processed, and how Azure helps you manage keys and secrets.

#### Encryption at Rest & In Transit
**What it is:**
- **At Rest**: Data is encrypted on disks, databases, or storage to prevent access even if the storage is stolen.
- **In Transit**: Data moving between systems (like client-server) is encrypted so attackers can’t intercept it.

**Why it matters:**
- Protects against data theft.
- Prevents man-in-the-middle attacks.

**Analogy:**
- At Rest: Like locking your valuables in a safe.
- In Transit: Like sending valuables via a tamper-proof courier.

**Azure Example:**
- Azure Storage encrypts all data at rest automatically.
- Data in transit uses HTTPS/TLS for protection.

---

#### Azure Key Vault
**What it is:**
- Securely store secrets, keys, and certificates.
- Control access and usage of sensitive info.

**Why it matters:**
- Prevents hardcoding secrets in apps.
- Centralizes key management and access.

**Analogy:**
- Like a high-security bank vault with a detailed log of who accessed it and when.

**Key Features:**
- Store keys/secrets/certs.
- Integrate with Azure services.
- Support for customer-managed keys (CMK).
- Logging and soft-delete support.

**Azure Example:**
- An app pulls DB passwords securely from Key Vault using managed identity.
- Use an RSA key in Vault to encrypt VM backups.

---

#### Disk Encryption
**What it is:**
- Encrypts VM OS and data disks to protect data on VHDs.

**Why it matters:**
- Protects data even if disk files are accessed externally.

**Mechanisms:**
- Azure Disk Encryption (BitLocker/DM-Crypt).
- Encryption at host level.
- Use CMK from Key Vault.

**Azure Example:**
- VM is encrypted with a key from Key Vault.
- Be cautious with key rotation or accidental deletion.

---

#### Storage Security
**What it is:**
- Securing Azure Storage accounts beyond encryption.

**Key Features:**
- Server-side encryption (default).
- CMK support.
- Network access rules (firewalls, VNets).
- Private Endpoints.
- Shared Access Signatures (SAS).
- Immutable storage (for compliance).
- Logging and auditing access.

**Azure Example:**
- Enable CMK for your storage account.
- Enforce HTTPS.
- Use SAS token for limited-time blob access.

---

### 5. Platform Security Tools (SIEM, Defender)

Explore Microsoft tools for detecting, responding, and managing cloud threats.

#### Microsoft Defender for Cloud
**What it is:**
- Unified security posture management across Azure and hybrid environments.

**Why it matters:**
- Identifies misconfigurations and threats.
- Offers recommendations and real-time alerts.

**Key Features:**
- Secure Score.
- Threat detection.
- Compliance dashboard.
- Integration with Sentinel.

**Azure Example:**
- Defender alerts on open SQL Server firewall.
- Detects brute force attempts on VMs.

---

#### Microsoft Sentinel
**What it is:**
- Cloud-native SIEM + SOAR for threat detection, analysis, and automation.

**Why it matters:**
- Centralizes logs, enables alert correlation, and automates incident response.

**Key Features:**
- Ingest logs from 100+ sources.
- Analytics & detection rules.
- Incident handling.
- Playbooks (Logic Apps).
- Integration with Defender, M365, etc.

**Azure Example:**
- Ingests Defender alerts → correlates with login anomalies → creates incident → triggers auto-response playbook.

---

#### Defender for Identities
**What it is:**
- Monitors hybrid identity systems (e.g., AD) for suspicious behavior.

**Why it matters:**
- Detects identity-based attacks early (lateral movement, privilege escalation).

**Azure Example:**
- Alerts on domain controller credential theft attempts.
- Detects replication requests from unknown hosts.

---

#### Defender for Endpoints
**What it is:**
- EDR + AV for cloud and on-premise endpoints (VMs, laptops, servers).

**Why it matters:**
- Blocks malware, detects threats, and provides incident response options.

**Azure Example:**
- VM is infected → Defender isolates it → alert forwarded to Sentinel for analysis.

---

### 6. Governance, Policy & Compliance

Enforce standards, maintain compliance, and manage cloud costs effectively.

#### Azure Policy

**What it is:**
- Enforce resource standards via rules.

**Why it matters:**
- Prevents misconfiguration.
- Ensures compliance automatically.

**Azure Example:**
- Policy denies creation of VMs with public IPs.
- Audit policy flags storage without CMK.

---

### Blueprints / Landing Zones

**What it is:**
- Pre-packaged templates and configurations to build governed environments.

**Why it matters:**
- Enables consistent, secure deployment of Azure environments.

**Azure Example:**
- Blueprint deploys network, policies, monitoring, and identity setup for new project subscription.

---

### Defender for Cloud Regulatory Compliance

**What it is:**
- Maps Azure setup to compliance frameworks (ISO, NIST, etc.)

**Why it matters:**
- Track compliance score.
- Identify and fix failing controls.

**Azure Example:**
- Compliance dashboard shows storage account missing encryption.
- Provides remediation steps.

---

### Cost Control & Budget Analysis

**What it is:**
- Manage and optimize Azure spending.

**Why it matters:**
- Prevent cost overruns.
- Attribute cost to teams/projects.

**Key Tools:**
- Azure Cost Management.
- Budgets & alerts.
- Tag-based cost tracking.
- Cost Analysis reports.

**Azure Example:**
- Budget set to $10k/month → alert at 80%.
- Tags help show dev/test/prod cost breakdown.

---

### 7. Monitoring & Incident Response

Central to detecting threats and responding quickly to minimize impact.

#### Centralized Logging

**What it is:**
- Collect logs from all Azure services/resources into Log Analytics or Sentinel.

**Why it matters:**
- Unified view for easier investigation and detection.

**Azure Example:**
- Logs from NSGs, Key Vault, VMs, and Storage sent to one Log Analytics workspace.

---

#### Alerts & Playbooks

**What it is:**
- Alerts notify of events; Playbooks automate response.

**Why it matters:**
- Accelerates detection and response to threats.

**Azure Example:**
- Alert on suspicious login → playbook locks account, sends Teams alert, opens ticket.

---

#### Just-in-Time VM Access (JIT)

**What it is:**
- Allow admin access to VMs only when needed, for limited time.

**Why it matters:**
- Reduces attack surface by keeping ports closed unless required.

**Azure Example:**
- RDP is closed by default. Admin requests access for 1 hour → port is auto-opened then re-locked.

---

#### Secure Baseline

**What it is:**
- A minimum set of secure configurations all resources must follow.

**Why it matters:**
- Reduces risk by standardizing hardening.

**Azure Example:**
- VM image has Defender, logging, disk encryption, and OS hardening enabled.
- Policies prevent deviation from this standard.

---
