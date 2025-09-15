
# Capstone Project Solution: Step-by-Step Guide

This file provides a detailed walkthrough for completing the Capstone Project, covering each requirement with commands, scripts, and explanations.

---

## 1. Design & Architecture

- **Draw or describe your architecture:**
  - Resource Group: `CapstoneRG`
  - Virtual Network: `CapstoneVNet` with subnets `WebSubnet` and `DbSubnet`
  - VMs: `WebVM1`, `WebVM2` in an Availability Set
  - Load Balancer: `CapstoneLB`
  - Storage Account: `capstonestorageacct`
  - Security: NSGs, Azure Firewall
  - Monitoring: Azure Monitor, Application Insights
  - CI/CD: Azure DevOps or GitHub Actions
  - Cost Management: Budget and alerts

---

## 2. Resource Deployment

### Create Resource Group

```bash
az group create --name CapstoneRG --location eastus
```

### Create Virtual Network and Subnets

```bash
az network vnet create --resource-group CapstoneRG --name CapstoneVNet --address-prefix 10.1.0.0/16
az network vnet subnet create --resource-group CapstoneRG --vnet-name CapstoneVNet --name WebSubnet --address-prefix 10.1.1.0/24
az network vnet subnet create --resource-group CapstoneRG --vnet-name CapstoneVNet --name DbSubnet --address-prefix 10.1.2.0/24
```

### Create Availability Set and VMs

```bash
az vm availability-set create --resource-group CapstoneRG --name CapstoneAvailSet
az vm create --resource-group CapstoneRG --name WebVM1 --availability-set CapstoneAvailSet --image UbuntuLTS --admin-username azureuser --generate-ssh-keys
az vm create --resource-group CapstoneRG --name WebVM2 --availability-set CapstoneAvailSet --image UbuntuLTS --admin-username azureuser --generate-ssh-keys
```

### Create Load Balancer

```bash
az network lb create --resource-group CapstoneRG --name CapstoneLB --sku Basic --frontend-ip-name CapstoneFrontEnd --backend-pool-name CapstoneBackEndPool
```

### Create Storage Account

```bash
az storage account create --name capstonestorageacct --resource-group CapstoneRG --location eastus --sku Standard_LRS
```

---

## 3. Automation (Bicep Example)

Create a file `main.bicep`:

```bicep
resource rg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'CapstoneRG'
  location: 'eastus'
}
// Add VNet, VMs, LB, Storage resources here
```

Deploy with:

```bash
az deployment sub create --location eastus --template-file main.bicep
```

---

## 4. Security

### Configure NSG and Firewall

```bash
az network nsg create --resource-group CapstoneRG --name CapstoneNSG
az network nsg rule create --resource-group CapstoneRG --nsg-name CapstoneNSG --name AllowHTTP --protocol tcp --direction inbound --priority 1000 --source-address-prefix '*' --source-port-range '*' --destination-address-prefix '*' --destination-port-range 80 --access Allow
```

- Enable MFA in Azure portal
- Assign RBAC roles via portal or CLI
- Review Secure Score in Security Center

---

## 5. Monitoring & Observability

- Enable Azure Monitor and Application Insights for VMs and web app
- Create dashboard for CPU, memory, and network metrics
- Set up alerts for CPU > 70%
- Run stress test: `stress-ng --cpu 2 --timeout 60s` on VM
- Review logs in Log Analytics

---

## 6. Cost Management

- Set budget in Cost Management + Billing
- Configure alert for 80% budget usage
- Review cost analysis dashboard

---

## 7. Disaster Recovery

- Enable Azure Backup for VMs
- Perform backup and restore a file

---

## 8. CI/CD Pipeline (GitHub Actions Example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Web App
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Azure Login
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}
      - name: Deploy
        run: echo "Deploying web app to Azure..."
```

---

## 9. Documentation & Presentation

- Document each step, include architecture diagram, scripts, pipeline YAML, dashboard screenshots, Secure Score, cost alerts
- Prepare a short video or slide deck walkthrough

---

> "Follow these steps to complete your capstone project and demonstrate your Azure SRE skills!"
