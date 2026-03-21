---
layout: page
title: Module 1 - Course Overview adn Fundamentals
permalink: /dtdl-course/Module-1-Course-Overview/
---

# CI/CD Pipeline for SREs on Azure

This course is designed to take you from **absolute beginner → advanced CI/CD architect**, with a strong focus on **real-world SRE practices**.

## Course Objectives
- Understand CI/CD concepts from fundamentals to advanced
- Build complete pipelines using Azure DevOps
- Design production-grade CI/CD architectures
- Implement secure, scalable, and reliable pipelines
- Handle failures, rollbacks, and debugging
- Apply SRE principles in CI/CD systems

## Who Should Take This Course?
- Beginners in DevOps / SRE
- Software Engineers moving to DevOps
- Cloud Engineers
- SREs who want strong CI/CD expertise

## Prerequisites
- Basic understanding of programming (any language)
- Basic knowledge of Git (helpful but not required)
- Azure account (Free tier is enough)

# Fundamentals
- **1. Software Development Lifecycle (SDLC)**
- **2. Version Control Systems (Git)**
- **3. Branching strategies**
- **4. Build vs Deploy vs Release**

# Module 01: Fundamentals
- How software is actually built in the real world
- Why CI/CD even exists
- How Git fits into everything
- How developers collaborate safely
- The difference between Build, Release, and Deploy

Before we talk about CI/CD, pipelines, or Azure… Let’s answer a simple question:
> How does code go from a developer’s laptop to real users?

### Real-World Analogy
Think of building software like running a **restaurant**:
- Developer → Chef 👨‍🍳  
- Code → Ingredients 🥦  
- Build → Cooking 🍳  
- Testing → Tasting 🧪  
- Deployment → Serving 🍽  

*Now imagine:*
- Every chef cooks differently  
- No standard recipe  
- No quality check  
- Food goes directly to customers  
`Chaos. Bad experience. Complaints.`

## 1. Software Development Lifecycle (SDLC)
SDLC is the **journey of software** from idea to production. There are Phases which are followed as below:

### 1. Requirements 
`What problem are we solving?`

*Example:*
- Users should be able to pay online

### 2. Design
`How will we build it?`
- Architecture decisions
- Database design
- APIs

### 3. Development
`Writing the actual code`

### 4. Testing
`Does it work correctly?`
- Unit testing
- Integration testing

### 5. Deployment
`Making it available to users`

### 6. Maintenance
`Fix bugs, improve features`

### Traditional SDLC Problem Vs Modern Approach
| Traditional SDLC | Modern Approach |
| ---              | ---             |  
| Everything happens **slowly**  | Small, frequent changes |
| Releases happen once in months | Automated testing |
| Bugs are found late            | Fast releases |
| Deployment is manual and risky | Continuous feedback |

## 2. Version Control (Git)
Imagine this: You are writing a document with your team.

Problems:
```
Someone deletes your work
Two people edit same file
No history of changes
```
### How Git Solves This
Git is like: `A time machine + collaboration system for your code`

- Repository (Repo): `Your project storage`
- Commit: `A snapshot of your code at a point in time`
- Branch: `A separate version of your code`
- Merge: `Combining changes back`
- Pull Request (PR): `A review system before merging code`

### Branching — The Safety System
Multiple developers work on the same codebase, without branching:
- Code conflicts
- Broken production
- Chaos

**Strategy 1: GitFlow (Structured)**

Branches:
- `main` → production
- `develop` → integration
- feature branches

We use it when:
- Large teams
- Enterprise systems
- But this is Complex and slower releases

**Strategy 2: Trunk-Based Development (Modern)**
- One main branch
- Small, frequent commits

Why SREs Prefer this approach
- Faster CI/CD
- Easier automation
- Less merge conflict
- But needs strong testing and good CI pipeline

## Build vs Release vs Deploy
This is one of the most misunderstood topics.

### Build (Create the Product)
- Compile code
- Install dependencies
- Run tests
- Package application
`Output = Artifact`

*Example:*
- `.jar`
- `.zip`
- Docker image

### Release (Prepare for Delivery)
- Versioning
- Configuration setup
- Approval steps

### Deploy (Make It Live)
- Push to server/cloud
- Make it accessible to users

### Simple Analogy
| Step     | Real World Example |
|----------|------------------|
| Build    | Cooking food     |
| Release  | Packing food     |
| Deploy   | Delivering food  |

## Hands-On Lab
Understand Git workflow

### Steps:

```bash
# Clone repo
git clone <your-repo>

# Create branch
git checkout -b feature/login

# Make changes
git add .
git commit -m "Added login feature"

# Push changes
git push origin feature/login

Next:
    Open Pull Request in GitHub
    Review changes
    Merge into main
```

### Project Example
A fintech company:
- 100+ developers
- Uses trunk-based development
- Every commit triggers CI
- Deploys multiple times a day

`Speed without control = Disaster` & `Control without speed = Irrelevance`

*CI/CD balances both.* 
- Summary
    - SDLC explains the journey of software
    - Git enables safe collaboration    
    - Branching prevents chaos  
    - Build, Release, Deploy are different stages
    - These concepts are the foundation of CI/CD