---
layout: page
title: Azure Virtual Network
---

# Azure Virtual Network (VNet)

## 1. What is a VNet?
A VNet is:
- A logically isolated network
- Where Azure resources communicate securely
- Fully controlled by you (IP range, routing, security)
-  VNets are isolated
- No communication with:
    - Other VNets
    - On-prem networks
    - Internet (unless configured)

`On-premises network (data center network)`

> A VNet is a logically isolated network in Azure that allows secure communication between resources and provides full control over IP addressing, routing, and connectivity.

## 2. IP Addressing in VNet
When creating a VNet, we define:

**CIDR block (IP range)**

*Example:* `10.0.0.0/16`

This gives: `~65,536 IPs`

**Types of IPs:**
- Private IP → inside VNet
- Public IP → external communication

**1. CIDR Notation**
- /16 = large network
- /24 = smaller subnet

**2. Reserved IPs**

Azure reserves 5 IPs per subnet:
- Network address
- Gateway
- DNS
- Future use

`Proper IP planning is critical to avoid overlapping networks, especially in hybrid or peered environments.`

## 3. Subnets

- Divide VNet into smaller Segments
- Enables:
    - Security Isolation
    - Traffic Control
    - Service Organization

Some Azure services require dedicated subnets
*Example:*
- Application Gateway
- Azure Firewall

## 4. Connectivity Options

A VNet can connect to:
1. Internet
2. Other VNets (Peering)
3. On-premises (VPN / ExpressRoute)

## 5. Routing in VNet
*Azure uses:*
- System routes (default)
- Custom routes (UDR)

*Default behavior:*
- Internal traffic → stays inside
- Internet traffic → goes out

## 6. Security Inside VNet
Security is layered:
1. NSG → basic filtering
2. Azure Firewall → centralized control
3. Application Gateway → web protection

## 7. Internet Communication
Resources in VNet can:
- Access internet (outbound)
- Be accessed via Public IP (inbound)
- Outbound is allowed by default
- Inbound must be configured

## 8. VNet Components
Inside a VNet, we typically have:
```
1. Subnets
2. IP addressing
3. NSGs
4. Route tables
5. Gateways
6. Load balancers
```

## 9. Design Example

### Scenario: 3-Tier Application in Azure

Let’s assume: We are deploying an E-commerce application in Microsoft Azure
- Frontend (React / Angular)
- Backend (API / .NET / Java)
- Database (SQL)

## I. Network Designing 
### VNet Design
- VNet: `10.0.0.0/16 (65K IPs)`
- Why /16?: Future scaling, multiple environments (Dev, QA, Prod), and peering

### Subnet Design

Instead of just 3, real production uses more:
| Subnet Name         | CIDR        | Purpose             |
| ------------------- | ----------- | ------------------- |
| WebSubnet           | 10.0.1.0/24 | Frontend servers    |
| AppSubnet           | 10.0.2.0/24 | Backend APIs        |
| DBSubnet            | 10.0.3.0/24 | Database            |
| GatewaySubnet       | 10.0.4.0/27 | VPN Gateway         |
| AzureFirewallSubnet | 10.0.5.0/26 | Firewall            |
| AppGatewaySubnet    | 10.0.6.0/24 | Application Gateway |

## II. Traffic Flow (Step-by-Step)
Let’s trace a real user request:

### Step 1: User Access
User opens: `www.myecommerce.com`

*What Happens*
- DNS resolves domain → Public IP
- Traffic hits Application Gateway

### Step 2: Application Gateway
*Performs:*
- SSL termination
- WAF inspection
- URL routing

Then forwards to: `Web servers (WebSubnet)`

### Step 3: Web Layer
- Hosts frontend
- Calls backend APIs

### Step 4: App Layer
- Business logic
- Processes orders

### Step 5: DB Layer
- Stores:
    - Users
    - Orders
    - Payments

### Step 6: Response Goes Back
`DB → App → Web → App Gateway → User`

## III. Security Design

### NSG Rules
Web Subnet NSG
- Allow: `Internet → Port 80/443`
- Deny: `Direct DB access`

### App Subnet NSG
- Allow: `WebSubnet → AppSubnet`
- Deny: `Internet access`

### DB Subnet NSG
- Allow: `AppSubnet → DBSubnet (SQL port)`
- Deny: `Everything else`

## IV. Advanced Security
### Azure Firewall

Placed in: `AzureFirewallSubnet`

Used for:
- Central traffic inspection
- Logging
- Outbound control

### WAF (Application Gateway)

Protects against:
- SQL injection
- XSS attacks

`We implement layered security using NSGs, Azure Firewall, and WAF for defense in depth.`

## Design a secure 3-tier architecture in Azure”

- Start with a VNet using proper CIDR planning, typically a /16 range for scalability. 
- Then segment the network into multiple subnets like web, app, database, firewall, and gateway. Expose the application using Application Gateway with WAF enabled. 
- Traffic flows from the internet to the web layer, then to the app layer, and finally to the database layer, with NSGs restricting access between tiers. 
- For outbound control, use Azure Firewall with UDRs. 
- Ensure high availability using multiple instances and load balancing, and connectivity to on-prem via VPN or ExpressRoute.



