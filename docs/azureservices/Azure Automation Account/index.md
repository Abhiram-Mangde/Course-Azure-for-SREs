---
layout: page
title: Azure Automation Accounts – Complete Guide
---

# Azure Automation Accounts – Complete Guide

This guide provides a comprehensive explanation of Azure Automation Accounts, covering all essential concepts, services, and features. It is designed for learners who want to master automation in Azure, especially in DevOps and SRE roles.

---

## 1. Basics and Core Concepts

### What is Azure Automation?

Azure Automation is a **cloud-based service** that helps you **automate repetitive tasks**, **manage configurations**, and **ensure consistency** across Azure and hybrid environments. It's ideal for reducing manual effort, improving reliability, and enforcing governance.

### Key Features:
- Runbooks (scripts or workflows)
- Configuration management (DSC)
- Update management (patching)
- Process automation
- Hybrid environment support

### What is an Automation Account?

An **Automation Account** is a **container** for all your automation-related resources, such as:
- Runbooks
- Variables, credentials, and other assets
- PowerShell/Python modules
- DSC configurations
- Hybrid workers

> Example: You can create one Automation Account per environment (Dev, QA, Prod) to organize scripts and schedules separately.

---

### Pricing Tiers

- **Free Tier**: 500 minutes/month of job runtime.
- **Paid Tier**: Based on runtime per job (measured in minutes).
- **Update Management** and **DSC** features are free, but depend on **Log Analytics**, which might incur charges.

Use the [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/) to estimate costs.

---

### Supported Regions

Azure Automation is available in most Azure regions, including:
- East US
- West Europe
- Southeast Asia

You can find the full list of supported regions [here](https://azure.microsoft.com/en-us/global-infrastructure/services/).

---
---

## 2. Runbooks – Heart of Automation

### What is a Runbook?

A **Runbook** is a **script** or a **workflow** that performs a specific task, such as:
- Starting or stopping VMs
- Cleaning up unused resources
- Sending notifications
- Applying configurations

Runbooks can be scheduled, triggered via webhook, or integrated with alerts.

---

| Type               | Language      | Description |
|--------------------|---------------|-------------|
| PowerShell         | PowerShell    | Most widely used, flexible |
| Python             | Python 2.x    | Useful for Python automation |
| Graphical          | Drag-and-drop | No-code visual builder |
| PowerShell Workflow| Workflow-based PowerShell | Supports checkpoints |
| Hybrid Worker      | Any (on-prem) | Runs outside Azure |

> Note: Azure Automation currently supports **Python 2.7** only.

---

### How to Author Runbooks

1. **Azure Portal**: Use the built-in editor.
2. **VS Code**: With PowerShell extension and Azure Tools.
3. **GitHub**: Sync runbooks from a repo.
4. **Upload**: Import `.ps1` or `.py` files.

Example PowerShell Runbook:

### Types of Runbooks

Azure Automation supports several types of runbooks based on the execution method and scripting language:

### I. PowerShell Runbook
- Written in **PowerShell**
- Most popular and widely used
- Can use `Az` or `AzureRM` modules
- Supports complex logic, conditionals, and loops

#### Example:
```powershell
param (
    [string]$VMName,
    [string]$ResourceGroupName
)

Stop-AzVM -Name $VMName -ResourceGroupName $ResourceGroupName -Force
```

### II. Python Runbook

- Useful for developers more comfortable with Python
- Supports standard libraries and REST API calls
- Limited support for Azure SDK (not as rich as PowerShell)

#### Example:

```Python
import datetime
print("Automation Runbook started at:", datetime.datetime.utcnow())
```

> Python 3 is not currently supported in Azure Automation.

### III. Graphical Runbook

- Designed using a drag-and-drop interface
- Ideal for those unfamiliar with scripting
- Represents logic visually
- Uses PowerShell Workflow engine behind the scenes
- Good for simple workflows but limited in complexity and reusability.

### IV. PowerShell Workflow Runbook
- Based on PowerShell Workflow language
- Allows parallel execution, checkpoints, and long-running jobs
- More complex syntax than regular PowerShell
- Used less often today due to newer alternatives

#### Example:

```PowerShell
workflow Restart-MultipleVMs {
    param ([string[]]$VMNames)

    foreach -parallel ($vm in $VMNames) {
        Stop-AzVM -Name $vm -Force
        Start-AzVM -Name $vm
    }
}
```
### V. Hybrid Worker Runbook

- Executes on Hybrid Runbook Workers (on-prem or custom VMs)
- Can access local network, on-prem services, or non-Azure resources
- Supports any PowerShell or Python logic with full OS capabilities
- Ideal for hybrid/cloud-native environments
- Requires installation of Hybrid Worker Agent and linking to Automation Account.

### VI. Runbook Variables and Automation Assets

Runbooks often require shared data, credentials, or modules to run securely and consistently. Azure Automation provides a set of Assets to simplify this.

| Asset Type       | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| **Variables**    | Store reusable values (e.g., region = "eastus")                            |
| **Credentials**  | Secure storage for username/password combinations                          |
| **Certificates** | Used for secure communications and authentication                          |
| **Connections**  | Store authentication contexts for services like Azure, OMS, or custom APIs |
| **Modules**      | PowerShell/Python libraries (Az, MSGraph, etc.) available to runbooks      |
---

### Examples: Using Assets in Runbooks

Get a Variable:
```PowerShell
$location = Get-AutomationVariable -Name "DefaultRegion"
```

Use a Credential:
```PowerShell
$creds = Get-AutomationCredential -Name "ServiceAccount"
Connect-AzAccount -Credential $creds
```

Use a Connection:
```PowerShell
$connection = Get-AutomationConnection -Name "AzureRunAsConnection"
Connect-AzAccount `
  -ServicePrincipal `
  -Tenant $connection.TenantId `
  -ApplicationId $connection.ApplicationId `
  -CertificateThumbprint $connection.CertificateThumbprint
```

#### Lifecycle of a Runbook

- Create/Import runbook
- Author/Edit script logic
- Test in the sandbox environment
- Publish when ready
- Schedule or trigger the runbook
- Monitor logs and job history

### Summary

| Component          | Description                                  |
| ------------------ | -------------------------------------------- |
| Runbook            | Script or workflow to automate tasks         |
| PowerShell Runbook | Most commonly used, full Azure support       |
| Python Runbook     | Supports Python 2.7 only                     |
| Graphical Runbook  | Drag-and-drop interface for simple logic     |
| Hybrid Worker      | Run scripts on on-prem or custom VMs         |
| Authoring Options  | Portal, VS Code, GitHub, or uploaded script  |
| Automation Assets  | Variables, credentials, connections, modules |
---

---

# 3: Execution and Scheduling in Azure Automation

Runbooks are only useful if they can be executed reliably and flexibly. This section explains the different ways to **start runbooks**, how to **schedule them**, and how to **manage parameters, errors, and logs**.

## Runbook Execution Methods

Azure Automation allows you to trigger runbooks using multiple methods:

| Method           | Description |
|------------------|-------------|
| **Manual**       | Run directly from the Azure Portal |
| **Scheduled**    | Execute at defined intervals or times |
| **Webhook**      | Triggered via HTTP request from external services |
| **Alert Trigger**| Triggered by Azure Monitor or Log Analytics alerts |
| **Hybrid Worker**| Execute on on-premise or custom VM |

---

### I. Manual Execution

You can run any **published** runbook manually via the Azure Portal:

- Navigate to your **Automation Account**
- Select the **Runbook**
- Click **Start**
- Enter parameters if required

Ideal for testing or ad-hoc tasks.

---

### II. Scheduled Execution

Runbooks can be triggered automatically using **schedules**:

- One-time (specific date/time)
- Recurring (daily, weekly, hourly)
- Timezone-aware

#### How to Create a Schedule:
1. Go to **Runbooks** → Select a runbook
2. Click on **Schedules**
3. Create a new schedule or link an existing one

You can **link the same schedule to multiple runbooks**.

---

### III. Webhook Trigger

A **Webhook** is a unique URL that can trigger a runbook from outside Azure.

- Secure, tokenized URL
- Supports only **POST** requests
- Can include input parameters in JSON body

#### Use Cases:
- Trigger from **GitHub Actions**
- Connect with **Logic Apps** or **Power Automate**
- Start automation from **custom apps or scripts**

> Treat webhooks like secrets. Regenerate or disable if leaked.

---

### IV. Alert-Based Triggers (Azure Monitor)

Runbooks can respond automatically to system events, such as:
- High CPU usage
- Failed backup
- VM shutdown event

#### Example:
- When CPU > 90% for 10 minutes → Trigger runbook to scale up resources.

Set this up in:
- **Azure Monitor Alerts**
- Select **Automation Runbook** as the action

---

### V. Runbook on Hybrid Worker

If a runbook needs to interact with on-prem resources or systems not reachable by Azure:
- Assign it to run on a **Hybrid Worker Group**
- Execute like a normal runbook, but the actual execution happens on the connected VM

---

### Error Handling and Logging

- Always use Try/Catch for handling exceptions
- Log custom messages with Write-Output, Write-Verbose, or Write-Error
- Use Write-Error to trigger alerts in monitoring tools

| Concept                 | Description                             |
| ----------------------- | --------------------------------------- |
| Manual Execution        | Run via Portal                          |
| Schedule                | One-time or recurring jobs              |
| Webhook                 | Trigger from external systems           |
| Alert Trigger           | React to Azure Monitor or metrics       |
| Hybrid Worker           | Execute locally on-prem                 |
| Input Parameters        | Accept values from user/scheduler       |
| Output / Logging        | Capture runbook results and errors      |
| Error Handling          | Use Try/Catch and write logs            |
| Job Monitoring          | View status, input, output in portal    |
| Alerting & Notification | Get alerts via Action Groups or Monitor |
---
---

# 4. Automation Assets

**Automation Assets** are reusable resources in Azure Automation that help you **simplify scripts**, **store shared data securely**, and **manage dependencies** across multiple runbooks.

They act like global variables or configuration items for your automation environment.

---

## What Are Automation Assets?

Assets are stored in the **Automation Account** and can be used across all runbooks. They help:
- Avoid hardcoding sensitive data like credentials
- Store configuration values like region or subscription ID
- Reuse modules across multiple scripts

#### I. Variables

Variables are name/value pairs stored at the account level.
- Can be **encrypted or plaintext**
- Used to store strings, integers, boolean, or complex objects
- Useful for values like region, API keys, or feature toggles

**Create Variable (Portal)**
`Automation Account > Shared Resources > Variables > Add a Variable`

#### II. Credentials

- Credentials securely store username/password pairs using Azure Key Vault–backed encryption.
- Used for authenticating to external systems (e.g., Azure, SQL Server, APIs)
- Stored securely and retrievable only within runbooks

**Create Credential (Portal)**
`Automation Account > Shared Resources > Credentials > Add a Credential`

#### III. Certificates

- Certificates are used when your automation needs to:
- Authenticate using client certificates
- Securely access services (e.g., on-prem apps, web APIs)
- Certificates must be in .pfx format, and private key must be included.

#### IV. Connections

- Connections store structured connection info like:
- Client ID, Tenant ID
- Subscription ID
- Certificate thumbprints

Azure provides built-in connection types like:
- AzureRunAsConnection (for managed identity auth)
- OMSConnection (Log Analytics)
- AzureClassicCertificate

#### V. Modules

Modules are PowerShell or Python packages used in your runbooks. Azure Automation includes common modules like:
- Az.Accounts, Az.Compute, Az.Resources
- You can import custom modules from:
    - Local .zip uploads
    - PowerShell Gallery

**Manage Modules:**
`Automation Account > Shared Resources > Modules`

| Asset Type       | Usage                                             |
| ---------------- | ------------------------------------------------- |
| **Variables**    | Store values for re-use across runbooks           |
| **Credentials**  | Securely store and retrieve secrets               |
| **Certificates** | Authenticate using certs for APIs or services     |
| **Connections**  | Structured authentication info (e.g., AzureRunAs) |
| **Modules**      | Libraries used in PowerShell/Python runbooks      |
---
---

# 5. Hybrid Runbook Worker

Not all automation tasks can be done in the cloud. Sometimes, you need to run scripts on **on-premises servers**, **other clouds**, or **restricted environments**. That’s where **Hybrid Runbook Workers** come in.

## What is a Hybrid Runbook Worker?

A **Hybrid Runbook Worker (HRW)** is a **VM or server** that runs runbooks **outside Azure**, while still being managed from your Azure Automation Account.

It allows you to:
- Run automation on **on-prem infrastructure**
- Access **local file systems**, **databases**, or **networks**
- Use **custom tools or binaries** not available in Azure sandbox

Think of it as a **bridge between Azure and your private environment**.


## Key Concepts

| Term | Description |
|------|-------------|
| **Hybrid Worker Group** | A logical group of one or more machines registered to execute runbooks |
| **Runbook Job** | A task executed by Azure Automation, offloaded to a Hybrid Worker |
| **HRW Agent** | Software that connects your machine to Azure Automation |
| **Job Runtime** | Billed just like cloud jobs — by execution time |

---

## Installing Hybrid Runbook Worker

### Requirements:
- Windows Server 2012 R2 or later (Linux support is via Azure Arc)
- PowerShell 5.1 or newer
- Internet access to Azure endpoints
- Admin permissions

### Installation Steps:

1. Go to **Azure Portal > Automation Account > Hybrid Worker Groups**
2. Click **Add a hybrid worker group**
3. Choose **"Add a machine"**
4. Download and run the **HRW agent installer** on your server
5. Authenticate using:
   - **Azure Run As Account**
   - OR **Managed Identity**

> The agent runs as a Windows service and polls Azure Automation for jobs to execute.

---

## Runbook Execution on HRW

You can choose to run a runbook **on a Hybrid Worker Group** instead of in Azure:

- Navigate to the **Runbook**
- Click **Start**
- Under "Run Settings", choose your **Hybrid Worker Group**

The runbook will then execute **locally on the VM** instead of in the Azure sandbox.

### Benefits:
- Access to **on-prem** resources like file shares, SQL servers
- **No Azure sandbox limits** (e.g., memory, runtime, modules)
- Supports **custom modules**, EXEs, and long-running jobs

---

## Use Cases for Hybrid Workers

| Scenario | Why HRW is Ideal |
|----------|------------------|
| Access on-prem SQL Server | Azure sandbox can’t reach private networks |
| Run long or complex scripts | HRW has no strict execution time/memory limits |
| Use custom binaries or EXEs | Sandbox doesn’t allow executable binaries |
| Automate 3rd-party systems | E.g., VMware, file shares, Active Directory |
| Enforce DSC on local machines | Apply configurations via Azure Automation DSC |

---

## Monitoring and Logging

Hybrid Workers send **job logs** back to Azure, just like cloud jobs.

You can view:
- **Job status**
- **Execution output**
- **Errors and warnings**

In:
- **Automation Account > Jobs**
- Or route to **Log Analytics** for centralized monitoring

> Tip: Use Log Analytics queries to track all Hybrid Worker activity.

---

## Security and Best Practices

- Run the HRW agent under a **least-privilege service account**
- Use **private networking** or **VPN** to limit exposure
- Restrict **firewall access** to only required Azure Automation endpoints
- Use **managed identity** when possible for secure authentication

---

## Summary

| Feature | Description |
|--------|-------------|
| **HRW** | Machine that runs Azure Automation runbooks locally |
| **Install Agent** | Connects your server to Azure Automation |
| **No Sandbox Limits** | Full PowerShell/OS access |
| **Secure** | Supports credential encryption, firewalls, private links |
| **Ideal for** | On-prem automation, hybrid scenarios, complex jobs |

---

# 6. Desired State Configuration (DSC) with Azure Automation

**Desired State Configuration (DSC)** is a **declarative configuration management** platform built into PowerShell. When used with **Azure Automation**, it allows you to **define**, **deploy**, and **maintain** consistent configurations on virtual machines (VMs) or servers — whether they are in **Azure**, **on-prem**, or other cloud providers.

## What is PowerShell DSC?

DSC is a feature of PowerShell that enables you to:
- Describe **how a system should be configured** (not how to get there)
- Ensure that the configuration is **continuously enforced**
- Automatically **correct drift** (deviation from desired config)

Think of DSC as **"Infrastructure as Code"** for machine configuration.

## DSC vs. Runbooks

| Feature          | Runbook                                 | DSC                                             |
|------------------|------------------------------------------|--------------------------------------------------|
| **Type**         | Procedural (step-by-step scripting)      | Declarative (define desired state)              |
| **Execution**    | On-demand, scheduled, or triggered       | Continuous monitoring and enforcement           |
| **Use Case**     | Automate tasks and operations            | Maintain system configuration                   |
| **Idempotent**   | Not always                               | Yes — DSC ensures consistent end-state          |
| **Target**       | Single task or workflow                  | Configuration of services, roles, registry, etc.|

> Use **Runbooks** for automation tasks, and **DSC** to enforce system state.

---

## Key Components of DSC

| Component        | Description |
|------------------|-------------|
| **Configuration**| PowerShell script defining the desired system state |
| **Resource**     | The building blocks (e.g., File, WindowsFeature, Service) used in a configuration |
| **LCM**          | Local Configuration Manager – runs on the target VM to apply and monitor config |
| **MOF File**     | Compiled version of a configuration sent to the node (in `.mof` format) |

---

## Authoring a DSC Configuration

### Basic Example: Install IIS

```powershell
Configuration InstallIIS {
    Node "localhost" {
        WindowsFeature WebServer {
            Name = "Web-Server"
            Ensure = "Present"
        }
    }
}
InstallIIS
```

### Pull Server vs. Push Model
| Model    | Description                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------- |
| **Pull** | Nodes check in with Azure periodically to pull and apply the latest configuration (Recommended) |
| **Push** | Admin pushes the config manually to the node (for testing or one-time use)                      |
---

### Use Cases for DSC
| Use Case                                 | Why DSC?                                      |
| ---------------------------------------- | --------------------------------------------- |
| Install/ensure specific Windows features | e.g., IIS, .NET Framework                     |
| Enforce local user/group membership      | Ensure specific users or policies are present |
| Manage services                          | Ensure services are running or stopped        |
| Configure registry keys                  | Enforce registry settings for compliance      |
| Install applications via packages        | Use `Package` resource to install software    |
| Maintain file/folder structures          | Ensure certain files exist or do not exist    |
---

### Summary

| Concept             | Description                                              |
| ------------------- | -------------------------------------------------------- |
| **DSC**             | Declarative tool for managing and enforcing system state |
| **Configuration**   | PowerShell code defining the desired state               |
| **LCM**             | Agent running on the target system                       |
| **Pull Model**      | Nodes retrieve config from Azure and report back         |
| **Compliance**      | Track if a node matches its assigned configuration       |
| **Use With Hybrid** | Can apply DSC to on-prem VMs or non-Azure environments   |
---
---

