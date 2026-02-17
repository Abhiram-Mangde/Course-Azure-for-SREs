---
layout: page
title: Case Study – Optimizing Virtual Machine Security and Performance Using NSG and ASG on Azure
---

# Optimizing Virtual Machine Security and Performance Using NSG and ASG on Azure

## Problem Statement
A mid-sized enterprise migrated its internal business application and customer portal to Microsoft Azure Virtual Machines.

The system supports approximately **2000 daily users**, including employees and external customers. While the infrastructure was successfully deployed, the organization began experiencing:
- Increased security alerts
- Unnecessary open ports
- Complex firewall rule management
- Performance degradation due to unwanted traffic
- Difficulty scaling environments

The infrastructure team relied primarily on basic networking configurations and assumed: `Cloud infrastructure is secure by default.`

This assumption led to architectural gaps.

The objective was to optimize Virtual Machines using proper network segmentation and security controls through **Network Security Groups (NSG)** and **Application Security Groups (ASG)**.

## Existing Azure Architecture

The application was deployed using:

- Azure Virtual Machines (Web, App, Database tiers)
- Azure Virtual Network (Single subnet)
- Public IP addresses attached to multiple VMs
- Basic NSG with broad allow rules
- Azure Bastion (for remote access)
- Azure Monitor

All VMs were deployed into a flat network structure with limited segmentation.

## Incident Summary

During a quarterly security review and internal load spike:

- Security scans detected open database ports
- CPU utilization increased due to unsolicited traffic
- Manual firewall updates were required when new VMs were deployed
- Network rule complexity increased significantly

Although there was no full outage, the architecture was:

- Vulnerable
- Inefficient
- Operationally difficult to scale


## Business Impact

- Increased attack surface
- Audit observations raised by compliance team
- Higher operational overhead
- Slower VM provisioning time
- Risk of potential data exposure

The organization recognized that performance optimization is directly tied to network security and architecture design.

## Root Cause Analysis

### 1. What Was the Core Issue?

| Layer        | Problem Identified |
|-------------|-------------------|
| Network     | Flat subnet architecture |
| Security    | Broad NSG rules allowing wide IP ranges |
| Management  | IP-based rule configuration |
| Scalability | Manual rule updates for each new VM |
| Exposure    | Database VM had unnecessary inbound access |

### 2. Why Did It Happen?
- No logical grouping of application tiers
- NSGs not designed with least-privilege principle
- No separation between Web, App, and Database layers
- Lack of structured traffic flow control

## Optimization Strategy Using NSG and ASG

### Step 1: Network Segmentation
The single subnet architecture was redesigned into:

- Web Subnet
- Application Subnet
- Database Subnet

Each subnet was associated with a dedicated NSG.

This reduced lateral movement risk inside the network.

### Step 2: Introduce Application Security Groups (ASG)
Three ASGs were created:

- Web-ASG
- App-ASG
- DB-ASG

Each VM was assigned to its respective ASG based on its role. This eliminated the need to define rules using IP addresses.

### Step 3: Implement Least-Privilege NSG Rules

| Priority | Source      | Destination | Port | Action |
|----------|------------|------------|------|--------|
| 100      | Internet   | Web-ASG    | 443  | Allow  |
| 110      | Web-ASG    | App-ASG    | 8080 | Allow  |
| 120      | App-ASG    | DB-ASG     | 1433 | Allow  |
| 200      | Any        | Any        | Any  | Deny   |

Additional Controls:

- Removed Public IP from Database VM
- Restricted RDP access to corporate VPN IP only
- Enabled NSG flow logs
- Configured outbound traffic filtering

`Traffic flow became structured and predictable.`

## Performance Optimization Achieved

### Before Optimization

- Unwanted inbound scanning traffic reached database layer
- Increased network processing load
- Higher CPU usage due to excessive connection attempts
- Rule management complexity slowed deployment

### After Optimization

- Unauthorized traffic blocked at subnet boundary
- Reduced network packet processing
- Lower CPU and memory utilization
- Faster VM provisioning (ASG-based rule automation)

Estimated improvements:
- 25% reduction in unnecessary network traffic
- 30% faster onboarding of new VMs
- Significant reduction in security alerts

## Why NSG and ASG Are Important for VM Optimization

### 1. Security-Driven Performance

Blocking unwanted traffic at the network layer reduces:

- CPU overhead
- Memory consumption
- Connection exhaustion risks

Security controls indirectly improve VM efficiency.

### 2. Logical Architecture Design

ASGs allow role-based grouping instead of IP-based mapping.

Benefits:

- Cleaner architecture
- Easier scaling
- Reduced configuration errors
- Better governance

### 3. Scalability Without Complexity

When new Web VMs are deployed:

- Assign to Web-ASG
- NSG rules apply automatically
- No firewall rule rewrite required

This supports rapid scaling without increasing operational risk.

### 4. Compliance and Audit Readiness

With structured NSG rules:

- Clear traffic boundaries
- Documented access paths
- Easier audit validation
- Alignment with Zero Trust principles

## Observability and Monitoring Enhancements

After optimization:

- NSG Flow Logs enabled
- Azure Monitor dashboards updated
- Alerts configured for unusual inbound traffic spikes
- Periodic rule review process established

This improved visibility into network behavior.

---

## Key Lessons Learned

- Cloud infrastructure is not automatically secure.
- Flat network design increases risk and inefficiency.
- NSG provides granular traffic control.
- ASG simplifies rule management at scale.
- Security architecture directly impacts VM performance and cost.

## Conclusion

This case demonstrates how Azure Virtual Machine environments can become vulnerable and inefficient without proper network segmentation.

By implementing:

- Network Security Groups (NSG)
- Application Security Groups (ASG)
- Least-privilege access rules
- Structured subnet architecture

The organization achieved:

- Improved security posture
- Optimized VM performance
- Reduced operational complexity
- Better scalability
- Stronger compliance alignment

NSG and ASG are not just security features — they are foundational components for building scalable, efficient, and production-ready Azure Virtual Machine architectures.
