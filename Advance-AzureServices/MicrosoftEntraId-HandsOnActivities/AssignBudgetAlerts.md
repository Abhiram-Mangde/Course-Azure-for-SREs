# Assign Budget Alerts to a Subscription in Azure

## Objective

- Understand what Azure Budgets and Alerts are and why they matter for SREs.
- Create a cost budget for an Azure subscription using the Azure Portal.
- Configure budget alerts to notify stakeholders when spending exceeds predefined thresholds.
- Integrate budget alerts with Azure Monitor or Action Groups for automated responses.

## Conceptual Overview

As an SRE (Site Reliability Engineer), managing and optimizing cloud spend is just as important as ensuring reliability and performance. Azure Budgets help you stay within cost limits by setting thresholds and generating alerts when costs approach or exceed a set budget.

**Example Scenario:**
Your organization’s Azure subscription has a monthly budget of $500. As an SRE, you need to:
- Monitor costs to avoid overspending.
- Set alerts at 80% and 100% of the budget.
- Notify the SRE team via email when these thresholds are hit.

## Pre-Requisites
- Access to an Azure Subscription with Cost Management + Billing permissions (Contributor or higher).
- Email access to receive alert notifications.

### Step 1: Navigate to Cost Management + Billing

1. Sign in to the Azure Portal.
2. In the search bar, type “**Cost Management + Billing**” and open it.
3. Select **Budgets** under the **Cost Management** section.

### Step 2: Create a Budget
1. Click + Add to create a new budget.
2. Choose the Subscription scope (you can also select a Resource Group later).
3. Enter the following details:
    - **Name:** SRE-Monthly-Budget
    - **Reset Period:** Monthly
    - **Start Date:** Today’s date
    - **End Date:** 12 months from now
    - **Budget Amount:** 500 USD
4. Click Next to define alert conditions.

### Step 3: Configure Budget Alerts
1. Set alert conditions for:
    - **80% of budget:** To warn before hitting the limit.
    - **100% of budget:** To indicate overspending.
2. Under Alert Recipients, enter your email or the SRE team’s distribution list.
3. (Optional) Link to an Azure Action Group to trigger automation — such as:
    - Sending alerts to Microsoft Teams or Slack.
    - Invoking an Azure Function that auto-scales down resources.

### Step 4: Review and Create

1. Review all configurations.
2. Click **Create** to deploy the budget and alert configuration.
3. Once created, Azure will automatically track and send notifications when thresholds are met.

### Step 5: Verify Alert Trigger (Simulation)
You can simulate spending to test the alert by:
- Deploying a small resource (e.g., a VM or storage account).
- Waiting for cost data to update (usually 24 hours).
- Checking **Cost Analysis** under **Cost Management** to confirm spending progress.

### Optional Automation (Advanced)
To integrate with an SRE workflow:
1. Create an Action Group in Azure Monitor that sends a webhook to a monitoring system (e.g., PagerDuty or Grafana OnCall).
2. Attach that Action Group to your budget alert for automated incident tracking.

## Questions
- How can SREs use budget alerts as part of their error budgets and operational SLIs?
- What actions can be automated when a budget threshold is breached (e.g., scaling down non-critical resources)?
- How do budget alerts complement Azure Policy and Cost Anomaly Detection?

> Note: A reference script is given in the Sample ProjectsFiles -> scripts folder [create_azure_budget_alert.sh](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Sample-ProjectFiles/scripts/create_azure_budget_alert.sh)