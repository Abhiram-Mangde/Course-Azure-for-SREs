---
layout: page
title: Module 4 - Continuous Delivery and Deployment
permalink: /dtdl-course/Module-4-Continuous-Delivery-Deployment/
---

# Continuous Delivery & Deployment (CD)
- What happens after CI is successful
- Difference between Continuous Delivery and Continuous Deployment
- How software is safely released to users
- Deployment strategies used in real systems
- Multi-stage pipelines in Azure DevOps
- How to design safe and reliable deployments (SRE mindset)

After CI is done, we have:
- Tested code  
- Built artifact  

Now what?
`How does this reach real users safely?`

This is where **CD (Continuous Delivery/Deployment)** comes in.

## 1. What is Continuous Delivery (CD)?
Continuous Delivery ensures that code is always in a deployable state, but requires manual approval to release to production.
- Code is **ready anytime**
- But a human decides **when to release**

*Analogy*

Think of an **airport runway**:
- Plane is ready
- Pilot checks everything  
- Then takes off  

### Benefits
- Controlled releases
- Reduced risk
- Human validation

## 2. What is Continuous Deployment?
Continuous Deployment automatically releases every change to production without manual intervention.
- Code passes CI → goes live automatically

### When to Use
- Startups
- High automation systems
- Strong testing environments

## 3. Delivery vs Deployment

| Feature | Continuous Delivery | Continuous Deployment |
|--------|-------------------|----------------------|
| Human Approval | Required | Not Required |
| Risk Level | Lower | Higher |
| Speed | Moderate | Fast |
| Use Case | Enterprises | Startups |

## 4. CD Pipeline Flow
`CI Complete → Artifact → Deploy to Dev → Test → Deploy to Staging → Approve → Deploy to Production`

Each stage is a **checkpoint** before production.

## 5. Environments in CD
`Dev → QA → Staging → Production`

### Why Multiple Environments?
You NEVER test directly in production

- Dev → Practice  
- QA → Testing lab  
- Staging → Dress rehearsal  
- Prod → Live performance  

## 6. Multi-Stage Pipelines (Azure DevOps)

### What is a Multi-Stage Pipeline?
A pipeline with multiple stages representing different environments
- Build
- Dev Deployment
- Staging Deployment
- Production Deployment

## 7. YAML Example — Multi-Stage Pipeline
```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

stages:

# Stage 1: Build
- stage: Build
  jobs:
    - job: BuildJob
      steps:
        - script: echo "Building application"
          displayName: "Build Step"

# Stage 2: Deploy to Dev
- stage: Dev
  dependsOn: Build
  jobs:
    - job: DeployDev
      steps:
        - script: echo "Deploying to Dev Environment"
          displayName: "Deploy Dev"

# Stage 3: Deploy to Staging
- stage: Staging
  dependsOn: Dev
  jobs:
    - job: DeployStaging
      steps:
        - script: echo "Deploying to Staging"
          displayName: "Deploy Staging"

# Stage 4: Production
- stage: Production
  dependsOn: Staging
  jobs:
    - job: DeployProd
      steps:
        - script: echo "Deploying to Production"
          displayName: "Deploy Prod"
```

## 8. Deployment Strategies

### 1. Blue-Green Deployment
*Two environments:*
- Blue (current)
- Green (new)

*Flow:* `Deploy to Green → Test Green → Switch traffic`

*Pros*
- Zero downtime
- Easy rollback

*Cons*
- Double infrastructure cost

### 2. Canary Deployment
Release to small % of users first

*Flow*
- Deploy to 10% users → Monitor → Gradually increase

*Pros*
- Risk minimized
- Real user testing

*Cons*
- Complex monitoring required

### 3. Rolling Deployment
Gradually replace old instances

*Flow:* Replace servers one by one

*Pros*
- No downtime
- Efficient

*Cons*
- Rollback is harder

## 9. Best Practices
- Always Use Staging
- Automate Deployments
- Add Approval Gates
- Monitor After Deployment
- Have Rollback Plan

## 10. Metrics to Track
- Deployment frequency
- Failure rate
- Rollback rate
- Time to recover (MTTR)

## Summary
- CD takes code from CI to users
- Delivery and Deployment are different
- Multi-stage pipelines enable safe releases
- Deployment strategies reduce risk
- SRE thinking focuses on reliability