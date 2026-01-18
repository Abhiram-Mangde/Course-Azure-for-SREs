---
layout: page
title: Encrypt an Azure VM’s Disk with a Customer Managed Key (CMK)
---

# Encrypt an Azure VM’s Disk with a Customer Managed Key (CMK)

## Objective

Learn how to encrypt the managed disks of an Azure Virtual Machine using a Customer Managed Key (CMK) stored in Azure Key Vault (AKV). How Azure Disk Encryption (ADE) integrates with Azure Key Vault and Azure Disk Encryption Sets (DES), and how CMKs enhance data security and compliance.

## Conceptual Overview

| Concept                        | Description                                                                                                             |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| **Azure Managed Disks**        | Storage volumes for VMs. By default, encrypted with Microsoft-managed keys (MMK).                                       |
| **Customer Managed Key (CMK)** | Encryption key managed by you (the customer) in Azure Key Vault. Gives control over rotation, revocation, and auditing. |
| **Azure Key Vault**            | Securely stores and controls access to keys, secrets, and certificates.                                                 |
| **Disk Encryption Set (DES)**  | A resource that links managed disks to your CMK in Key Vault. It acts as a bridge between the VM and the Key Vault key. |

- CMK gives you ownership and lifecycle control of encryption keys.
- Azure Disk Encryption Sets act as the intermediary linking disks to Key Vault keys.
- Key Vault access policies and managed identities are central to secure design.
- For production, always plan key rotation, backup, and monitoring strategies.

### Step 1: Set Up Environment

**1.1 Create Variables (in Cloud Shell or local terminal)**

Customize these as needed:
```bash
export RG="rg-cmk-lab"
export LOC="eastus"
export VMNAME="vm-cmk-lab"
export KVNAME="kvcmklab$RANDOM"
export DESNAME="des-cmk-lab"
```

**1.2 Create a Resource Group**
```bash
az group create -n $RG -l $LOC
```

### Step 2: Create a Key Vault and a Key

**2.1 Create Key Vault**
```bash
az keyvault create \
  --name $KVNAME \
  --resource-group $RG \
  --location $LOC \
  --sku premium
```

*The Premium SKU is required for keys that are used for disk encryption.*

**2.2 Create a Key (RSA Key)**
```bash
az keyvault key create \
  --vault-name $KVNAME \
  --name "cmkKey" \
  --protection software
```

**2.3 Verify Key**
```bash
az keyvault key list --vault-name $KVNAME
```

### Step 3: Create Disk Encryption Set (DES)

A Disk Encryption Set links your Key Vault key to the disks you want to encrypt.

**3.1 Create DES**
```bash
KEY_ID=$(az keyvault key show \
  --vault-name $KVNAME \
  --name "cmkKey" \
  --query key.kid -o tsv)

az disk-encryption-set create \
  --name $DESNAME \
  --resource-group $RG \
  --location $LOC \
  --source-vault $KVNAME \
  --key-url $KEY_ID
```

**3.2 Assign Permissions to DES (Key Vault Access Policy)**

The DES must be granted permission to use the key.
```bash
DES_ID=$(az disk-encryption-set show \
  --name $DESNAME \
  --resource-group $RG \
  --query identity.principalId -o tsv)

az keyvault set-policy \
  --name $KVNAME \
  --object-id $DES_ID \
  --key-permissions wrapKey unwrapKey get
```

### Step 4: Create an Azure VM and Attach DES

You’ll now create a VM whose OS and data disks will be encrypted using the CMK via the DES.

**4.1 Create a Virtual Network (optional if you don’t have one)**
```bash
az network vnet create \
  --name vnet-cmk \
  --resource-group $RG \
  --location $LOC \
  --subnet-name subnet-cmk
```

**4.2 Create a VM with Managed Disk**
```bash
az vm create \
  --name $VMNAME \
  --resource-group $RG \
  --image Ubuntu2204 \
  --admin-username azureuser \
  --generate-ssh-keys \
  --subnet subnet-cmk \
  --vnet-name vnet-cmk
```

**4.3 Get the OS Disk Name**
```bash
OSDISK=$(az vm show \
  --name $VMNAME \
  --resource-group $RG \
  --query "storageProfile.osDisk.name" -o tsv)
```

**4.4 Update Disk to Use CMK**

You can only associate a disk encryption set when the disk is not attached.
```bash
az vm deallocate -n $VMNAME -g $RG
az vm generalize -n $VMNAME -g $RG
```

Alternatively, create a new data disk and attach with DES (recommended for labs).

Example — Create a new data disk with DES
```bash
az disk create \
  --resource-group $RG \
  --name dataDiskCMK \
  --size-gb 32 \
  --location $LOC \
  --encryption-type EncryptionAtRestWithCustomerKey \
  --disk-encryption-set $DESNAME
```

Attach Disk to VM
```bash
az vm update \
  --resource-group $RG \
  --name $VMNAME \
  --attach-data-disks dataDiskCMK
```

**Step 5: Verify Disk Encryption**

**5.1 Check Disk Properties**
```bash
az disk show \
  --name dataDiskCMK \
  --resource-group $RG \
  --query "[encryption.type, diskEncryptionSetId]" -o tsv
```

You should see:
```php
EncryptionAtRestWithCustomerKey
<DES resource ID>
```

**5.2 Check Key Vault Audit Logs (Optional)**

Go to **Azure Portal → Key Vault → Monitoring → Audit Logs**
Verify operations such as wrapKey and unwrapKey from the Disk Encryption Set identity.

### Step 6: Cleanup (Optional)
```bash
az group delete -n $RG -y
```

### Troubleshooting Ideas

| Issue                                         | Possible Cause            | Solution                                         |
| --------------------------------------------- | ------------------------- | ------------------------------------------------ |
| `Permission denied` on Key Vault              | DES identity missing      | Check Key Vault policy permissions               |
| Disk creation fails                           | Key Vault in wrong region | Key Vault and DES **must be in same region**     |
| Encryption type still “AtRestWithPlatformKey” | Wrong DES association     | Recreate disk specifying `--disk-encryption-set` |
---