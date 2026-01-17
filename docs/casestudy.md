---
layout: page
title: Case Studies
---

<style>
/* ============================= */
/* MS LEARN – CASE STUDIES */
/* ============================= */

.case-tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.case-tile {
  border: 1px solid #edebe9;
  padding: 16px;
  background: #ffffff;
}

.case-tile h3 {
  margin-top: 0;
}

.case-tile a {
  color: #0078d4;
  font-weight: 600;
  text-decoration: none;
}

.case-tile a:hover {
  text-decoration: underline;
}
</style>

# Case Studies & Real-Life Scenarios

<div class="case-tiles">

<div class="case-tile">
<h3>High Availability in Azure</h3>
<p>How a retail company achieved 99.99% uptime during seasonal traffic spikes.</p>
<a href="{{ "/casestudy/High-Availability/" | relative_url }}">Read case study</a>
</div>

<div class="case-tile">
<h3>Cost Optimization</h3>
<p>How a startup reduced monthly cloud spend by 40% using Azure Cost Management.</p>
<a href="{{ "/casestudy/cost-optimization/" | relative_url }}">Read case study</a>
</div>

<div class="case-tile">
<h3>Incident Response with Observability</h3>
<p>How a financial services app improved resolution time with Azure Monitor.</p>
<a href="{{ "/casestudy/incident-response/" | relative_url }}">Read case study</a>
</div>

</div>
