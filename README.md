
# **Azure for Site Reliability Engineers (SREs): Beginner to Intermediate Course**

## Course Overview

This comprehensive course is designed for aspiring and junior Site Reliability Engineers (SREs) who want to master Microsoft Azure fundamentals and SRE best practices. Through hands-on labs, real-world projects, and practical demos, learners will gain the skills needed to build, monitor, automate, and secure cloud-native systems on Azure.

- [Course Website](https://abhiram-mangde.github.io/Course-Azure-for-SREs/)
- [Discussion and Challenges Board](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/discussions)

---

## Who Should Take This Course?
- **Beginners** interested in cloud computing and Azure
- **Junior SREs, DevOps engineers, and IT professionals**
- **Students and career changers** seeking hands-on Azure experience

---

## Prerequisites
- No prior cloud or SRE experience required
- Optional: Familiarity with IT concepts or programming

---

## Learning Objectives
By the end of this course, you will be able to:
- Understand core Azure services and SRE principles
- Deploy, monitor, and manage resources in Azure
- Automate infrastructure and application deployments
- Implement security and cost management best practices
- Build portfolio-ready projects for interviews and career growth
- Advance Topics: Details about each Service in Azure

---

## Course Structure
The course is divided into modules, each with beginner-friendly explanations, hands-on labs, demo ideas, and assessment suggestions. Quizzes and project milestones are included to reinforce learning.
Further you can move to advance folder where details on each Module is explained and given.

---

# Course Modules


## 🟦 Module 1: Introduction to Azure & SRE
**Assessment:** *Quiz on cloud concepts and Azure basics*

### Lesson 1.1: What is Cloud Computing?
- **Definition and service models:** IaaS, PaaS, SaaS
- **Analogy:** Renting vs. buying a house
- **Demo:** Compare on-premise vs. cloud using a simple analogy

### Lesson 1.2: Why Choose Azure?
- **Key features and global reach**
- **Integration** with Microsoft ecosystem
- **Security and compliance highlights**
- **Career Tip:** Azure skills open doors in IT and SRE roles

### Lesson 1.3: Who is an SRE?
- **Role and responsibilities**
- **Reliability, automation, and scalability focus**
- **Beginner Example:** Keeping an online shop always available

### Lesson 1.4: Azure Portal Walkthrough & Free Account
- **Step-by-step guide** to signing up and exploring the portal
- **Demo:** Create a free account and navigate the dashboard

---


## 🟦 Module 2: Core Azure Services for SREs
**Assessment:** *Hands-on lab: Create and manage resources*

### Lesson 2.1: Resource Groups & Subscriptions
- **Organizing resources** with Resource Groups
- **Understanding Subscriptions** and billing
- **Analogy:** Subscription = wallet, Resource Group = shopping bag
- **Demo:** Create a Resource Group and deploy a Storage Account

### Lesson 2.2: Networking Basics (VNet, Subnet, NSG)
- **Virtual Networks, Subnets, IP addressing**
- **Network Security Groups (NSG)** for access control
- **Beginner Example:** Office building analogy for VNet/Subnet/NSG
- **Demo:** Create VNet, Subnets, and NSG rules

### Lesson 2.3: Virtual Machines (VMs)
- **Creating, scaling, and monitoring VMs**
- **OS selection, performance, and reliability**
- **SRE Note:** Managing critical workloads on VMs
- **Demo:** Deploy a Linux VM, connect via SSH, monitor metrics

### Lesson 2.4: Storage Essentials (Blob, Disk, File Shares)
- **Types of Azure Storage and use cases**
- **Beginner Example:** Library analogy for storage types
- **Demo:** Upload and access files in Blob Storage

### Lesson 2.5: Identity & Access Management (Azure AD & RBAC)
- **Azure Active Directory and Role-Based Access Control**
- **Analogy:** Azure AD = employee list, RBAC = job title/permissions
- **Demo:** Create a user, assign Reader role, test permissions

---

## 🟦 Module 3: Observability & Monitoring
**Assessment:** *Quiz and dashboard creation lab*

### Lesson 3.1: Monitoring & Observability Fundamentals
- **Importance of monitoring for SREs**
- **Three pillars:** Metrics, Logs, Traces
- **Analogy:** Car dashboard for observability
- **Demo:** VM monitoring dashboard in Azure

### Lesson 3.2: Azure Monitor Basics
- **Collecting and visualizing performance data**
- **Creating dashboards and setting alerts**
- **Beginner Example:** Diagnosing website slowness with Azure Monitor
- **Demo:** Build a dashboard for VM metrics

### Lesson 3.3: Log Analytics & Application Insights
- **Querying logs and monitoring applications**
- **Analogy:** Detective (Log Analytics) and CCTV (App Insights)
- **Demo:** Enable App Insights, run queries, view live metrics

### Lesson 3.4: Alerts & Notifications
- **Setting up proactive alerts and notifications**
- **Tuning alert rules for actionable insights**
- **SRE Note:** Avoid alert fatigue, tune thresholds
- **Demo:** Create and trigger alerts, receive notifications

---


## 🟦 Module 4: Keeping Systems Reliable
**Assessment:** *Quiz and reliability scenario lab*

### Lesson 4.1: What is Reliability? (SLI, SLO, SLA)
- **Reliability means your system does what it’s supposed to, all the time.**
- **SLA:** Service Level Agreement (promise to customers)
- **SLO:** Service Level Objective (internal reliability target)
- **SLI:** Service Level Indicator (actual measurement)
- **Analogy:** Pizza delivery service (SLA/SLO/SLI)
- **Demo:** Slide or graphic explaining SLA/SLO/SLI

### Lesson 4.2: High Availability in Azure
- **Availability Zones:** Physically separate datacenters
- **Availability Sets:** Grouping VMs for resilience
- **Beginner Example:** Power backup analogy
- **Demo:** Create VM in Availability Set, explain distribution

### Lesson 4.3: Load Balancers & Auto-Scaling
- **Load Balancer:** Distributes traffic across servers
- **Azure Traffic Manager:** Routes users to closest/healthiest datacenter
- **Auto-Scaling:** Adjusts resources based on demand
- **Analogy:** Restaurant with multiple chefs
- **Demo:** Deploy VMs, use Load Balancer, show traffic distribution

### Lesson 4.4: Backup & Disaster Recovery (DR)
- **Backup:** Copy of data/resources stored separately
- **Disaster Recovery:** System recovery in another location
- **Beginner Example:** Phone backup analogy
- **Demo:** Enable Azure Backup, restore deleted file

**Module Outcome:**
- Clearly understand SLA, SLO, and SLI
- Build systems that stay up during failures
- Use Load Balancers and Auto-Scaling for resilience
- Protect data and apps with Backup and DR strategies

---


## 🟦 Module 5: Automation & DevOps for Beginners
**Assessment:** *Lab: Automate resource deployment and CI/CD pipeline*

### Lesson 5.1: Introduction to Infrastructure as Code (IaC)
- **IaC means defining infrastructure using code**
- **ARM Templates:** JSON files for Azure resources
- **Bicep:** Human-friendly language for ARM
- **Terraform:** Multi-cloud open-source tool
- **Analogy:** Manual deployment vs. recipe (IaC)
- **Demo:** Deploy a storage account using Bicep and Azure CLI

### Lesson 5.2: Azure CLI & PowerShell Basics
- **Azure CLI:** Cross-platform command-line tool
- **Azure PowerShell:** Deep integration for Windows admins
- **Beginner Example:** Create multiple VMs with a single command
- **Demo:** Compare VM creation speed in CLI vs. portal

### Lesson 5.3: Getting Started with Azure DevOps
- **CI/CD explained:** Continuous Integration & Delivery
- **Pipeline:** Automated steps for build, test, deploy
- **Analogy:** Factory line for app deployment
- **Demo:** Set up Azure DevOps project and pipeline

### Lesson 5.4: Automating Deployments with GitHub Actions
- **GitHub Actions:** Automate builds and deployments
- **Workflow:** YAML file triggers on push, PR, or schedule
- **SRE Note:** Best for small teams and open-source
- **Demo:** Deploy web app to Azure using GitHub Actions

**Module Outcome:**
- Understand IaC with ARM, Bicep, and Terraform
- Use Azure CLI & PowerShell for automation
- Build pipelines in Azure DevOps
- Automate deployments with GitHub Actions

---

## 🟦 Module 6: Security & Cost Management
**Assessment:** *Lab: Secure resources and set up cost alerts*

### Lesson 6.1: Security Best Practices Every SRE Must Know
- **Least Privilege Access:** Minimum permissions for users
- **Multi-Factor Authentication (MFA):** Extra login security
- **Encrypt Data:** At rest and in transit
- **Regular Updates:** Keep VMs and services patched
- **Analogy:** House security (least privilege, MFA)
- **Demo:** Enable MFA in Azure portal

### Lesson 6.2: Using Azure Security Center & Defender
- **Security Center:** Dashboard for recommendations and threat detection
- **Secure Score:** Track environment security level
- **Integrations:** Defender for Servers, Apps
- **SRE Note:** Mission control for security
- **Demo:** Show Secure Score, fix a recommendation

### Lesson 6.3: Network Security Groups & Firewalls
- **NSG:** Allow/deny traffic to subnets/VMs
- **Azure Firewall:** Managed firewall for large networks
- **DDoS Protection:** Prevent denial-of-service attacks
- **Analogy:** NSG = room locks, Firewall = security gate
- **Demo:** Create NSG rules, test access

### Lesson 6.4: Cost Monitoring & Budget Alerts in Azure
- **Cost Analysis:** Breakdown by service
- **Budgets:** Set spending limits
- **Alerts:** Get notified as costs approach budget
- **Analogy:** Prepaid mobile plan
- **Demo:** Create budget, trigger alert

**Module Outcome:**
- Apply best security practices in Azure
- Use Security Center & Defender
- Configure NSGs & Firewalls
- Monitor costs and set alerts
---

## 🟦 Module 7: Hands-On Projects (Guided Labs)
**Assessment:** *Complete all guided labs and submit project reports*

### Project 7.1: Deploy & Monitor a Web App in Azure
- **Goal:** Deploy a simple website and set up monitoring
- **Steps:**
	1. Create a Resource Group
	2. Deploy Azure App Service (Web App)
	3. Upload/connect sample web app (Node.js/.NET/HTML)
	4. Enable Application Insights
	5. View performance metrics and logs
- **Demo:** Show deployment, live site, and App Insights dashboard

### Project 7.2: Set Up Auto-Scaling with Alerts
- **Goal:** Configure auto-scaling for demand
- **Steps:**
	1. Deploy VM Scale Set with 2 VMs
	2. Configure Auto-Scaling (CPU-based)
	3. Create Alert Rule (CPU > 70%)
	4. Run CPU stress test
- **Demo:** Show scaling up/down during load

### Project 7.3: Build a CI/CD Pipeline with Azure DevOps
- **Goal:** Set up automated deployment for an app
- **Steps:**
	1. Create GitHub repo with sample code
	2. Connect repo to Azure DevOps
	3. Build pipeline: trigger, build, test, deploy
	4. Push code change, watch auto-deployment
- **Demo:** Change homepage, push to GitHub, see auto-deploy

### Project 7.4: Cost Optimization & Budget Alerts
- **Goal:** Practice managing costs
- **Steps:**
	1. Open Cost Management + Billing
	2. Create Budget (e.g., $5 for Resource Group)
	3. Set Alert (80% budget)
	4. Deploy VM to increase costs
	5. Show alert when budget exceeded
- **Demo:** Deploy VM, show cost increase, budget notification

**Module Outcome:**
- Deploy and monitor a web app
- Configure auto-scaling with alerts
- Automate deployments with CI/CD
- Manage costs effectively
- Portfolio-ready skills for interviews/resumes

---

## 🟦 Module 8: Career Prep, Best Practices & Conclusion
**Assessment:** *Final project and career reflection*

### Lesson 8.1: Best Practices for Azure SREs
- **Automate everything:** Use IaC, pipelines, and scripts
- **Design for reliability:** High availability, backups, DR
- **Monitor proactively:** Alerts and dashboards
- **Prioritize security:** Least privilege, MFA, NSGs/Firewalls
- **Control costs:** Track usage, set budgets, optimize resources
- **SRE Mindset:** Reliability, security, and cost-efficiency go hand-in-hand

### Lesson 8.2: Building Your Own Azure SRE Lab
- **Practice:** Free Azure account and student offers
- **Projects:** Web apps, VMs, monitoring dashboards
- **Experiment:** Auto-scaling, alerts, CI/CD
- **Tip:** Record and share projects on LinkedIn/GitHub

### Lesson 8.3: Certifications & Career Growth
- **Recommended certifications:**
  - AZ-900 (Azure Fundamentals)
  - AZ-104 (Azure Administrator)
  - AZ-400 (DevOps Engineer)
  - CKA/AKS (Kubernetes)
- **Career Note:** Certifications + hands-on projects = strong resume

### Lesson 8.4: Conclusion & Final Words
Congratulations! 🎉 By completing this course, you have:
- Mastered Azure basics and SRE fundamentals
- Built real-world projects for your portfolio
- Learned how to prepare for interviews and career growth
---

### Advance Topics - Azure Services Specific
Learn more about each indiviual Service in Azure with Hands-On Activities
- [Azure Entra Id](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/blob/main/Azure%20Entra%20Id/MicrosoftEntraId.md)
- [Azure Automation Account](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Automation%20Account)
- [Azure Kubernetes Service](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Kubernetes%20Service)
- [Azure Monitor](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Monitor)
- [Azure Virtual Machines](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Virtual%20Machines)

### HandsOn Activities
[Azure EntraId HandsOn Activities](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Entra%20Id/Microsoft%20EntraId%20Hands%20On%20Activities)
[Azure Monitor Hands On Activities](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Monitor/Azure%20Monitor%20Hands%20On%20Activities)

**Recommended Resources:**
- [Microsoft Learn: Azure Fundamentals](https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/)
- [Google SRE Book](https://sre.google/books/)
- [Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/)
- [Awesome SRE](https://github.com/dastergon/awesome-sre)

**Closing Message:**
> "Thank you for learning with me. This course is your foundation for a successful Azure SRE career. Keep building, keep practicing, and remember — reliability is a mindset. Wishing you success in your IT journey!"

`Note: Feel free to fork and update the repo or add any information that I would have missed in the Repo using a Pull Request.`
