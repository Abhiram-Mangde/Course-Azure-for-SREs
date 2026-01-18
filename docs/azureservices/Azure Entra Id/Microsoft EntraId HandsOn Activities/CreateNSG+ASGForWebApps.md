---
layout: page
title: Creating NSG and ASG Rules for a Web App in Azure
---

# Creating NSG and ASG Rules for a Web App in Azure

## This Hands-On activity is to secure a web application hosted on Azure by creating and applying Network Security Groups (NSGs) and Application Security Groups (ASGs).

### Goals
- Understand what NSGs and ASGs are, and their roles in Azure networking.
- Design a secure network architecture using NSGs and ASGs for a web application.
- Create and associate NSGs and ASGs to subnets and network interfaces.
- Write and apply custom security rules.
- Validate the setup by simulating traffic to/from a web app.

### Theory
**1. What is a Network Security Group (NSG)?**
- Acts as a virtual firewall to control inbound and outbound traffic to Azure resources.
- Works at the subnet and NIC (Network Interface Card) levels.
- Contains security rules defined by protocol, port, source/destination IPs, and direction.

**2. What is an Application Security Group (ASG)?**
- Logical group of NICs for easier management of NSG rules.
- Helps to abstract IP addresses in NSG rules.
- Makes security rule management more scalable and readable in complex environments.

**3. NSG + ASG Together**
- Instead of using IPs in NSG rules, you can refer to ASGs.
- Enables dynamic, role-based security configuration.
- Ideal for scenarios like “allow Web servers to talk to DB servers” without hardcoding IPs.

### Hands-on Activity: Build NSG + ASG Rules for a Web App

**Scenario**

Task is to deploy a simple 3-tier architecture in Azure:

- Web Tier – Hosts a web application (e.g., on Ubuntu VM with NGINX)
- App Tier – Application logic (simulated with another VM)
- DB Tier – Database server (simulated with another VM)

**Objective:**
- Group VMs into ASGs: WebASG, AppASG, DbASG.
- Create NSGs with rules that:
    - Allow internet traffic only to WebASG on port 80.
    - Allow traffic from WebASG to AppASG on port 8080.
    - Allow traffic from AppASG to DbASG on port 1433 (SQL).
    - Deny all other traffic by default.

**Step 1: Setup Environment**
- Create a resource group
```bash
az group create --name SecureWebAppRG --location eastus
```

- Create a virtual network with 3 subnets (Web, App, DB)
```bash
az network vnet create \
  --resource-group SecureWebAppRG \
  --name WebAppVNet \
  --address-prefix 10.0.0.0/16 \
  --subnet-name WebSubnet \
  --subnet-prefix 10.0.1.0/24
```

*Repeat for AppSubnet and DbSubnet*

**Step 2: Create ASGs**
```bash
az network asg create --resource-group SecureWebAppRG --name WebASG --location eastus
az network asg create --resource-group SecureWebAppRG --name AppASG --location eastus
az network asg create --resource-group SecureWebAppRG --name DbASG --location eastus
```

**Step 3: Deploy VMs and Assign ASGs**

- Create 3 VMs, each in a different subnet
- Assign NICs to respective ASGs
```bash
az network nic create \
  --resource-group SecureWebAppRG \
  --name WebNIC \
  --vnet-name WebAppVNet \
  --subnet WebSubnet \
  --application-security-groups WebASG
```

*Repeat for AppNIC with AppASG, DbNIC with DbASG*

**Step 4: Create NSGs and Rules**
```bash
az network nsg create --resource-group SecureWebAppRG --name WebNSG
az network nsg create --resource-group SecureWebAppRG --name AppNSG
az network nsg create --resource-group SecureWebAppRG --name DbNSG
```

- Add rule to WebNSG to allow HTTP from Internet:
```bash
az network nsg rule create \
  --resource-group SecureWebAppRG \
  --nsg-name WebNSG \
  --name AllowHTTPIn \
  --priority 100 \
  --direction Inbound \
  --access Allow \
  --protocol Tcp \
  --source-address-prefix Internet \
  --source-port-range "*" \
  --destination-asgs WebASG \
  --destination-port-range 80
```

*Repeat similar rules for:- WebASG ➝ AppASG on port 8080, AppASG ➝ DbASG on port 1433*

**Step 5: Associate NSGs to Subnets**
```bash
az network vnet subnet update \
  --resource-group SecureWebAppRG \
  --vnet-name WebAppVNet \
  --name WebSubnet \
  --network-security-group WebNSG
```

*Repeat for AppSubnet with AppNSG, DbSubnet with DbNSG*

**Step 6: Test & Validate**

- SSH into Web VM
- Use curl or telnet to test:
  - Port 80 (HTTP) from public
  - Port 8080 from Web VM to App VM (internal IP)
  - Port 1433 from App VM to DB VM
- Confirm blocked traffic (e.g., try 8080 from Web to DB)

---