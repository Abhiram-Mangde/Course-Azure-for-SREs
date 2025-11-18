# Configure Privileged Identity Management (PIM) for Global Admin Role

## What is Privileged Identity Management (PIM)?

**Microsoft Entra Privileged Identity Management (PIM)** is a service that enables you to manage, control, and monitor access to important resources in your organization. These include:

- **Azure AD roles** (e.g., Global Administrator, User Administrator)
- **Azure resources** (e.g., Subscriptions, Resource Groups)

With PIM, you can:
- Enforce **just-in-time (JIT)** role activation
- Require **multi-factor authentication (MFA)** for elevation
- Set **approval workflows** before granting privileges
- Limit **activation duration** for sensitive roles
- Implement **audit and alerts** on role usage

### Why Use PIM for Global Administrator?

The **Global Administrator** role has the highest level of privilege in Microsoft Entra ID (formerly Azure AD). Assigning this role permanently increases the risk of:
- Accidental configuration changes
- Account compromise
- Non-compliance with security policies

**PIM helps mitigate these risks** by making the role **eligible** instead of permanent, and requiring users to **activate** the role only when needed — with appropriate **controls**.

---

## Hands-On Lab: Configure PIM for Global Administrator Role

### Prerequisites
- You must have at least **Privileged Role Administrator** or **Global Administrator** privileges.
- PIM is available in **Azure AD Premium P2** license.

---

### Step 1: Access Microsoft Entra Admin Center
1. Go to: [https://entra.microsoft.com](https://entra.microsoft.com)
2. Sign in with your admin credentials.

---

### Step 2: Enable PIM

1. In the left menu, go to **"Identity"** > **"Privileged Identity Management"**
2. Click on **"Azure AD roles"**.
3. If this is your first time, click **"Consent to PIM"** to enable it for your tenant.

---

### Step 3: Assign the Global Administrator Role as Eligible

1. Under **Azure AD roles**, click **"Roles"**.
2. Search for and click **"Global Administrator"**.
3. Click **"Add assignments"**.
4. Set the following:
   - **Select member**: Choose the user who needs this role.
   - **Assignment type**: Choose **Eligible**.
   - **Start/End date**: Optional (set validity duration).
5. Click **"Assign"**.

---

### Step 4: Configure Activation Settings

1. Under **Global Administrator** > **Settings**, click **"Edit"**.
2. Configure the following:
   - **Require MFA to activate**: Yes
   - **Activation maximum duration (hours)**: e.g., 1 or 4
   - **Require justification on activation**: Yes
   - **Require approval to activate**: Optional, can be enabled
   - **Notification**: Enable notifications to security team
3. Click **"Save"**.

---

### Step 5: Test Role Activation as User

1. Sign in as the user assigned to the Global Admin role.
2. Go to **Entra Admin Center** > **Privileged Identity Management** > **My roles**.
3. Under **Eligible roles**, click **"Activate"** next to **Global Administrator**.
4. Complete the required:
   - MFA prompt
   - Justification
   - Approval (if configured)
5. Click **"Activate"**.
6. The role is now active for the configured duration.

---

### Step 6: Monitor Role Activity

1. As an admin, go to **PIM** > **Audit History**.
2. Review role activations, justifications, and durations.
3. Set up alerts and reviews under **"Alerts"** and **"Access reviews"**.

---

## Additional Resources

- [Microsoft PIM Documentation](https://learn.microsoft.com/en-us/azure/active-directory/privileged-identity-management/)
- [Zero Trust PIM Lab Guide](https://microsoft.github.io/ztlabguide/pim/)
- [SC-300 Official Lab - PIM](https://microsoftlearning.github.io/SC-300-Identity-and-Access-Administrator/Instructions/Labs/Lab_26_ConfigurePrivilegedIdentityManagementForAADRoles.html)

---

> Implementing PIM is a critical Zero Trust security control. By following the steps above, you ensure that your Microsoft Entra environment is resilient against identity-based threats.

