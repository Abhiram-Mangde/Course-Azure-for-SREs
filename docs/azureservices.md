---
layout: page
title: Azure Services
---

<style>

/* ============================= */
/* MS LEARN STYLE (MATCH HOME) */
/* ============================= */

:root {
  --ms-blue: #0078d4;
  --ms-dark: #323130;
  --ms-border: #edebe9;
}

/* Headings */
h1 {
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--ms-dark);
  margin-bottom: 16px;
}

/* Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 32px;
}

/* Cards (same behavior as Home page) */
.service-card {
  background: #ffffff;
  border: 1px solid var(--ms-border);
  border-radius: 4px;
  padding: 20px;
  transition: all 0.25s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
}

/* Hover lift effect */
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  border-color: #d2d0ce;
}

/* Card text */
.service-card h3 {
  margin-top: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--ms-dark);
}

.service-card p {
  font-size: 0.95rem;
  color: #605e5c;
}

.service-card a {
  display: inline-block;
  margin-top: 10px;
  color: var(--ms-blue);
  font-weight: 600;
  text-decoration: none;
}

.service-card a:hover {
  text-decoration: underline;
}

/* Fade-in animation (same as Home) */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}

</style>

# Azure Services for SREs

Explore core Azure services from a **Site Reliability Engineering perspective**.  
Each service includes **concepts, real-world use cases, and hands-on labs**.

<div class="services-grid fade-in">

<div class="service-card">
  <h3>📈 Azure Monitor</h3>
  <p>Observability, metrics, logs, and alerts.</p>
  <a href="{{ '/azureservices/Azure Monitor/' | relative_url }}">Explore →</a>
</div>

<div class="service-card">
  <h3>💻 Azure Virtual Machines</h3>
  <p>Compute, scaling, and availability.</p>
  <a href="{{ '/azureservices/Azure Virtual Machines/' | relative_url }}">Explore →</a>
</div>

<div class="service-card">
  <h3>☸️ Azure Kubernetes Service</h3>
  <p>Production-grade container orchestration.</p>
  <a href="{{ '/azureservices/Azure Kubernetes Service/' | relative_url }}">Explore →</a>
</div>

<div class="service-card">
  <h3>🔐 Azure Entra ID</h3>
  <p>Identity, access, and reliability.</p>
  <a href="{{ '/azureservices/Azure Entra Id/' | relative_url }}">Explore →</a>
</div>

<div class="service-card">
  <h3>⚙️ Automation Account</h3>
  <p>Operational automation at scale.</p>
  <a href="{{ '/azureservices/Azure Automation Account/' | relative_url }}">Explore →</a>
</div>

<div class="service-card">
  <h3>📦 Azure Content Delivery Network</h3>
  <p>Classic CDN service.</p>
  <a href="{{ '/azureservices/Azure CDN/' | relative_url }}">Explore →</a>
</div>

<div class="service-card">
  <h3>🌍 Azure Front Door</h3>
  <p>A modern global CDN + edge platform.</p>
  <a href="{{ '/azureservices/Azure Front Door/' | relative_url }}">Explore →</a>
</div>

<div class="service-card">
  <h3>📘 Azure AI Service</h3>
  <p>Pre-built artificial intelligence APIs.</p>
  <a href="{{ '/azureservices/Azure AI Services/' | relative_url }}">Explore →</a>
</div>

<div class="service-card">
  <h3>🔹Azure Digital Twins</h3>
  <p>A Cloud platform service that lets you create live digital replicas of environments and systems</p>
  <a href="{{ '/azureservices/Azure Digital Twin/' | relative_url }}">Explore →</a>
</div>

</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
  });
});
</script>
