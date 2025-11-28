# CI/CD, GitOps & Deployment Automation

This module is where developers, DevOps, and SREs converge.
You will learn how AKS fits into modern automation pipelines.

## 1. Traditional CI/CD vs. Kubernetes CI/CD

Traditional CI/CD:
- Build → Test → Deploy to VM
- Deployment is static and manual

Kubernetes CI/CD:
- Build → Push → Deploy YAML/Helm → Kubernetes applies desired state

Kubernetes focus:

> *You deploy declarative configuration, not applications.*

## 2. GitHub Actions / Azure DevOps Pipelines for AKS

Pipelines:
- Build the container
- Run tests
- Push to ACR
- Deploy using kubectl, Helm, or GitOps

Real-world analogy:

> *A conveyor belt that takes your code from idea → running in AKS reliably.*

## 3. Helm — The Package Manager for Kubernetes

Helm charts:
- Bundle Kubernetes manifests
- Provide templating
- Allow versioned releases

Analogy:

> *Helm is like apt/yum but for microservices deployment templates.*

Helm helps:
- Standardize deployments
- Simplify config changes
- Manage rollbacks

## 4. Kustomize — Simple Layered Config Management

Kustomize:
- No templating
- Pure YAML overlays
- Best for environment-specific configuration

Example:
- dev.yaml
- prod.yaml
- staging.yaml

## 5. GitOps — The SRE-Preferred Deployment Model

GitOps (FluxCD / ArgoCD):
- Git is the single source of truth
- Any change in Git = automatic cluster update
- Full audit log
- Drift detection

> *Zero manual deployments → predictable, safe, auditable.*

GitOps guarantees:
- If a hacker changes something in cluster → GitOps auto-corrects it.
- If someone accidentally deletes resources → GitOps restores them.

## 6. Deployment Strategies for Zero Downtime

- Rolling Update
- Blue-Green
- Canary
- A/B testing

SRE analogy:

> *Like opening a new restaurant kitchen next to the old one and slowly shifting customers.*

### Hands-On Activities

1. Build and push images using GitHub Actions.
2. Deploy apps to AKS using Helm via CI/CD pipeline.
3. Use Kustomize to deploy different environments.
4. Install and configure FluxCD/ArgoCD GitOps workflow.
5. Implement blue-green and canary deployments.
6. Set up automated rollback on failure.