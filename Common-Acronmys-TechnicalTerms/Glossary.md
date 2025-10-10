# Glossary of Common Azure + SRE Terms

This glossary defines key terms and acronyms frequently used in **Azure** and **Site Reliability Engineering (SRE)**. It serves as a reference for both beginners and advanced learners.

---

## A to Z Glossary

---

### 🔹 A

- **AKS (Azure Kubernetes Service)** – A managed Kubernetes service to deploy and manage containerized applications.
- **ARM (Azure Resource Manager)** – Deployment and management service for Azure resources.
- **Alert Rules** – Definitions in monitoring tools to notify when specific conditions are met.
- **Availability** – The percentage of time a system remains operational and accessible.
- **Azure CLI** – A command-line tool for managing Azure resources.

---

### 🔹 B

- **Bicep** – A domain-specific language (DSL) to simplify ARM template authoring.
- **Blob Storage** – Object storage solution in Azure for unstructured data.
- **Backup Vault** – Azure resource to store backups and recovery points.
- **Blue-Green Deployment** – A deployment strategy to reduce downtime and risk.

---

### 🔹 C

- **CI/CD (Continuous Integration/Continuous Delivery)** – Automating integration and deployment of code.
- **Chaos Engineering** – Experimenting on a system to build confidence in its resilience.
- **Cloud Shell** – Browser-based shell to manage Azure resources using Bash or PowerShell.
- **Cost Management** – Azure services to monitor, allocate, and optimize costs.

---

### 🔹 D

- **DNS Zone** – A portion of the DNS namespace managed by a specific organization or administrator.
- **Databricks** – A platform for big data analytics and machine learning on Azure.
- **DevOps** – A set of practices that combine software development and IT operations.
- **Downtime** – Periods when a service or system is unavailable or non-functional.

---

### 🔹 E

- **Elasticity** – The system’s ability to scale resources up or down automatically.
- **Endpoint Monitoring** – Monitoring public or private endpoints for availability and responsiveness.
- **Event Grid** – Azure service for event-driven architecture and integrations.
- **Error Budget** – The acceptable amount of downtime before breaching SLAs.

---

### 🔹 F

- **Failover** – Automatic switching to a standby system in case of failure.
- **Function App** – Serverless compute service in Azure for running event-driven code.
- **Firewall Rules** – Security rules that control inbound/outbound traffic.
- **Flux** – Tool for continuous delivery using GitOps principles.

---

### 🔹 G

- **GitOps** – Managing infrastructure and application configurations through Git.
- **GTM (Global Traffic Manager)** – Distributes network traffic across regions or services.
- **Grafana** – Visualization tool often used with Prometheus for monitoring.
- **Georedundancy** – Data replication across multiple geographic regions for availability.

---

### 🔹 H

- **High Availability (HA)** – Ensuring a system remains operational with minimal downtime.
- **Helm** – Package manager for Kubernetes that simplifies deployment.
- **Health Probe** – Used in Azure Load Balancer to monitor the status of backend instances.
- **Horizontal Scaling** – Adding more instances to handle increased load.

---

### 🔹 I

- **IaC (Infrastructure as Code)** – Managing infrastructure through version-controlled code (e.g., Terraform, Bicep).
- **Identity and Access Management (IAM)** – Controlling who can access what in Azure.
- **Incident Response** – The process of detecting, investigating, and resolving service disruptions.
- **IP Whitelisting** – Restricting access to resources based on IP addresses.

---

### 🔹 J

- **Jenkins** – Open-source automation server often used for CI/CD pipelines.
- **Jitter** – Variability in latency or packet delay in network communications.
- **JSON** – Format used in ARM templates and Azure configurations.

---

### 🔹 K

- **Kubernetes** – Open-source system for automating deployment, scaling, and management of containerized applications.
- **Kusto Query Language (KQL)** – Query language used in Azure Monitor and Log Analytics.
- **Key Vault** – Azure service to store secrets, keys, and certificates securely.

---

### 🔹 L

- **Latency** – Time delay between request and response in a system.
- **Load Balancer** – Azure service that distributes network traffic to improve responsiveness and availability.
- **Log Analytics** – Service to collect and analyze telemetry data from Azure resources.
- **Least Privilege** – Principle of granting only the minimal level of access necessary.

---

### 🔹 M

- **MTTR (Mean Time to Recovery)** – Average time to restore service after failure.
- **Metrics** – Quantitative data collected from systems to track performance or health.
- **Managed Identity** – Automatically managed identity in Azure AD for authentication.
- **Monitoring** – Observing system metrics, logs, and traces to detect issues.

---

### 🔹 N

- **NSG (Network Security Group)** – Controls inbound and outbound traffic at the subnet or NIC level.
- **NAT Gateway** – Allows outbound internet access for private resources.
- **Node Pool** – Group of VMs in AKS used for running container workloads.
- **NoSQL** – Non-relational database system used for unstructured data.

---

### 🔹 O

- **Observability** – Ability to infer internal states of a system from its outputs (metrics, logs, traces).
- **Outage** – Unplanned system downtime or failure.
- **OMS (Operations Management Suite)** – Former name for Azure Monitor solutions.
- **Operational Excellence** – A DevOps/SRE principle focused on improving system operations.

---

### 🔹 P

- **Pipelines** – Automations for building, testing, and deploying code (e.g., GitHub Actions, Azure DevOps).
- **Prometheus** – Open-source system monitoring and alerting toolkit.
- **PIM (Privileged Identity Management)** – Azure AD feature to manage just-in-time privileged access.
- **Pod** – Basic execution unit in Kubernetes, typically running one or more containers.

---

### 🔹 Q

- **Quotas** – Limits on resources usage in Azure (e.g., number of cores, IP addresses).
- **Queue Storage** – Azure service for message queuing between components.
- **Query Time** – Time taken to process and return results from a monitoring query.

---

### 🔹 R

- **Reliability** – Ability of a system to function correctly over time.
- **Resource Group** – Logical container for Azure resources.
- **Runbook** – Documented procedure or script for routine operations or incident responses.
- **RBAC (Role-Based Access Control)** – Authorization system to manage permissions in Azure.

---

### 🔹 S

- **SLA (Service Level Agreement)** – Commitment on service availability and performance.
- **SLO (Service Level Objective)** – Target metric defined by the business or service team.
- **SLI (Service Level Indicator)** – Actual measurement of a specific performance metric.
- **Scalability** – Capability to handle increased load by adding resources.
- **SRE (Site Reliability Engineering)** – Discipline combining software engineering and operations to build reliable systems.

---

### 🔹 T

- **Terraform** – Infrastructure as Code tool used to provision cloud infrastructure.
- **Telemetry** – Data collected from systems to monitor and troubleshoot applications.
- **Traffic Manager** – Azure DNS-based traffic load balancer.
- **Throttle** – Limiting the rate at which a service accepts requests.

---

### 🔹 U

- **Uptime** – Percentage of time a system is operational.
- **User Assigned Identity** – Type of Managed Identity that can be shared across resources.
- **Usage Report** – Report detailing Azure resource consumption.

---

### 🔹 V

- **Virtual Network (VNet)** – Azure’s fundamental building block for private networks.
- **VMSS (Virtual Machine Scale Set)** – Group of VMs that auto-scale based on demand.
- **Vault** – Secure storage location for secrets, keys, or credentials (e.g., Key Vault, Backup Vault).

---

### 🔹 W

- **Workbooks** – Interactive reports in Azure Monitor for visualizing telemetry data.
- **Web App** – Azure App Service to host web applications.
- **WAF (Web Application Firewall)** – Protects web apps from common exploits.
- **Workload** – The amount of processing or tasks performed by a system.

---

### 🔹 X

- **XML (eXtensible Markup Language)** – Used for configuration files and data exchange.
- *(X is rare in Azure/SRE; you could leave it blank or mention this.)*

---

### 🔹 Y

- **YAML (Yet Another Markup Language)** – Human-readable configuration language often used in CI/CD pipelines and Kubernetes manifests.

---

### 🔹 Z

- **Zone Redundancy** – Distributing resources across multiple availability zones for high availability.
- **Zero Downtime Deployment** – Deployment strategy that ensures services remain available during release.

---

> **Tip:** Have a term you think should be included? [Contribute via Pull Request](#)!
