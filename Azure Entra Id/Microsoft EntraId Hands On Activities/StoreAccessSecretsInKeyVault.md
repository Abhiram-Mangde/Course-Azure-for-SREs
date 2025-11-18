# Securely Storing and Accessing Secrets in Azure Key Vault

## Objective
Learn how to securely manage application secrets, connection strings, and certificates using Azure Key Vault. Configure a Key Vault, add secrets, assign permissions via Managed Identities, and access the secrets securely from an Azure App Service all following SRE best practices.
- Understand the purpose and importance of Key Vault in cloud-native reliability and security.
- Create and configure an Azure Key Vault.
- Add secrets, keys, and certificates to the vault.
- Grant appropriate permissions using Role-Based Access Control (RBAC) or Access Policies.
- Use Managed Identity for a secure, passwordless connection between your app and Key Vault.
- Retrieve secrets from Key Vault programmatically and integrate them into application runtime.
- Apply operational best practices for observability, auditing, and resiliency of secret management.

### Step 1: Conceptual Foundation — Why Key Vault?

| Problem                         | Traditional Method                         | With Key Vault                         |
| ------------------------------- | ------------------------------------------ | -------------------------------------- |
| Secrets hardcoded in app config | Risk of exposure, leaks in version control | Centralized, encrypted storage         |
| Manual secret rotation          | Complex and error-prone                    | Automate rotation using Azure policies |
| Multiple access points          | Hard to manage access                      | Fine-grained access control via RBAC   |
| Auditing of secret usage        | Lacks traceability                         | Full audit logs and access telemetry   |

SREs focus on reliability, observability, and security. Key Vault addresses all three by providing:
- Encryption at rest and in transit
- Centralized management
- Automated access control
- Monitoring and alerting via Azure Monitor

### Step 2: Create a Resource Group

```bash
az group create --name sre-keyvault-lab --location eastus
```

This creates an isolated environment for the lab.

### Step 3: Create an Azure Key Vault
```bash 
az keyvault create \
  --name sre-kv-demo-$RANDOM \
  --resource-group `keyvault-name` \
  --location `location` \
  --sku standard
```

*Note: Key Vault names must be globally unique. The $RANDOM variable ensures uniqueness.*

### Step 4: Add a Secret

Now store a secret (like a database connection string or API key):
```bash
az keyvault secret set \
  --vault-name `keyvault-name` \
  --name "DbConnectionString" \
  --value "Server=tcp:sre-sql.database.windows.net;Database=ProdDB;User Id=adminuser;Password=P@ssw0rd!"
```

**Concept:**
Each secret version is stored securely and can be rotated without changing the Key Vault name reference supporting zero-downtime secret rotation, a key SRE principle.

### Step 5: Enable a Managed Identity for an Azure App

**Create an App Service and enable a System-assigned Managed Identity:**
```bash
az appservice plan create --name sre-app-plan --resource-group sre-keyvault-lab --sku B1
az webapp create --name sre-demo-app --resource-group sre-keyvault-lab --plan sre-app-plan
az webapp identity assign --name sre-demo-app --resource-group sre-keyvault-lab
```

**Why Managed Identity?**
- Removes need for storing credentials inside app code or config files.
- Azure automatically manages the identity lifecycle.

### Step 6: Grant Key Vault Access to the App Identity

Retrieve the App’s managed identity principal ID and grant access:

```bash
APP_ID=$(az webapp identity show --name sre-demo-app --resource-group sre-keyvault-lab --query principalId -o tsv)
az keyvault set-policy --name sre-kv-demo-XXXX --object-id $APP_ID --secret-permissions get list
```

The App Service can now read secrets from the Key Vault securely.

### Step 7: Access the Secret from Your Application

**Example using Python and the Azure SDK:**
```python
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient
import os

KVUri = f"https://{os.environ['KEY_VAULT_NAME']}.vault.azure.net"
credential = DefaultAzureCredential()
client = SecretClient(vault_url=KVUri, credential=credential)

retrieved_secret = client.get_secret("DbConnectionString")
print(f"Your secret value is: {retrieved_secret.value}")
```

This approach leverages `DefaultAzureCredential`, which automatically detects and uses the Managed Identity when running inside Azure.

### Step 8: Configure Key Vault Reference in App Settings (Optional)

Instead of changing app code, you can directly reference secrets in the App Service configuration:
1. Go to Azure Portal → App Service → Configuration → Application settings
2. Add a new setting:
    - Name: DB_CONNECTION
    - Value: @Microsoft.KeyVault(SecretUri=https://sre-kv-demo-XXXX.vault.azure.net/secrets/DbConnectionString/)
3. Save and restart the app.
4. App now automatically fetches the secret securely.

### Step 9: Monitor and Audit Secret Usage

**Enable logging and diagnostics:**
```bash
az monitor diagnostic-settings create \
  --name KeyVaultLogs \
  --resource $(az keyvault show --name sre-kv-demo-XXXX --query id -o tsv) \
  --logs '[{"category":"AuditEvent","enabled":true}]' \
  --workspace <your-log-analytics-workspace-id>
```

SREs can use these logs to monitor for unauthorized access, failed secret retrievals, and expired secrets key indicators in security and reliability posture.

### Step 10: Clean Up Resources
```bash
az group delete --name sre-keyvault-lab --yes --no-wait
```
---

### Best Practices:

| Practice                     | Description                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------ |
| **Least Privilege Access**   | Only grant `get` and `list` permissions where necessary.                       |
| **Automate Secret Rotation** | Use Key Vault’s built-in rotation policies or integrate with Azure Automation. |
| **Monitor Key Vault Health** | Use Azure Monitor metrics (`Availability`, `Latency`) for SLO tracking.        |
| **Versioning and Rollback**  | Leverage Key Vault versioning to rollback faulty secrets quickly.              |
| **Zero Trust Principle**     | Assume no implicit trust — enforce authentication for every secret retrieval.  |
---

> Note: A Sample python script to use is given in the `.github/scripts/access_secrets_keyvault_script.py` path.

[access_secrets_keyvault_script.py](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/blob/main/.github/scripts/access_secrets_keyvault_script.py)

**How to Run the Script:**

This script demonstrates securely accessing a secret from Azure Key Vault using Managed Identity (no credentials stored in code). It’s simple, works well for labs, and can be deployed to an Azure App Service or run locally (with az login).

**Option 1: Run Locally (with Azure CLI login)**

1. Make sure you are logged in to Azure:
```bash
az login
```

2. Set environment variables:
```bash
export KEY_VAULT_NAME="your-keyvault-name"
export SECRET_NAME="DbConnectionString"
```

3. Run the script:
```bash
python `python-filename`.py
```

**Option 2: Run in Azure App Service (Managed Identity)**

1. Upload this script as part of your Flask or FastAPI app.
2. Enable System-Assigned Managed Identity for the App Service.
3. In your App Service Configuration → Application Settings, add:
    - KEY_VAULT_NAME = your key vault name
    - SECRET_NAME = DbConnectionString
4. Deploy and access logs (via Log Stream) to see output
