#!/bin/bash
# ==========================================================
# Azure for SRE - Hands-On Activity
# Script: create-azure-budget-alert.sh
# Purpose: Create a monthly Azure Budget and assign alerts
# Reference Script for Hands-On Activity - Assign Budget Alert: https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/blob/main/Advance-AzureServices/MicrosoftEntraId-HandsOnActivities/AssignBudgetAlerts.md)
# ==========================================================

# -----------------------------
# Variables - EDIT THESE ACCORDING TO YOUR NEED
# -----------------------------
subscriptionId="<your-subscription-id>"
budgetName="SRE-Monthly-Budget"
budgetAmount=500                 # USD
contactEmails="sre-team@company.com"
startDate=$(date +"%Y-%m-01")    # first day of current month
endDate=$(date -d "+12 months" +"%Y-%m-%d")

# -----------------------------
# Azure Login & Subscription
# -----------------------------
echo "Logging into Azure..."
az account show > /dev/null 2>&1 || az login

echo "Setting subscription context..."
az account set --subscription "$subscriptionId"

# -----------------------------
# Create Budget
# -----------------------------
echo "Creating Azure Budget: $budgetName ($${budgetAmount} monthly)..."

az consumption budget create \
  --amount $budgetAmount \
  --budget-name $budgetName \
  --category cost \
  --time-grain monthly \
  --start-date $startDate \
  --end-date $endDate \
  --subscription $subscriptionId \
  --notification-key 80percent \
  --notification-threshold 80 \
  --notification-enabled true \
  --notification-contact-emails $contactEmails \
  --notification-operator GreaterThan \
  --notification-threshold-type Actual >/dev/null

if [ $? -eq 0 ]; then
  echo "Budget created successfully."
else
  echo "Failed to create budget. Check permissions or subscription ID."
  exit 1
fi

# -----------------------------
# Add Alert Notification
# -----------------------------
echo "Adding 100% budget threshold notification..."

az consumption budget update \
  --budget-name $budgetName \
  --subscription $subscriptionId \
  --add notifications.100percent \
    "threshold=100" \
    "operator=GreaterThan" \
    "thresholdType=Actual" \
    "contactEmails=$contactEmails" \
    "enabled=true" >/dev/null

if [ $? -eq 0 ]; then
  echo "Added 100% alert notification."
else
  echo "Warning: Failed to add 100% notification."
fi

# -----------------------------
# Verify Configuration
# -----------------------------
echo "Verifying budget configuration..."
az consumption budget show \
  --budget-name $budgetName \
  --subscription $subscriptionId \
  --output table

# -----------------------------
# Export Configuration (Optional)
# -----------------------------
configFile="budget-config-${budgetName}.json"
az consumption budget show \
  --budget-name $budgetName \
  --subscription $subscriptionId \
  --output json > $configFile

echo "Budget configuration exported to: $configFile"
echo "Script execution complete!"
echo "----------------------------------------------------------"
echo "You have successfully created a budget and alerts in Azure!"
echo "Check: Azure Portal → Cost Management + Billing → Budgets"
echo "----------------------------------------------------------"
