# Common Terms in Azure
High-value glossary of common and important Azure terms, with full forms and explanations.

## Core Azure Basics
1. **Azure (Microsoft Azure)** — Cloud Computing platform by Microsoft for building, deploying, and managing applications globally.
2. **ARM (Azure Resource Manager)** — Deployment and management layer for all Azure resources.
3. **Region** — Geographic location where Azure datacenters are hosted (e.g., East US, Southeast Asia).
4. **Availability Zone (AZ)** — Physically separate datacenters within a region for high availability.
5. **Resource Group (RG)** — Logical container for grouping related Azure resources.
6. **Subscription** — Billing and access boundary for Azure services.
7. **Tenant** — Instance of Microsoft Entra ID representing an organization.

---

## Identity & Security
1. **Azure AD / Entra ID (Azure Active Directory)** — Identity and access management service.
2. **RBAC (Role-Based Access Control)** — Fine-grained access control for resources.
3. **MFA (Multi-Factor Authentication)** — Adds extra login security beyond passwords.
4. **NSG (Network Security Group)** — Firewall rules controlling inbound/outbound traffic.
5. **Key Vault** — Secure storage for secrets, keys, and certificates.
6. **Managed Identity** — Automatically managed identity for apps to access Azure services securely.

## Compute Services
1. **VM (Virtual Machine)** — On-demand scalable virtual server in Azure.
2. **VMSS (Virtual Machine Scale Sets)** — Auto-scaling group of VMs.
3. **App Service** — Platform to host web apps and APIs without managing servers.
4. **AKS (Azure Kubernetes Service)** — Managed Kubernetes service for container orchestration.
5. **ACI (Azure Container Instances)** — Run containers without managing infrastructure.
6. **Functions (Azure Functions)** — Serverless compute that runs code on demand.

## Networking
1. **VNet (Virtual Network)** — Private network within Azure.
2. **Subnet** — Segmented portion of a VNet.
3. **Public IP** — Internet-accessible IP address.
4. **Private Endpoint** — Private connection to Azure services via VNet.
5. **Load Balancer** — Distributes incoming traffic across multiple resources.
6. **Application Gateway** — Layer 7 load balancer with web application firewall (WAF).
7. **VPN Gateway** — Secure connection between on-premises and Azure.
8. **ExpressRoute** — Private dedicated connection to Azure (not over public internet).
9. **DNS (Domain Name System)** — Resolves domain names to IP addresses.

## Storage & Databases
1. **Storage Account** — Top-level container for Azure storage services.
2. **Blob Storage (Binary Large Object)** — Object storage for unstructured data.
3. **File Storage** — Managed file shares in the cloud.
4. **Queue Storage** — Messaging store for asynchronous communication.
5. **Table Storage** — NoSQL key-value store.
6. **Azure SQL Database** — Fully managed relational database service.
7. **Cosmos DB** — Globally distributed multi-model NoSQL database.
8. **Disk Storage** — Persistent storage for VMs.

## Monitoring & Management
1. **Azure Monitor** — Collects and analyzes telemetry data.
2. **Log Analytics** — Query and analyze logs using KQL.
3. **KQL (Kusto Query Language)** — Query language for Azure logs.
4. **Application Insights** — Performance monitoring for apps.
5. **Azure Advisor** — Provides best practice recommendations.
6. **Azure Policy** — Enforces organizational standards and compliance.

## DevOps & Integration
1. **Azure DevOps** — CI/CD and development collaboration tools.
2. **GitHub Actions** — Automation workflows for CI/CD (integrates with Azure).
3. **ARM Template** — JSON-based infrastructure-as-code for Azure resources.
4. **Bicep** — Simplified language for deploying Azure resources.
5. **Logic Apps** — Workflow automation service.
6. **Service Bus** — Enterprise messaging service.
7. **Event Grid** — Event routing service for reactive systems.
8. **Event Hub** — Big data streaming platform.

## AI & Data
1. **Azure AI (Azure Artificial Intelligence)** — Suite of AI services and APIs.
2. **Azure Machine Learning (AML)** — Platform to build and deploy ML models.
3. **Cognitive Services** — Prebuilt AI APIs (vision, speech, NLP).
4. **Synapse Analytics** — Unified analytics platform for big data and warehousing.
5. **Data Factory** — ETL/ELT data integration service.
6. **Databricks** — Apache Spark-based analytics platform (partner service).

## Backup, DR & Migration
1. **Azure Backup** — Backup service for data protection.
2. **Site Recovery (ASR)** — Disaster recovery service for failover.
3. **Azure Migrate** — Tool for migrating on-prem workloads to Azure.

## Cost & Governance
1. **Cost Management** — Monitor and optimize cloud spending.
2. **Azure Pricing Calculator** — Estimate service costs.
3. **Tags** — Key-value pairs for organizing and billing resources.
4. **Blueprints** — Templates for governance and compliance setups.