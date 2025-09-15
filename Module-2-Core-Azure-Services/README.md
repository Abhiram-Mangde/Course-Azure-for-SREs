
# Module 2: Core Azure Services for SREs

## Overview

This module covers essential Azure services every SRE must know: resource groups, networking, virtual machines, storage, and identity management.

---

## Lesson 2.1: Resource Groups & Subscriptions

- Organize resources with Resource Groups
- Understand Subscriptions and billing
- **Demo:**

```bash
az group create --name DemoGroup --location westus
```

---

## Lesson 2.2: Networking Basics (VNet, Subnet, NSG)

- Virtual Networks, Subnets, IP addressing
- Network Security Groups (NSG) for access control
- **Demo:**

```bash
az network vnet create --resource-group DemoGroup --name DemoVNet --address-prefix 10.0.0.0/16
az network vnet subnet create --resource-group DemoGroup --vnet-name DemoVNet --name WebSubnet --address-prefix 10.0.1.0/24
az network nsg create --resource-group DemoGroup --name DemoNSG
```

---

## Lesson 2.3: Virtual Machines (VMs)

- Creating, scaling, and monitoring VMs
- **Demo:**

```bash
az vm create --resource-group DemoGroup --name DemoVM --image UbuntuLTS --admin-username azureuser --generate-ssh-keys
```

---

## Lesson 2.4: Storage Essentials (Blob, Disk, File Shares)

- Types of Azure Storage and use cases
- **Demo:**

```bash
az storage account create --name demostorageacct --resource-group DemoGroup --location westus --sku Standard_LRS
```

---

## Lesson 2.5: Identity & Access Management (Azure AD & RBAC)

- Azure Active Directory and Role-Based Access Control
- **Demo:** Assign Reader role

```bash
az role assignment create --assignee <user-email> --role Reader --resource-group DemoGroup
```

---

## Assessment

- Hands-on lab: Create and manage resources

## Troubleshooting Tips & Common Mistakes
- Always check address prefixes for VNets and subnets to avoid overlap errors.
- If a VM fails to deploy, verify quota limits and region availability.
- Common mistake: Forgetting to assign NSG rules for required ports (SSH, HTTP).
- Clean up resources after labs to avoid charges.

---

## Visual Guide
![Azure Networking Diagram](https://learn.microsoft.com/en-us/azure/media/virtual-network/virtual-network-diagram.png)
*Sample Azure networking architecture.*

---

## Quick Quiz
1. What is the purpose of a Resource Group?
2. How do NSGs help secure your environment?
3. What is the difference between a public and private IP in Azure?

*Discuss your answers in the course forum or with your instructor.*

---

## Community & Discussion
- Join the [Azure SRE Learners Forum](https://techcommunity.microsoft.com/t5/azure/ct-p/Azure) to ask questions, share projects, and connect with peers.

---
**Goal:** Practice creating and managing core Azure resources.

**Tasks:**
1. Create a Resource Group named `CoreRG`.
2. Deploy a Virtual Network (`CoreVNet`) with two subnets: `WebSubnet` and `DbSubnet`.
3. Create a Linux VM (`CoreVM`) in `WebSubnet` and a Storage Account (`corestorageacct`).
4. Assign the Reader role to a test user for the Resource Group.
5. Delete all resources after completion.

**Submission:**
- Provide screenshots and a short summary of what each resource does.

---

## Hands-On Assignment
**Scenario:** You are asked to design a simple Azure environment for a small web application.

**Instructions:**
1. Draw or describe the resource group, network, VM, and storage setup.
2. Explain why you chose each resource and how they interact.
3. Share your design in the course forum or with your instructor.

---

## Resources
- [Azure CLI Documentation](https://learn.microsoft.com/en-us/cli/azure/)
- [Azure Networking Overview](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview)
