---
layout: page
title: Case Studies
permalink: /casestudy/
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
<h3>Analysis Microsoft Stock</h3>
<p>Understanding Microsoft Stock Through Technology, Business & Markets</p>
<a href="{{ "/casestudy/Analysis Microsoft Stock/" | relative_url }}">Read case study</a>
</div>

<div class="case-tile">
<h3>Reliability During Traffic</h3>
<p>Building Reliability During Traffic Spikes Using SRE Principles on Azure</p>
<a href="{{ "/casestudy/Reliability During Traffic/" | relative_url }}">Read case study</a>
</div>

</div>
