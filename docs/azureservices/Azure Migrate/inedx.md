---
layout: page
title: Azure Migrate
---

# Azure Migrate

## What is Azure Migrate?
Azure Migrate is a central hub that helps you: `Discover → Assess → Migrate → Optimize` your on-premises servers, apps, databases, and VMs into Azure.

**Think of Azure Migrate like:**

A relocation manager for moving your entire office to a new city
- It inventories everything you own (Discovery)
- Checks what should be moved and how (Assessment)
- Plans logistics (Migration strategy)
- Physically moves it (Migration tools)
- Helps you settle and optimize (Post-migration)

## Core Components
Azure Migrate is NOT one tool. It’s a bundle of services.

### 1. Discovery & Assessment
- Finds all your servers (VMs, physical, etc.)
- Collects performance data
- Tells you:
    - Can it run in Azure?
    - How much will it cost?
    - What size VM you need?

Tool inside: `Azure Migrate: Discovery and Assessment`

### 2. Migration Tools
Depending on what you’re migrating:

| Workload                | Tool                                      |
| ----------------------- | ----------------------------------------- |
| Servers (VMs, physical) | **Azure Migrate: Server Migration**       |
| Databases               | **Azure Database Migration Service**      |
| Web apps                | **Azure App Service Migration Assistant** |
| VDI                     | Azure Virtual Desktop migration tools     |

### 3. Dependency Visualization
Shows which servers talk to each other
Helps avoid breaking apps during migration

Think: `If I move this server, what else breaks?`

## End-to-End Flow

### Step 1: Create Azure Migrate Project
- Logical container in Azure
- Scoped to a region

### Step 2: Discover your environment
You deploy an appliance:
- VMware → OVA appliance
- Hyper-V → installer
- Physical → agent-based

It collects:
- CPU usage
- RAM usage
- Disk IO
- Network traffic

### Step 3: Assessment
This is where real thinking happens. You get:
- Readiness (Ready / Needs fixes)
- Sizing (VM type recommendation)
- Cost estimation
- Performance-based vs As-is sizing

Key concept: `Right-sizing = avoid overpaying in Azure`

### Step 4: Migration
Using replication:
- Continuous data sync
- Test migration (non-disruptive)
- Final cutover (downtime window)

### Step 5: Post-Migration Optimization
- Resize VMs
- Apply Reserved Instances / Savings Plans
- Monitor performance

## Migration Strategies
These are called the 5 Rs (or 7 Rs):

| Strategy    | Meaning        | Example                  |
| ----------- | -------------- | ------------------------ |
| Rehost      | Lift & Shift   | VM → Azure VM            |
| Refactor    | Minor changes  | App → containers         |
| Rearchitect | Major redesign | Monolith → microservices |
| Rebuild     | Rewrite        | Legacy → cloud-native    |
| Replace     | SaaS           | CRM → Salesforce         |
| Retire      | Delete         | Unused servers           |
| Retain      | Keep           | Compliance reasons       |

## Mental Model
When you see Azure Migrate, think:

### 1. Business Question
- Why are we migrating?
    - Cost? 
    - Scalability?
    - Data center exit?

### 2. Technical Question
- Is app cloud-ready?
- Any latency dependencies?
- Any licensing issues?

### 3. Risk Question
- Downtime tolerance?
- Rollback plan?

## Concepts
### Agent vs Agentless

| Type        | Meaning                              |
| ----------- | ------------------------------------ |
| Agentless   | No install on VMs (VMware preferred) |
| Agent-based | Needed for physical servers          |

### Performance-Based Sizing

Instead of: `This server has 16 GB RAM`

Azure Migrate checks: `You only use 4 GB → we recommend smaller VM`

### Dependency Mapping
- Uses network traffic
- Helps group servers into applications

### Replication Types
- Continuous replication
- Near real-time sync
- Crash-consistent vs app-consistent

### Cost Optimization
*After migration:*
- Use Reserved Instances
- Use Azure Hybrid Benefit
- Shut down idle VMs
- Move to PaaS where possible

## Practical Example
*Scenario:*

You have:

- 10 VMware VMs
- 2 SQL Servers
- 1 web app

**What you do:**
1. Create Azure Migrate project
2. Deploy appliance in VMware
3. Discover all VMs
4. Run assessment
5. Group dependencies
6. Migrate:
    - VMs → Server Migration
    - DB → Database Migration Service
    - Web app → App Service Migration Assistant
7. Test migration
8. Cutover
9. Optimize

## Common Mistakes
- Not analyzing dependencies → app breaks
- Wrong sizing → high cost
- No test migration → surprises
- Ignoring licensing (Windows/SQL)
- No rollback plan

## High-Impact Questions
### 1. What is Azure Migrate?
Azure Migrate is a centralized hub that helps organizations discover, assess, and migrate on-premises workloads (VMs, databases, applications) to Azure, along with cost estimation and post-migration optimization.
`It supports end-to-end lifecycle: Discover → Assess → Migrate → Optimize`

### 2. What are the key components of Azure Migrate?
- Discovery & Assessment
- Server Migration (Azure Migrate: Server Migration)
- Database Migration (Azure Database Migration Service)
- Dependency visualization
`Azure Migrate integrates multiple tools depending on workload type.`

### 3. What is agentless vs agent-based discovery?
- Agentless → No installation on VMs (commonly for VMware)
- Agent-based → Requires agent (used for physical servers)
`Agentless is preferred for low overhead and easier deployment.`

### 4. What is dependency mapping and why is it important?
Dependency mapping identifies communication between servers using network traffic analysis.
- Prevents application breakage
- Helps migrate application groups instead of individual servers

### 5. What is performance-based sizing?
Instead of using allocated resources, Azure Migrate analyzes actual usage (CPU, memory, disk) and recommends optimized VM sizes. `This helps significantly reduce cloud costs.`

### 6. What are the different migration strategies?
- Rehost (Lift & Shift)
- Refactor
- Rearchitect
- Rebuild
- Replace
- Retire
- Retain

`Choice depends on business goals, timeline, and budget.`

### 7. When would you choose rehost vs rearchitect?
- Rehost → Quick migration, minimal changes, datacenter exit
- Rearchitect → When scalability, performance, or modernization is needed

`Rehost is faster but may not be cost-efficient long term.`

### 8. How would you migrate VMware VMs to Azure?
- Create Azure Migrate project
- Deploy appliance (OVA)
- Discover VMs
- Run assessment
- Enable replication
- Perform test migration
- Execute cutover
- Optimize
- Tool Azure Migrate: `Server Migration`

### 9. What is a test migration?
A test migration creates a replica VM in Azure without impacting production.
- Validates configuration
- Reduces risk before final cutover

### 10. What happens during cutover?
- Stop source VM
- Final data sync
- Start VM in Azure

`This is the only downtime phase.`

### 11. How does Azure Migrate estimate cost?
- Uses collected performance data
- Maps to Azure VM sizes
- Includes:
    - Compute
    - Storage
    - Networking

### 12. How can you optimize cost after migration?
- Right-size VMs
- Use Reserved Instances
- Apply Azure Hybrid Benefit
- Shut down unused resources
- Move to PaaS where possible

`Lift-and-shift is often over-provisioned, so optimization is critical.`

### 13. What are common challenges in migration?
- Dependency issues
- Network latency
- Incorrect sizing
- Licensing issues
- Downtime constraints

### 14. What would you do if a migration fails?
- Check replication health
- Review logs
- Validate network connectivity
- Retry test migration
- Rollback if needed

`Always ensure rollback plan before cutover.`

### 15. How do you ensure minimal downtime?
- Use continuous replication
- Schedule cutover window
- Perform test migration
- Optimize data sync

### 16. How do you handle large-scale migrations?
- Group servers by dependencies
- Migrate in waves
- Automate using scripts
- Monitor continuously

### 17. How does Azure Migrate support hybrid scenarios?
- It allows assessment and migration planning even if some workloads remain on-premises (Retain strategy).

### 18. Is Azure Migrate only for VMs?
No, it supports:
- Servers
- Databases
- Web apps
- VDI

### 19. Does Azure Migrate perform migration itself?
- It acts as a hub and integrates specialized tools for actual migration.