---
layout: page
title: Setup Azure Key Vault with RBAC
---

# Setup Azure Key Vault with RBAC

## Objective:
- Create an Azure Key Vault.
- Understand and configure Role-Based Access Control (RBAC) for Key Vault.
- Store and retrieve secrets securely.
- Verify access permissions for users or service principals.

### Step 1: Create a Resource Group

Create a new resource group to organize your resources.

**Using Azure CLI:**
```bash
az group create --name rg-keyvault-demo --location eastus
```

**Using Azure Portal:**

1. Go to **Resource Groups** → **+ Create**.
2. Enter:
    - **Resource group**: `your-resource-group-name`
    - **Region**: `region-name`
3. Click **Review + Create → Create**.

### Step 2: Create an Azure Key Vault

**Using Azure CLI:**
```bash
az keyvault create 
  --name kv-demo-<uniqueID> 
  --resource-group rg-keyvault-demo 
  --location eastus 
  --enable-rbac-authorization true
```
The `--enable-rbac-authorization true` flag ensures RBAC mode is used instead of the older Access Policies model.

**Using Azure Portal:**

1. Navigate to **Key Vaults** → **+ Create**.
2. Fill in:
    - **Key vault name**: `region-name`
    - **Region**: `region-name`
    - **Pricing Tier**: Standard
    - **Access Configuration**: Azure role-based access control
3. Click **Review + Create → Create**.

### Step 3: Assign RBAC Roles

Assign permissions using Azure RBAC instead of access policies.

**Common Key Vault Roles:**
Role Name                 | Description |
---                       | ---         |
Key Vault Administrator	  | Full access to manage Key Vaults and data.
Key Vault Secrets Officer |	Can manage secrets but not keys/certificates.
Key Vault Secrets User	  | Can read secrets only.
---

**Assign Role via CLI:**

```bash
# Replace values below:
az role assignment create 
  --role "Key Vault Secrets Officer" 
  --assignee "<user_or_spn_email_or_objectId>" 
  --scope $(az keyvault show --name kv-demo-<uniqueID> --query id -o tsv)
```

**Assign via Azure Portal:**

1. Go to your **Key Vault → Access control (IAM)**.
2. Click **Add → Add role assignment**.
3. Choose:
    - **Role**: Key Vault Secrets Officer
    - **Assign access to**: User, group, or service principal
    - Select the user.
4. Click **Save**.

### Step 4: Add and Retrieve Secrets

**Add a Secret**
```bash
az keyvault secret set 
  --vault-name kv-demo-<uniqueID> 
  --name "AppPassword" \
  --value "SuperSecret123!"
```

**Retrieve a Secret**
```bash
az keyvault secret show \
  --vault-name kv-demo-<uniqueID> \
  --name "AppPassword" \
  --query value -o tsv
```

*If your role is Secrets Officer or Secrets User, you’ll be able to read the secret; otherwise, you’ll get a Forbidden (403) error confirming RBAC enforcement.*

### Step 5: Test Access with Another Identity

1. Log in as a different Azure AD user (or use a service principal).
2. Attempt to retrieve the secret:
```bash
az keyvault secret show --vault-name kv-demo-<uniqueID> --name "AppPassword"
```
3. Observe the permissions — if the user lacks a Key Vault RBAC role, access should be denied.

### Step 6: Clean Up Resources

After testing, clean up to avoid unnecessary charges.
```bash
az group delete --name rg-keyvault-demo --yes --no-wait
```

- Created a Key Vault using RBAC authorization mode.
- Assigned RBAC roles to control access.
- Stored and retrieved secrets securely.
- Verified access control enforcement through different identities.