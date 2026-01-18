---
layout: page
title: Investigating a Sign-In Anomaly via Azure Logs
---

# Investigating a Sign-In Anomaly via Azure Logs

## Objective: 

- Detect unusual sign-in behavior in Azure AD logs.
- Use Azure Log Analytics and Kusto Query Language (KQL) to analyze sign-in events.
- Correlate sign-in data with user behavior patterns to determine if an incident should be escalated.
- Document findings and mitigation steps in line with SRE best practices.

As an SRE, one key responsibility is maintaining system reliability and security. Unusual sign-in attempts — such as logins from unexpected locations, devices, or at odd hours — may indicate a compromised account or misconfiguration.

Azure Active Directory (Azure AD) and Microsoft Entra provide Sign-in Logs, which record details like:

- User principal name (UPN)
- IP address and location
- Device information
- Authentication method
- Result (success/failure)
- Conditional Access status

These logs can be queried in Azure Log Analytics using Kusto Query Language (KQL), allowing you to identify anomalies and take corrective actions.

### Step 1 — Access Sign-In Logs

1. Log in to the **Azure Portal**.
2. Navigate to **Microsoft Entra ID → Sign-in logs**.
3. Familiarize yourself with the dashboard — note available filters such as:
    - User
    - Status (Success / Failure)
    - Location
    - Application
    - Date Range
*Confirm that you can view raw sign-in entries for your tenant.*

### Step 2 — Simulate or Identify an Anomalous Sign-in

There are two paths here:

**Option A (Simulation for lab environments):**
- Use a test user account.
- Perform a sign-in from a different region using a VPN or an Azure VM in another location.
- Observe this new sign-in entry in the logs.

**Option B (Live environment):**
- Review the last 24 hours of sign-ins.
- Identify a sign-in that:
    - Comes from an unusual location.
    - Shows failed attempts followed by a success.
    - Uses an unfamiliar device.
*Identify at least one suspicious or unexpected sign-in event.*

### Step 3 — Query Logs in Log Analytics

1. Go to your Log Analytics Workspace (linked to Azure AD logs).
2. Open the Logs blade.
3. Run the following KQL query:
```kusto
SigninLogs
| where TimeGenerated > ago(24h)
| project UserPrincipalName, IPAddress, Location, ResultType, ResultDescription, AppDisplayName, ConditionalAccessStatus, DeviceDetail
| summarize Count = count() by UserPrincipalName, Location
| order by Count desc
```

4. Review which users have multiple sign-ins from different or unexpected locations.
5. Drill deeper into a single user’s activity:
```kusto
SigninLogs
| where UserPrincipalName == "user@yourdomain.com"
| project TimeGenerated, Location, IPAddress, AppDisplayName, ResultType, AuthenticationRequirement, ConditionalAccessStatus
| order by TimeGenerated desc
```

*Identify whether the sign-in pattern looks legitimate or suspicious.*

### Step 4 — Correlate with Conditional Access and Device Information

Run another query to see if Conditional Access policies were applied:
```kusto
SigninLogs
| where UserPrincipalName == "user@yourdomain.com"
| extend Device = tostring(DeviceDetail.operatingSystem)
| project TimeGenerated, Location, Device, ConditionalAccessStatus, Status = ResultType, ResultDescription
```
- Did the Conditional Access block the sign-in?
- Was the device compliant and managed?
- Was MFA challenged or bypassed?

*Document any anomalies — e.g., login succeeded from a non-compliant device without MFA.*

### Step 5 — Investigate IP and Geo-Location

Copy the suspicious **IPAddress** and use an external service (e.g., iplocation.net) to check the origin country.
- Is the IP regionally close to where the user typically logs in?
- Does the login time align with the user’s work hours?

*Conclude whether the login was likely legitimate or potentially malicious.*

### Step 6 — Document Findings and Actions

Create a short incident report:

- User:
- Time of Anomaly:
- Location/IP:
- Result: Success / Failure
- MFA Status:
- Risk Assessment: Low / Medium / High
- Next Actions:
    - Reset user password
    - Require reauthentication
    - Escalate to SOC team
    - Create alert rule in Azure Monitor

### Optional Extension: Create a Sign-In Anomaly Alert

1. In Azure Monitor, create a Log Alert Rule with the following query:
```kusto
SigninLogs
| where ResultType == 0  // Successful sign-ins
| summarize distinct_locations = dcount(Location) by UserPrincipalName, bin(TimeGenerated, 1d)
| where distinct_locations > 2
```
2. Configure the alert to trigger an email or webhook to your incident response system.

*You’ve automated the detection of users signing in from multiple regions within 24 hours.*