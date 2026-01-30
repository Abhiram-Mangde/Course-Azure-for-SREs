---
layout: page
title: Azure Services
---

# Azure Services for SREs

Explore core Azure services from a **Site Reliability Engineering perspective**.  
Each service includes **concepts, real-world use cases, and hands-on labs**.

<div class="services-grid">

<div class="service-card">
  <h3>📈 Azure Monitor</h3>
  <p>Observability, metrics, logs, and alerts.</p>
  <a href="{{ '/azureservices/Azure Monitor/' | relative_url }}">Explore</a>
</div>

<div class="service-card">
  <h3>💻 Azure Virtual Machines</h3>
  <p>Compute, scaling, and availability.</p>
  <a href="{{ '/azureservices/Azure Virtual Machines/' | relative_url }}">Explore</a>
</div>

<div class="service-card">
  <h3>☸️ Azure Kubernetes Service</h3>
  <p>Production-grade container orchestration.</p>
  <a href="{{ '/azureservices/Azure Kubernetes Service/' | relative_url }}">Explore</a>
</div>

<div class="service-card">
  <h3>🔐 Azure Entra ID</h3>
  <p>Identity, access, and reliability.</p>
  <a href="{{ '/azureservices/Azure Entra Id/' | relative_url }}">Explore</a>
</div>

<div class="service-card">
  <h3>⚙️ Automation Account</h3>
  <p>Operational automation at scale.</p>
  <a href="{{ '/azureservices/Azure Automation Account/' | relative_url }}">Explore</a>
</div>

<div class="azure-tile">
<h3>📦 Azure Content Delivery Network</h3>
<p>classic CDN service</p>
<a href="{{ '/azureservices/Azure CDN/' | relative_url }}">Open Module</a>
</div>

</div>

<style>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.service-card {
  border: 1px solid #edebe9;
  border-radius: 8px;
  padding: 24px;
  background: #ffffff;
}

.service-card h3 {
  margin-top: 0;
  color: #0078d4;
}

.service-card a {
  display: inline-block;
  margin-top: 12px;
  text-decoration: none;
  font-weight: 600;
  color: #0078d4;
}
</style>


