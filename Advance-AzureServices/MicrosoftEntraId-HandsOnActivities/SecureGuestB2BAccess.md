# Hands-On Lab: Secure Guest (B2B) Access on Azure AD via Azure Portal

## Overview

This lab provides a hands-on exercise to configure secure Business-to-Business (B2B) collaboration in Microsoft Azure using Azure Active Directory (Azure AD). You will configure guest access settings, invite an external user, assign resource access, and enforce conditional access policies.

---

## Objectives

- Configure Azure AD for external guest collaboration.
- Invite a guest user securely.
- Assign RBAC roles to guest users.
- Enforce Conditional Access policies.
- Validate guest access from an external user's perspective.

---

## Prerequisites

- Azure subscription with **Owner** or **User Administrator** privileges.
- Admin access to **Azure Active Directory**.
- A personal email address (Gmail, Outlook, etc.) for testing guest access.
- Incognito/private browser for testing guest access.

---

## 1. Configure External Collaboration Settings

1. Go to:  
   `Azure Portal` → `Azure Active Directory` → `External Identities` → `External collaboration settings`

2. Set the following:
   - **Guest user access**:  
     `Guest users have limited access to properties and memberships of directory objects`
   - **Guest invite settings**:  
     `Admins and users in the guest inviter role can invite`
   - **Enable Email One-Time Passcode**: `Yes`
   - **Restrict guest access to directory**: `Yes`

3. Click **Save**.

---

## 2. Invite a Guest User

1. Navigate to:  
   `Azure Active Directory` → `Users` → `+ New guest user`

2. Choose `Invite user`, then enter:
   - Name: `Test Guest`
   - Email: `<use your personal email>`
   - Personal message (optional)

3. (Optional) Add the guest to a new group (e.g., `B2B-Test-Group`)

4. Click **Invite**

> The user will receive an email invitation.

---

## 3. Assign Role to Guest User on a Resource Group

1. Go to:  
   `Resource Groups` → Create or select a resource group (e.g., `test-b2b-rg`)

2. Navigate to:  
   `Access Control (IAM)` → `+ Add` → `Add role assignment`

3. In the Role Assignment:
   - **Role**: `Reader`
   - **Assign access to**: `User, group, or service principal`
   - **Select**: The invited guest user

4. Click **Save**

This gives read-only access to the selected resource group.

---

## 4. Enforce Conditional Access for Guest Users

1. Navigate to:  
   `Azure AD` → `Security` → `Conditional Access` → `+ New policy`

2. Configure the policy:
   - **Name**: `Require MFA for Guests`
   - **Users**: Select `Guest or external users`
   - **Cloud apps**: `All cloud apps` or specific apps
   - **Grant Controls**:  
     - Grant access
     - Require multi-factor authentication

3. Enable the policy and click **Create**

This ensures external users authenticate securely.

---

## 5. Validate Guest Access

1. Open an **incognito/private browser window**

2. Access the invitation link sent to your guest email

3. Accept the invitation and sign in

4. Navigate to:  
   `https://portal.azure.com/`

5. Locate the Resource Group you were assigned to

You should be able to **view** the resource group but not modify or delete anything.

---

## 6. (Optional) Audit and Governance

- Check `Azure AD` → `Sign-in logs` for guest activity
- Set up `Access Reviews` under `Identity Governance` to periodically review guest access
- Customize branding under `Company Branding` for guest sign-in experience

---

## Cleanup (Optional)

- Remove the guest user from Azure AD
- Delete the resource group or remove access
- Disable or delete the Conditional Access policy

---

## Next Steps

- Automate guest setup with PowerShell or Terraform
- Test custom roles for more granular control
- Integrate with Microsoft Entra ID for advanced identity governance

---

## Resources

- [Microsoft Docs: Azure AD B2B](https://docs.microsoft.com/en-us/azure/active-directory/external-identities/what-is-b2b)
- [RBAC in Azure](https://docs.microsoft.com/en-us/azure/role-based-access-control/overview)
- [Conditional Access](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/overview)
