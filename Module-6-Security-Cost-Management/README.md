
# Module 6: Security & Cost Management

## Overview

Learn security best practices, use Azure Security Center, configure NSGs and firewalls, and monitor costs in Azure.

---

## Lesson 6.1: Security Best Practices Every SRE Must Know

- Least Privilege Access, MFA, Encryption, Regular Updates
- **Demo:** Enable MFA in Azure portal

---

## Lesson 6.2: Using Azure Security Center & Defender

- Security recommendations, Secure Score, threat detection
- **Demo:** Show Secure Score, fix a recommendation

---

## Lesson 6.3: Network Security Groups & Firewalls

- NSG rules, Azure Firewall, DDoS Protection
- **Demo:**

```bash
az network nsg create --resource-group DemoGroup --name DemoNSG
az network nsg rule create --resource-group DemoGroup --nsg-name DemoNSG --name AllowSSH --protocol tcp --direction inbound --priority 1000 --source-address-prefix '*' --source-port-range '*' --destination-address-prefix '*' --destination-port-range 22 --access Allow
```

---

## Lesson 6.4: Cost Monitoring & Budget Alerts in Azure

- Cost Analysis, Budgets, Alerts
- **Demo:**
  - Create budget and set alert in Azure portal

---

## Assessment

- Lab: Secure resources and set up cost alerts

## Troubleshooting Tips & Common Mistakes

- Always enable MFA for all users to prevent unauthorized access.
- If NSG rules block access, check priorities and source/destination settings.
- Common mistake: Not setting cost alerts, leading to budget overruns.
- Review Secure Score regularly for actionable recommendations.

---

## Visual Guide

![Azure Security Center Dashboard](https://learn.microsoft.com/en-us/azure/media/defender-for-cloud/security-center-dashboard.png)
*Sample Security Center dashboard.*

---

## Quick Quiz

1. What is the purpose of NSGs in Azure?
2. How do you set a budget alert for a Resource Group?
3. Why is Secure Score important?

*Discuss your answers in the course forum or with your instructor.*

---

## Community & Discussion
- Join the [Azure SRE Learners Forum](https://techcommunity.microsoft.com/t5/azure/ct-p/Azure) to ask questions, share projects, and connect with peers.

---
**Goal:** Apply security and cost management best practices.

**Tasks:**
1. Create a Resource Group and deploy a VM.
2. Configure NSG to allow only SSH (port 22).
3. Enable MFA for your Azure account.
4. Set up a budget and alert for the Resource Group.
5. Review Secure Score in Azure Security Center.

**Submission:**
- Submit screenshots of NSG rules, MFA setup, budget alert, and Secure Score.

---

## Hands-On Assignment
**Scenario:** You are responsible for securing a new Azure environment.

**Instructions:**
1. List three security measures you would implement for VMs and networks.
2. Describe how you would monitor and control costs for the environment.
3. Share your security and cost plan in the course forum or with your instructor.

---

## Resources
- [Azure Security Center](https://learn.microsoft.com/en-us/azure/defender-for-cloud/)
- [Azure Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/)
