# Module 5: Automation & DevOps for Beginners

## Overview
Learn Infrastructure as Code (IaC), Azure CLI, PowerShell, Azure DevOps pipelines, and GitHub Actions for automation.

---

## Lesson 5.1: Introduction to Infrastructure as Code (IaC)
- ARM Templates, Bicep, Terraform
- **Demo:**
  - Example Bicep file to create a storage account
```bicep
resource storageAccount 'Microsoft.Storage/storageAccounts@2021-04-01' = {
  name: 'demostorageacct'
  location: 'westus'
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
}
```
- Deploy with Azure CLI:
```bash
az deployment group create --resource-group DemoGroup --template-file storage.bicep
```

---

## Lesson 5.2: Azure CLI & PowerShell Basics
- Automate resource creation
- **Demo:**
```bash
az vm create --resource-group DemoGroup --name DemoVM --image UbuntuLTS --admin-username azureuser --generate-ssh-keys
```

---

## Lesson 5.3: Getting Started with Azure DevOps
- CI/CD pipelines explained
- **Demo:**
  - Create Azure DevOps project
  - YAML pipeline example
```yaml
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

steps:
- script: echo Hello, Azure DevOps!
  displayName: 'Run a one-line script'
```

---

## Lesson 5.4: Automating Deployments with GitHub Actions
- Workflow YAML file for Azure deployment
- **Demo:**
```yaml
name: Deploy to Azure
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
        run: echo "Deploying to Azure..."
```

---

## Assessment
- Lab: Automate resource deployment and CI/CD pipeline


## Troubleshooting Tips & Common Mistakes
- Validate your IaC templates before deployment to catch syntax errors.
- If a pipeline fails, check for missing secrets or incorrect triggers.
- Common mistake: Not using version control for scripts and templates.
- Always test automation in a non-production environment first.

---

## Visual Guide
![Azure DevOps Pipeline Example](https://learn.microsoft.com/en-us/azure/media/devops/pipelines/pipeline-diagram.png)
*Sample Azure DevOps pipeline.*

---

## Quick Quiz
1. What is Infrastructure as Code (IaC)?
2. How does CI/CD improve deployment reliability?
3. What is the benefit of using GitHub Actions?

*Discuss your answers in the course forum or with your instructor.*

---

## Community & Discussion
- Join the [Azure SRE Learners Forum](https://techcommunity.microsoft.com/t5/azure/ct-p/Azure) to ask questions, share projects, and connect with peers.

---
**Goal:** Use IaC and CI/CD to deploy a simple app.

**Tasks:**
1. Write a Bicep or ARM template to deploy a storage account.
2. Use Azure CLI to deploy the template.
3. Set up a basic Azure DevOps pipeline to echo "Hello, Azure!" on code push.
4. Create a GitHub Actions workflow to deploy a file to Azure Storage.

**Submission:**
- Share your template, pipeline YAML, and workflow file with screenshots of successful runs.

---

## Hands-On Assignment
**Scenario:** You need to automate deployment for a web app.

**Instructions:**
1. List the steps to automate deployment using Azure DevOps or GitHub Actions.
2. Describe the benefits of using automation in cloud environments.
3. Share your automation plan in the course forum or with your instructor.

---

## Resources
- [Azure DevOps Documentation](https://learn.microsoft.com/en-us/azure/devops/pipelines/)
- [GitHub Actions for Azure](https://github.com/Azure/actions)
- [Bicep Documentation](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/)
