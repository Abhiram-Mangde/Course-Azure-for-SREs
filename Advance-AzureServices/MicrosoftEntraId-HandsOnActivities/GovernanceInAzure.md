# Create and Apply an Azure Policy to Deny Specific IP Addresses

## Objective: Understand the role of Azure Policy in enforcing governance and compliance.
- Create a custom Azure Policy definition to deny resources from being deployed with disallowed public IP ranges.
- Assign and test the policy at a defined scope (subscription or resource group).
- Evaluate the policy’s effect and review compliance results.

## Concept: 
**As a Site Reliability Engineer (SRE)**, governance and compliance are critical pillars of operational excellence. Azure Policy enables you to enforce organizational standards and assess compliance at scale.
In this activity, you will implement a governance control that denies any resource creation if it attempts to use a disallowed public IP address or range.

This helps ensure that:
- Only approved IPs are used in your infrastructure.
- Accidental exposure to the public internet is minimized.
- Network security and compliance baselines are enforced automatically.

### Step 1: Define the Scenario
Your organization wants to **block deployments** that use IP addresses outside of approved ranges.

**Example requirement:**
-  Deny any resource with a public IP in the range `203.0.113.0/24`.
You will create a custom Azure Policy to enforce this rule.

### Step 2: Create the Policy Definition

1. In the Azure Portal, navigate to:
    - **Home → Policy → Definitions → + Policy Definition**
2. Fill in the basic information:
    - **Definition location:** Choose your subscription.
    - **Name:** `Deny-Disallowed-Public-IP`
    - **Category:** `Governance` or create a new one.
3. In the Policy Rule editor, paste the following JSON:
```JSON
{
  "mode": "Indexed",
  "policyRule": {
    "if": {
      "allOf": [
        {
          "field": "type",
          "equals": "Microsoft.Network/publicIPAddresses"
        },
        {
          "field": "Microsoft.Network/publicIPAddresses/ipAddress",
          "like": "203.0.113.*"
        }
      ]
    },
    "then": {
      "effect": "deny"
    }
  },
  "parameters": {},
  "metadata": {
    "category": "Governance",
    "version": "1.0.0",
    "description": "Deny creation of public IPs within disallowed ranges."
  }
}
```

**Explanation:**
- The policy targets Azure resources of type `Microsoft.Network/publicIPAddresses`.
- If the IP address matches `203.0.113.*`, the policy denies the request.
- You can modify this to block multiple ranges using additional `anyOf` or `in` conditions.

### Step 3: Save and Assign the Policy

1. Click **Save** to create the policy.
2. Go to **Assignments → + Assign Policy**.
3. Configure:
    - **Scope:** Choose your subscription or a specific resource group.
    - **Policy definition:** Select Deny-Disallowed-Public-IP.
    - **Assignment name:** Enforce Public IP Restrictions.
4. Click **Review + Create → Create**.

### Step 4: Test the Policy

1. Try to create a new **Public IP Address**:
    - Go to **Networking → Public IP addresses → + Create**.
    - Choose an IP address within the disallowed range (e.g., `203.0.113.15`).
2. When you attempt to deploy, Azure should **block the deployment** with a message like:
    *- “The resource creation was denied by policy `Deny-Disallowed-Public-IP`.”*
3. Try again with an IP outside the restricted range (e.g., `198.51.100.10`). This one should succeed.

### Step 5: Review Compliance Results
1. Navigate to **Policy → Compliance**.
2. Find your policy assignment.
3. Observe the compliance status:
    - Resources with disallowed IPs = Non-compliant
    - Allowed resources = Compliant
---

## Questions 
- How does Azure Policy differ from Azure RBAC or Azure Blueprints in enforcing governance?
- What other resource configurations could benefit from similar deny rules (e.g., untagged resources, unencrypted disks)?
- How could this policy integrate with CI/CD pipelines for proactive compliance?