---
layout: page
title: Case Studies
---

<style>
  .case-tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .case-tile {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 220px;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
  }

  .case-tile:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }

  .case-tile h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #0078d7;
  }

  .case-tile p {
    font-size: 14px;
    color: #555;
    flex-grow: 1;
    margin-bottom: 15px;
  }

  .case-tile a {
    display: inline-block;
    padding: 10px 14px;
    background: #0078d7;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s;
    align-self: center;
  }

  .case-tile a:hover {
    background: #004578;
  }
</style>

# Case Studies & Real-Life Scenarios

<div class="case-tiles">

  <div class="case-tile">
    <h3>High Availability in Azure</h3>
    <p>How a retail company achieved 99.99% uptime during seasonal traffic spikes.</p>
    <a href="{{ "/case-studies/high-availability/" | relative_url }}">Read Case Study</a>
  </div>

  <div class="case-tile">
    <h3>Cost Optimization</h3>
    <p>How a startup reduced monthly cloud spend by 40% using Azure Cost Management.</p>
    <a href="{{ "/case-studies/cost-optimization/" | relative_url }}">Read Case Study</a>
  </div>

  <div class="case-tile">
    <h3>Incident Response with Observability</h3>
    <p>How a financial services app improved resolution time with Azure Monitor.</p>
    <a href="{{ "/case-studies/incident-response/" | relative_url }}">Read Case Study</a>
  </div>

</div>
