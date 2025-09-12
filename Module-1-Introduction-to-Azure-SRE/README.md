# Module 1: Introduction to Azure & SRE

## Overview
This module introduces cloud computing, Microsoft Azure, and the role of Site Reliability Engineers (SREs). It is designed for beginners and sets the foundation for the rest of the course.

---

## Lesson 1.1: What is Cloud Computing?
- **Definition:** Delivery of computing services (servers, storage, databases, networking) over the internet.
- **Service Models:**
  - IaaS: Infrastructure as a Service
  - PaaS: Platform as a Service
  - SaaS: Software as a Service
- **Analogy:** Renting vs. buying a house
- **Example:** Creating a Virtual Machine in Azure instead of buying hardware.
- **Demo:** Compare on-premise vs. cloud using a simple analogy.

---

## Lesson 1.2: Why Choose Azure?
- **Key Features:** Integration with Microsoft tools, global reach, security, compliance.
- **Career Tip:** Azure skills open doors in IT and SRE roles.

---

## Lesson 1.3: Who is an SRE?
- **Role:** Mix of software engineer and system administrator.
- **Responsibilities:** Reliability, automation, scalability.
- **Beginner Example:** Keeping an online shop always available.

---

## Lesson 1.4: Azure Portal Walkthrough & Free Account
- **Steps:**
  1. Go to portal.azure.com
  2. Sign up for a Free Account ($200 credits)
  3. Explore dashboard: Resource Groups, VMs, Networking, Storage
- **Demo:** Create a free account and navigate the dashboard.

---

## Assessment
- Quiz on cloud concepts and Azure basics
- Hands-on: Create a free Azure account and explore the portal

---

## Example Script: Create a Resource Group in Azure CLI
```bash
az group create --name MyResourceGroup --location eastus
```

## Example Script: Create a Virtual Machine in Azure CLI
```bash
az vm create --resource-group MyResourceGroup --name MyVM --image UbuntuLTS --admin-username azureuser --generate-ssh-keys
```


## Mini Project: Azure Starter Lab
**Goal:** Get hands-on with Azure basics.

**Tasks:**
1. Create a free Azure account and log in to the portal.
2. Create a Resource Group named `StarterRG` in your preferred region.
3. Deploy a Linux Virtual Machine named `StarterVM` in `StarterRG`.
4. Connect to your VM using SSH and run `uname -a` to verify the OS.
5. Delete the VM and Resource Group to avoid charges.

**Submission:**
- Take screenshots of each step and write a short reflection on what you learned.

---

## Hands-On Assignment
**Scenario:** You are tasked with explaining cloud computing and Azure to a friend who is new to IT.

**Instructions:**
1. Write a 1-paragraph analogy comparing cloud computing to something in everyday life (e.g., renting a car vs. owning).
2. List three benefits of using Azure for a small business.
3. Share your analogy and list in the course discussion forum or with your instructor.

---

## Resources
- [Microsoft Learn: Azure Fundamentals](https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/)
- [Azure Portal](https://portal.azure.com)
