---
layout: page
title: Module 3 - Continuous Integration
permalink: /dtdl-course/Module-3-Continuous-Integration/
---

# Continuous Integration (CI)
- What actually happens during Continuous Integration
- How CI works internally
- CI pipeline components and flow
- How to build your first CI pipeline in Azure DevOps
- Writing your first YAML pipeline
- Debugging CI failures

## 1. What is Continuous Integration (CI)?
Continuous Integration (CI) is the practice of automatically building and testing code every time a change is made.

CI is like a **quality checkpoint system** for code. Every time a developer commits code:
- It is automatically verified
- Tested
- Validated before merging

### Analogy
Imagine a **factory assembly line with quality checks**:
- Every product (code change) is inspected
- Faulty items are rejected immediately

| Without CI | With CI |
| ---        | ---     |
| Developers work in isolation | Broken builds |
| Code is merged at the end | Last-minute bugs |
| Integration becomes painful | Delayed releases |


## 2. What Happens When You Push Code?

### CI Flow
`Code Commit → Trigger → Build → Test → Artifact → Feedback`

Step-by-Step

### 1. Code Commit
Developer pushes code to repository

### 2. Trigger
Pipeline starts automatically, triggers can be:
- Push to branch
- Pull Request (PR)
- Scheduled

### 3. Build
- Install dependencies
- Compile code
- Package application

### 4. Test
- Run unit tests
- Validate functionality

### 5. Artifact Creation
- Store build output

`CI is a feedback loop, not just automation`

## 3. Components of a CI Pipeline

### Source Control
- GitHub / Azure Repos

### Build System
- Compiles and packages code

### Test Framework
- Runs automated tests

### Artifact Storage
- Stores build outputs

### Pipeline Engine
- Azure DevOps Pipelines

## 4. Introduction to Azure DevOps Pipelines

### What is Azure Pipeline?
A cloud service that automatically builds and tests your code.

*Two Types*
- Classic (UI-based)
- YAML (code-based)

## 5. Your First CI Pipeline (Concept)

### Goal
Build and test a simple application

## Pipeline Steps
1. Get code
2. Install dependencies
3. Run build
4. Run tests

## 6. Your First YAML Pipeline

- Create file: `azure-pipelines.yml`

```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - script: echo "Installing dependencies..."
    displayName: 'Install Dependencies'

  - script: echo "Building application..."
    displayName: 'Build Step'

  - script: echo "Running tests..."
    displayName: 'Test Step'
```

*Explanation*

- trigger: `Defines when pipeline runs`
- pool: `Defines build environment (VM)`
- steps: `Actual tasks executed`

> Pipeline = Code (YAML) → Version Controlled Automation

## 7. Hands-On Lab (Real Practice)
Create and run your first CI pipeline

### Steps
- Create a repo in Azure DevOps / GitHub
- Add sample code (Node.js / Python)
- Add azure-pipelines.yml
- Commit and push
- Expected Output
- Pipeline runs automatically
- Logs show each step
- Success or failure visible

## 8. Failure Scenarios (Think Like SRE)

### Scenario 1: Build Failure
Cause:
- Missing dependencies
- Syntax errors

Fix:
- Check logs
- Fix code
- Re-run pipeline

### Scenario 2: Test Failure
Cause:
- Broken functionality

Fix:
- Debug test case
- Fix logic

### Scenario 3: Pipeline Not Triggering
Cause:
- Wrong trigger configuration

Fix:
- Verify branch name
- Check YAML trigger section

## 9. Best Practices for CI
- Commit Frequently: `Small changes = easier debugging`
- Keep Builds Fast: `Slow pipelines reduce productivity`
- Automate Testing: `Never rely on manual testing`
- Fail Fast: `Detect issues early`
- Use Pull Requests: `Never merge directly to main`
