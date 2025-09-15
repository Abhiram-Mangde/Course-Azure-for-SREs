
# Module 4: Keeping Systems Reliable

## Overview

Master reliability concepts, high availability, load balancing, auto-scaling, and disaster recovery in Azure.

---

## Lesson 4.1: What is Reliability? (SLI, SLO, SLA)

- **SLA:** Service Level Agreement (promise to customers)
- **SLO:** Service Level Objective (internal reliability target)
- **SLI:** Service Level Indicator (actual measurement)
- **Analogy:** Pizza delivery service (SLA/SLO/SLI)
- **Demo:** Create a slide or graphic explaining SLA/SLO/SLI

---

## Lesson 4.2: High Availability in Azure

- Availability Zones and Sets
- **Demo:** Create VM in Availability Set

```bash
az vm availability-set create --resource-group DemoGroup --name DemoAvailSet
az vm create --resource-group DemoGroup --name DemoVM1 --availability-set DemoAvailSet --image UbuntuLTS --admin-username azureuser --generate-ssh-keys
```

---

## Lesson 4.3: Load Balancers & Auto-Scaling

- Load Balancer, Traffic Manager, Auto-Scaling
- **Demo:**

```bash
az network lb create --resource-group DemoGroup --name DemoLB --sku Basic --frontend-ip-name DemoFrontEnd --backend-pool-name DemoBackEndPool
az vmss create --resource-group DemoGroup --name DemoScaleSet --image UbuntuLTS --upgrade-policy-mode automatic
```

---

## Lesson 4.4: Backup & Disaster Recovery (DR)

- Azure Backup and Site Recovery
- **Demo:**
  - Enable Azure Backup for a VM
  - Restore deleted file from backup

---

## Assessment

- Quiz and reliability scenario lab

## Troubleshooting Tips & Common Mistakes

- Always use Availability Sets for VMs to avoid single points of failure.
- If load balancing fails, check backend pool configuration and health probes.
- Common mistake: Not enabling backup before data loss occurs.
- Test disaster recovery regularly, not just once.

---

## Visual Guide

![Azure High Availability Diagram](https://learn.microsoft.com/en-us/azure/media/architecture/resiliency/availability-zones-diagram.png)
*Sample high availability architecture.*

---

## Quick Quiz
1. What is the difference between SLA, SLO, and SLI?
2. How does Azure Load Balancer improve reliability?
3. Why is disaster recovery important?

*Discuss your answers in the course forum or with your instructor.*

---

## Community & Discussion
- Join the [Azure SRE Learners Forum](https://techcommunity.microsoft.com/t5/azure/ct-p/Azure) to ask questions, share projects, and connect with peers.

---
**Goal:** Apply reliability concepts to a simple Azure deployment.

**Tasks:**
1. Deploy two VMs in an Availability Set.
2. Set up a Load Balancer to distribute traffic between the VMs.
3. Enable Azure Backup for one VM and perform a backup.
4. Simulate a failure by stopping one VM and observe load balancing.
5. Restore a deleted file from backup.

**Submission:**
- Provide screenshots and a brief report on how reliability was achieved.

---

## Hands-On Assignment
**Scenario:** You are designing a reliable web service for a client.

**Instructions:**
1. List three strategies to ensure high availability and disaster recovery.
2. Explain how you would use Azure services to implement these strategies.
3. Share your plan in the course forum or with your instructor.

---

## Resources
- [Azure Reliability Documentation](https://learn.microsoft.com/en-us/azure/architecture/framework/resiliency/overview)
- [Azure Backup](https://learn.microsoft.com/en-us/azure/backup/)
- [Azure Site Recovery](https://learn.microsoft.com/en-us/azure/site-recovery/)
