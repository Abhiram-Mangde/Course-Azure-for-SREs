---
layout: page
title: Hands-On Activity: Setup Conditional Access for Admins in Azure Entra ID
---

# Hands-On Activity: Setup Conditional Access for Admins in Azure Entra ID

## What is Conditional Access?

Conditional Access is a feature in Azure Entra Id (Azure AD), that allows organizations to enforce policies that control how and when users can access resources based on specific conditions.

It acts as a gatekeeper, providing additional layers of security by requiring certain conditions to be met before granting access to corporate applications and services. Think of it as an intelligent security layer that takes into account who, where, how, and on what device the user is trying to access an application.

---
## Key Features of Conditional Access:

**Contextual Access Control:** It makes access decisions based on specific conditions, such as the user's role, location, device compliance, and the application they're trying to access.

**Granular Control:** You can apply access policies to specific users, groups, and roles (e.g., only global admins or specific departments).

**Integration with Identity Protection:** Conditional Access can be tied to risk-based policies using Azure Identity Protection to make dynamic decisions based on the user’s sign-in behavior and device state.

**Automation of MFA:** Multi-factor authentication (MFA) can be triggered for additional security when conditions are met, reducing the risk of unauthorized access.

**Security Policies:** These policies ensure that only secure, trusted, and compliant devices and users can access your organization’s resources.

---
## Common Scenarios for Conditional Access:

1. **Requiring MFA for admins accessing sensitive resources** like the Azure portal or Microsoft 365 admin center.
2. **Blocking access** to apps when users sign in from a non-compliant device (e.g., jailbroken phones or unmanaged devices).
3. **Limiting access** to company resources from untrusted locations, like requiring users to be on the corporate VPN for access.
4. **Controlling access based on risk**—for instance, if a user's sign-in is flagged as suspicious, they might need to provide additional verification.

---
## Components of a Conditional Access Policy:

**1. Assignments:**

- **Users and Groups:** Target specific users or groups (e.g., Global Admins or HR department).
- **Cloud Apps or Actions:** Specify which apps the policy will apply to (e.g., Microsoft 365, Azure portal, etc.).
- **Conditions:** Define when the policy is triggered. Conditions can include:
    - Sign-in Risk: Low, medium, or high risk of the sign-in behavior.
    - Device Platform: Specify the device type (Windows, iOS, Android).
    - Location: Access can be controlled based on the user's IP address or geographic location.
    - Client Apps: Whether the user is accessing from a mobile app, desktop, or browser.
    - Device State: Whether the device is compliant or managed.

**2. Controls:**

- **Grant:** Decide whether the user should be allowed access or not. You can grant or block access, or require specific controls like MFA or device compliance.
- **Block Access:** Block access entirely if the policy conditions aren’t met.
- **Grant Access with Controls:** This includes requiring MFA, device compliance, or other checks before allowing access.

**3. Enable or Disable the Policy:**

- After creating the policy, you can choose to enable or disable it. Enabling it applies the policy to all users in scope.

---
## Benefits of Conditional Access:

- **Better Security:** Only trusted users and devices can access sensitive resources.
- **Reduced Attack Surface:** By limiting access to trusted locations and devices, you reduce the chances of a security breach.
- **Improved User Experience:** With smart policies, legitimate users can continue to access resources with minimal friction, while risks are mitigated.
- **Compliance:** Conditional Access helps meet organizational compliance requirements by enforcing security measures like MFA and device compliance.

--- 

## Hands-On Activity: Setting Up Conditional Access for Admins in Azure Entra ID

### Objective:
To create and configure a Conditional Access policy that requires Multi-Factor Authentication (MFA) for Global Admins accessing resources from non-compliant devices.

### Prerequisites:
- Azure Entra ID Tenant (Free or higher)
- Admin access to the Azure portal
- Basic understanding of Azure roles and Conditional Access
- An enrolled device that can be used for testing

### Step-by-Step Instructions:

**1. Sign In to Azure Portal:**
- Navigate to [Azure Portal](https://portal.azure.com/signin/index) and log in with your admin credentials.

**2. Access Azure Entra ID:**
- From the left-hand menu, search for **Azure Active Directory** and select it.

**3. Go to Conditional Access:**
- Under the Security section in the left menu, click on **Conditional Access**.

**4. Create a New Conditional Access Policy:**
- Click on **+ New Policy** to start creating a new policy.

**5. Name the Policy:**
- Name your policy “MFA for Global Admins on Non-Compliant Devices”.

**6. Assign the Policy to Global Admins:**
- Under Assignments, click on Users and Groups.
- Click on Select roles, and choose Global Administrator (this will apply the policy specifically to global admins).
- Optionally, you can target other administrative roles as required.

**7. Configure Conditions:**
**- Location:**
- Under Conditions, select Locations.
- Choose Yes to configure and select All locations or define specific trusted locations if necessary.

**- Device Platforms (Optional):**
- You can select specific device platforms (e.g., Windows, iOS, Android) under Device platforms to apply the policy selectively based on the user’s device.

**Device State:**
- Under Conditions, select Device state.
- Choose Yes and then select Compliant.
- This ensures that only compliant devices (devices that meet your organization's security requirements) will be able to access resources without requiring MFA.

**8. Set Access Controls:**
- Under Grant, select Grant access and check the box **Require multi-factor authentication.** This enforces MFA for global admins on non-compliant devices.

**9. Enable the Policy:**
- Scroll down and under Enable Policy, select On.
- Click Create to save and apply the policy.

**10. Testing the Policy:**
- Log in as a Global Admin from a non-compliant device (e.g., a device without the required security settings) and confirm that MFA is triggered.
- Try logging in from a compliant device to confirm that MFA is not prompted.

## Outcome:

By completing this task, students will understand how to configure and enforce Conditional Access policies that secure access for **Global Admins**. They will have learned how to:
- Target specific user roles (e.g., Global Admins) for policy enforcement.
- Define conditions like device compliance to control access.
- Implement MFA as an added layer of security.

## Questions:

1. What impact does enforcing MFA have on securing privileged accounts like Global Admins?
2. How could this policy be modified to also include Security Administrators or Other Admin Roles?
3. How might this Conditional Access policy help in meeting organizational security and compliance requirements?
4. How does enforcing MFA for admins help protect the organization's Azure resources?
5. Why is it important to target specific roles like Global Administrator in Conditional Access policies rather than applying policies to all users?
6. What challenges might arise if the device compliance condition is too strict or too lenient?