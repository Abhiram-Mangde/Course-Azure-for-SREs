# Title: Access Secrets from Azure Key Vault
# Purpose: This script demonstrates securely accessing a secret from Azure Key Vault using Managed Identity (no credentials stored in code). It’s simple, works well for labs, and can be deployed to an Azure App Service or run locally (with az login).

# Import necessary Azure SDK libraries
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient
import os

# ----------------------------------------------------
# Configuration Section
# ----------------------------------------------------

# Replace this with your Key Vault name
KEY_VAULT_NAME = os.environ.get("KEY_VAULT_NAME", "your-keyvault-name")

# The name of the secret you created in Key Vault
SECRET_NAME = os.environ.get("SECRET_NAME", "DbConnectionString")

# Construct the Key Vault URI
KV_URI = f"https://{KEY_VAULT_NAME}.vault.azure.net"

# ----------------------------------------------------
# Authenticate using Managed Identity or Default Credentials
# ----------------------------------------------------
"""
DefaultAzureCredential tries several authentication methods automatically:
1. Managed Identity (if running inside Azure App Service, VM, etc.)
2. Environment variables
3. Azure CLI login (if running locally)
"""

print("Connecting to Azure Key Vault...")

credential = DefaultAzureCredential()
client = SecretClient(vault_url=KV_URI, credential=credential)

# ----------------------------------------------------
# Retrieve the secret
# ----------------------------------------------------
try:
    print("Retrieving secret from Key Vault...")
    secret = client.get_secret(SECRET_NAME)
    print("Secret retrieved successfully!")
    print(f"Secret Value: {secret.value}")  # For demo only — do NOT print in production
except Exception as e:
    print("Failed to retrieve secret. Please check permissions and vault name.")
    print(f"Error details: {e}")

# ----------------------------------------------------
# (Optional) Use the secret in your application
# ----------------------------------------------------
# For example, use it as a database connection string:
# db_connection = secret.value
# print("Connecting to database using:", db_connection)

# ----------------------------------------------------
# End of Script
# ----------------------------------------------------
print("Script execution completed.")
