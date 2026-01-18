---
layout: page
title: Deploy Azure Firewall with Custom Rules
---

# Deploy Azure Firewall with Custom Rules

Hands-On Activity to Deploy Azure Firewall, configure custom network and application rules, and validate traffic filtering behavior. This helps learners understand how to implement centralized, stateful firewalling for their Azure network environment.

## Objectives
- Understand the role and features of Azure Firewall.
- Deploy Azure Firewall in a hub-and-spoke or flat network.
- Create and apply network rules (IP/port-based).
- Create and apply application rules (FQDN-based).
- Test and validate the firewall behavior using test VMs.

## Scenario
- A company has a web application hosted in a virtual network. You want to secure outbound and inbound traffic using Azure Firewall.
    - Deploy Azure Firewall into its own subnet (AzureFirewallSubnet)
    - Route all outbound traffic through the firewall.
- Configure:
    - A network rule: Allow HTTP/HTTPS to a specific public IP (e.g., an external API)
    - An application rule: Allow access to microsoft.com and block others
- Validate that traffic flows only where permitted.

### Step 1: Set Up the Environment
**1.1 Create a Resource Group**
```bash
az group create --name FirewallLabRG --location eastus
```

**1.2 Create a Virtual Network with 3 Subnets**
```bash
az network vnet create \
  --name FirewallVNet \
  --resource-group FirewallLabRG \
  --location eastus \
  --address-prefix 10.0.0.0/16 \
  --subnet-name AzureFirewallSubnet \
  --subnet-prefix 10.0.1.0/24
```

Add two more subnets:
- WorkloadSubnet (10.0.2.0/24) – for test VMs
- AzureFirewallManagementSubnet (10.0.3.0/24) – for forced tunneling (optional for standard SKU)
```bash
az network vnet subnet create \
  --vnet-name FirewallVNet \
  --resource-group FirewallLabRG \
  --name WorkloadSubnet \
  --address-prefix 10.0.2.0/24
```

*Repeat for AzureFirewallManagementSubnet if using Premium SKU or DNS-based rules*

## Step 2: Deploy Azure Firewall
**2.1 Create Public IP for Firewall**
```bash
az network public-ip create \
  --name AzFirewallPublicIP \
  --resource-group FirewallLabRG \
  --sku Standard \
  --allocation-method Static
```

**2.2 Deploy Azure Firewall**
```bash
az network firewall create \
  --name MyAzureFirewall \
  --resource-group FirewallLabRG \
  --location eastus \
  --sku AZFW_VNet
```

Attach the public IP and subnet:
```bash
az network firewall ip-config create \
  --firewall-name MyAzureFirewall \
  --resource-group FirewallLabRG \
  --name FWConfig \
  --public-ip-address AzFirewallPublicIP \
  --vnet-name FirewallVNet
```

## Step 3: Configure Firewall Rules

**3.1 Network Rule – Allow HTTP/HTTPS to an IP (e.g., 93.184.216.34 = example.com)**
```bash
az network firewall network-rule collection create \
  --firewall-name MyAzureFirewall \
  --resource-group FirewallLabRG \
  --name AllowWebAccess \
  --priority 100 \
  --rule-name AllowHTTP \
  --action Allow \
  --rule-type NetworkRule \
  --protocols TCP \
  --source-addresses 10.0.2.0/24 \
  --destination-addresses 93.184.216.34 \
  --destination-ports 80 443
```

**3.2 Application Rule – Allow only microsoft.com**
```bash
az network firewall application-rule collection create \
  --firewall-name MyAzureFirewall \
  --resource-group FirewallLabRG \
  --name AllowMicrosoftSites \
  --priority 200 \
  --action Allow \
  --rule-name AllowMS \
  --rule-type ApplicationRule \
  --protocols Http=80 Https=443 \
  --source-addresses 10.0.2.0/24 \
  --target-fqdns www.microsoft.com
```

## Step 4: Route Traffic Through Azure Firewall

**4.1 Create a Route Table and User Defined Route**
```bash
az network route-table create \
  --name FirewallRouteTable \
  --resource-group FirewallLabRG
```

Add a default route (0.0.0.0/0) through the firewall’s private IP:

**1. Get the private IP:**
```bash
az network firewall show \
  --name MyAzureFirewall \
  --resource-group FirewallLabRG \
  --query "ipConfigurations[0].privateIPAddress"
```

**2. Add route:**
```bash
az network route-table route create \
  --route-table-name FirewallRouteTable \
  --resource-group FirewallLabRG \
  --name DefaultRoute \
  --address-prefix 0.0.0.0/0 \
  --next-hop-type VirtualAppliance \
  --next-hop-ip-address <FIREWALL_PRIVATE_IP>
```

**4.2 Associate Route Table with WorkloadSubnet**
```bash
az network vnet subnet update \
  --vnet-name FirewallVNet \
  --resource-group FirewallLabRG \
  --name WorkloadSubnet \
  --route-table FirewallRouteTable
```

## Step 5: Deploy Test VM

Deploy a VM into the WorkloadSubnet and disable public IP.
```bash
az vm create \
  --resource-group FirewallLabRG \
  --name TestVM \
  --vnet-name FirewallVNet \
  --subnet WorkloadSubnet \
  --image UbuntuLTS \
  --admin-username azureuser \
  --generate-ssh-keys \
  --nsg "" \
  --public-ip-address ""
```
- Use Azure Bastion or connect via another VM with public IP if needed.

## Step 6: Validate Custom Rules

From the VM:
- Test allowed IP:
```bash
curl http://93.184.216.34
```
*Expected: Successful response.*

- Test blocked IP (e.g., google.com):
```bash
curl http://www.google.com
```
*Expected: Fail due to no application rule allowing it.*

- Test allowed FQDN:
```bash
curl https://www.microsoft.com
```
*Expected: Successful response.*