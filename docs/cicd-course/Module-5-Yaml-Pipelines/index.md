---
layout: page
title: Module 5 - YAML Pipelines
permalink: /dtdl-course/Module-5-Yaml-Pipelines/
---

# YAML Pipelines — CI/CD as Code (Core Skill)
- What YAML pipelines are and why they matter
- Structure of a YAML pipeline
- Key components: stages, jobs, steps
- Variables, secrets, and templates
- Writing production-ready pipelines
- Real-world best practices (SRE mindset)

## 1. Why YAML Pipelines?

### Traditional (UI-Based Pipelines)
- Click-based setup
- Hard to track changes
- Not version controlled
- Difficult to scale

### YAML Pipelines
Pipelines defined as code using YAML files

*Why This Matters*
- Version controlled (Git)
- Reproducible
- Easy to review
- Scalable
- Industry standard

*Analogy*
Think of YAML pipelines like: `A **recipe** for your software delivery`

Instead of manually cooking every time, you:
- Write recipe once
- Follow it every time

## 2. What is YAML?

### YAML = "YAML Ain’t Markup Language"
A human-readable format to define configurations.

```yaml
name: Build Pipeline
trigger:
  - main
```

> YAML is indentation-sensitive 

## 3. YAML Pipeline Structure

```yaml
trigger:
- main

pool:
  vmImage: 'ubuntu-latest'

variables:
  appName: 'my-app'

stages:
- stage: Build
  jobs:
  - job: BuildJob
    steps:
    - script: echo "Building..."
```

### Components

- **trigger**: `Defines when pipeline runs`
- **pool** : `Defines infrastructure (VM)`
- **variables** : `Store reusable values`
- **stages** : `High-level phases (Build, Deploy)`
- **jobs** : `Logical grouping of steps`
- **steps** : `Actual tasks`

## Best Practices
- Keep YAML clean and readable
- Use templates
- Use variables
- Avoid duplication
- Validate before commit

## Summary
- YAML pipelines = CI/CD as code
- Structured into stages, jobs, steps
- Variables and templates improve efficiency
- Security is critical