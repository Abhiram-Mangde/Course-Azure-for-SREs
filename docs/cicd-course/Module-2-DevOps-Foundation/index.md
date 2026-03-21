---
layout: page
title: Module 2 - DevOps Foundation
permalink: /dtdl-course/Module-1-DevOps-Foundation/
---

# DevOps Foundations
- What DevOps actually means
- Why CI/CD became necessary
- How modern software delivery works
- Pipeline fundamentals
- Environments and artifacts in real systems

## 1. What is DevOps?
DevOps is a tool like Jenkins or Azure DevOps. This is WRONG.

DevOps is: `A culture + set of practices that brings **Development and Operations together** to deliver software faster and more reliably.`

### Real-World Analogy

Imagine a **car manufacturing company**:
- Developers → Engineers building the car
- Operations → Factory workers assembling & delivering

| Without DevOps | With DevOps |
| ---            | ---         |
| Engineers design without thinking about manufacturing |Engineers + factory collaborate |
| Factory struggles to build | Designs are buildable |
| Delays and defects happen | Delivery is smooth and fast

### DevOps Goals

- Faster delivery
- Better quality 
- Reliability  
- Automation  

## 2. Why DevOps Was Needed

### Traditional Model Problems
- Dev writes code → throws to Ops
- Ops deploys manually
- No ownership
- Blame game culture

### Result
- Slow releases (months)
- High failure rate
- Production issues
- Stressful deployments

### DevOps Fixes This

- Shared responsibility
- Automation everywhere
- Continuous feedback

---

## 3. CI/CD Lifecycle
### Pipeline Flow

`Code → Build → Test → Artifact → Deploy → Monitor`

Every code change goes through a **factory pipeline**:

### 1. Code
Developer writes code

### 2. Build
- Compile
- Install dependencies
- Package application

### 3. Test
- Unit tests
- Integration tests

### 4. Artifact
- Final packaged version

### 5. Deploy
- Move to environment

### 6. Monitor
- Track performance
- Detect issues

CI/CD is not just automation. It is a **continuous feedback system**

## 4. Continuous Integration (CI)

Developers frequently merge code into a shared repository, and each change is automatically tested.

*Why It Matters*

| Without CI | With CI |
| ---        | ---     |
| Integration becomes painful | Early bug detection |
| Bugs pile up | Faster feedback |
| Releases become risky | Stable codebase |

*Example*

Developer pushes code →  
Pipeline runs →  
Tests execute →  
If failed → Fix immediately  

## 5. Continuous Delivery vs Deployment

### Continuous Delivery
- Code is always ready for production
- Deployment is manual (approval required)

### Continuous Deployment
- Code is automatically deployed to production

**Analogy**

| Type | Example |
|------|--------|
| Delivery | Food is ready, waiter serves |
| Deployment | Food goes directly to customer |

*Real-World Insight*
- Enterprises → prefer **Delivery**
- Startups → prefer **Deployment**

## 6. Artifacts (The Output of CI)

### What is an Artifact?
A packaged version of your application created after build

## Examples
- `.jar` (Java)
- `.war`
- `.zip`
- Docker image

### Why Important?
- Same artifact moves across environments
- Ensures consistency

### Bad Practice
Rebuilding code in every environment

### Good Practice

Build once → deploy everywhere

## 7. Environments (Where Code Runs)
### Common Environments
- Dev (Development)
- QA (Testing)
- Staging (Pre-production)
- Production (Live users)

Think of environments like:
- Dev → Practice kitchen  
- QA → Food testing lab  
- Staging → Mock restaurant  
- Prod → Real restaurant  

`Each environment should behave like production`

## 8. What is a Pipeline?
A pipeline is a sequence of automated steps that transform code into a running application.

`Pipeline = Assembly line in a factory`

## Example Stages
- Source
- Build
- Test
- Deploy

## Hands-On Lab

### Goal
Design a basic CI/CD pipeline (conceptually)

### Task

1. Take a sample app (Node.js / Python)
2. Define:
   - Build step
   - Test step
   - Deploy step
3. Draw pipeline flow

### Output Example
`Code → Build → Test → Deploy to Dev`

### Impact
- Bugs reach users
- System instability
- No safe testing

### Root Cause
- No environment separation

### Solution
- Use multiple environments
- Add staging before production
- Automate deployments

*Example*
### E-Commerce Platform

Pipeline:
1. Developer pushes code
2. CI pipeline runs tests
3. Artifact created
4. Deploy to QA
5. Manual approval
6. Deploy to production

`CI/CD is not just about speed.`

It is about:
- Reliability
- Repeatability
- Observability
- Failure recovery

- DevOps is culture + automation
- CI/CD is the backbone of DevOps
- Pipelines automate software delivery
- Artifacts ensure consistency
- Environments provide safety
- Feedback loops improve quality