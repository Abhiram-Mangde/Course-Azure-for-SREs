---
layout: page
title: "What is a SAS Token"
date: 2026-02-25
categories: [SRE]
description: "Understanding SAS Tokens in Azure: What They Are and Why They’re Used"
---

# Understanding SAS Tokens in Azure: What They Are and Why They’re Used

In the modern cloud era, secure and controlled access to storage resources is critical. When working with Azure Storage, one of the most common ways to grant limited access to storage accounts, containers, or blobs without sharing your storage account keys is through a Shared Access Signature (SAS) token.

*We will explore what a SAS token is, why it is used, how it works, and practical scenarios for its usage.*

## What is a SAS Token?
A **Shared Access Signature (SAS)** token is a **URI (Uniform Resource Identifier) that grants restricted access to Azure Storage resources**. Instead of sharing the master key of your storage account (which gives full control), a SAS token allows clients to access specific resources for a limited time and with limited permissions.

> Think of it as giving someone a temporary key that opens only certain doors, for a specific time, and with specific permissions.

***Key Characteristics:***
- **Time-bound**: You can specify when the SAS token starts and expires.
- **Permission-specific**: You can grant read, write, delete, list, add, or update permissions.
- **Resource-specific**: The token can target a blob, file, queue, or table.
- **Secure**: Avoids sharing the storage account key directly, reducing the risk of full account compromise.

## Types of SAS Tokens
Azure provides several types of SAS tokens depending on the use case:

### 1. User Delegation SAS
- Uses Azure Active Directory (AAD) credentials.
- Best for secure, identity-based access.
- **Example:** Allow a user to upload files to a blob container.

### 2.Service SAS
- Grants access to a specific resource within a storage account.
- Signed with the storage account key.
- **Example:** Grant read access to a blob for 24 hours.

### 3. Account SAS
- Grants access to multiple services within the storage account (blobs, queues, tables, files).
- Useful when a client needs broader access than a single resource.

## Why Use a SAS Token?
Using a SAS token solves several key problems:

### 1. Security
- Avoids exposing your storage account keys.
- Reduces the risk of unauthorized access.

### 2. Granular Access
- You can give access to specific resources only.
- **Example:** Allow read-only access to a container but block delete operations.

### 3. Time-Limited Access
- Define start and expiry time for access.
- **Example:** Share a file with a partner for 48 hours only.

### 4. Ease of Sharing
- SAS tokens can be appended to a URL, making it easy to share resources with clients or external users without giving them full account credentials.

## How a SAS Token Works
A SAS token is usually added to the resource URL as a query string. For example:
`https://<storage-account>.blob.core.windows.net/<container>/<blob>?sv=2024-08-01&sr=b&sig=abcd1234&se=2026-03-20T12%3A00%3A00Z&sp=r`

Breaking this down:
- sv – SAS token version
- sr – Resource type (blob, container, etc.)
- sp – Permissions (r = read, w = write, d = delete)
- se – Expiry date/time
- sig – Signature generated using account key or AAD

> When someone accesses this URL, Azure checks the token’s permissions and expiry, and allows access only if valid.

## Practical Use Cases

### 1. Temporary File Sharing
- Share large files stored in Azure Blob Storage without giving full account access.

### 2. Client Uploads
- Allow customers to upload files to a container securely.
- You can give write-only permission so clients can’t delete or read other blobs.

### 3. Application Integration
- Third-party applications need limited access to storage resources.
- SAS token ensures least-privilege access.

### 4. Automated Processes
- Applications running in the background can use SAS tokens to read/write blobs without storing storage account keys.

## Best Practices
- Use short-lived SAS tokens wherever possible.
- Prefer User Delegation SAS over Service SAS for better security with Azure AD.
- Monitor and revoke SAS tokens if compromised.
- Always use HTTPS URLs when sharing SAS tokens.