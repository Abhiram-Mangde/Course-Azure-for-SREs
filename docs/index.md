---
layout: page
title: Home
---

<style>
  body {
    font-family: "Segoe UI", Arial, sans-serif;
    line-height: 1.6;
    background: #f9f9f9;
    color: #333;
  }

  h1 {
    color: #0078d7;
    font-size: 36px;
    text-align: center;
    margin-top: 20px;
  }

  h2 {
    color: #004578;
    margin-top: 30px;
    border-bottom: 2px solid #0078d7;
    padding-bottom: 5px;
  }

  h3 {
    color: #444;
    margin-top: 20px;
  }

  .intro-box {
    background: #e6f2ff;
    border-left: 4px solid #0078d7;
    padding: 15px;
    margin: 20px 0;
    border-radius: 6px;
    text-align: center;
    font-size: 18px;
  }

  .roadmap-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  .roadmap-table th, .roadmap-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  .roadmap-table th {
    background: #0078d7;
    color: #fff;
  }
  .roadmap-table td {
    background: #f0f8ff;
  }

  .azure-tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .azure-tile {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
    position: relative;
  }

  .azure-tile:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }

  .azure-tile h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .azure-tile p {
    font-size: 14px;
    color: #555;
    margin-bottom: 15px;
  }

  .azure-tile a {
    display: inline-block;
    padding: 8px 12px;
    background: #0078d7;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s;
  }

  .azure-tile a:hover {
    background: #004578;
  }

  .cta-box {
    background: #0078d7;
    color: #fff;
    padding: 20px;
    text-align: center;
    margin-top: 40px;
    border-radius: 6px;
  }

  .cta-box a {
    color: #ffd700;
    font-weight: bold;
    text-decoration: none;
  }

  .cta-box a:hover {
    text-decoration: underline;
  }
</style>

# Azure for SREs  
### *Build • Operate • Scale Reliable Systems on Microsoft Azure*

<div class="intro-box">
A **practical, real-world course** designed to help you think like a **Site Reliability Engineer (SRE)** while working with **Microsoft Azure**.
</div>

---

## Why Azure for SREs?
Most courses teach *what Azure services do*.  
Most SRE content teaches *theory without context*.  

**This course combines both.**

You will learn **how systems fail in production**, **why they fail**, and **how SREs design Azure architectures that survive failure**.

---

## Who Is This Course For?

| Role | What You’ll Gain |
|------|------------------|
| Beginners | Clear cloud & SRE fundamentals |
| Junior SREs | Real-world reliability patterns |
| DevOps Engineers | Azure + SRE skills combined |
| Students / Career Switchers | Hands-on, job-ready experience |

---

## What You’ll Learn
- **SRE fundamentals applied to Azure**
- **Reliability & Scaling patterns**
- **Monitoring, Alerting & Incident Response**
- **Infrastructure as Code**
- **Real-world Case Studies, failures & recovery scenarios**

---

## 🗺️ Course Roadmap

<table class="roadmap-table">
<tr><th>Module</th><th>Focus Area</th></tr>
<tr><td>1️⃣</td><td>Introduction to Azure & SRE</td></tr>
<tr><td>2️⃣</td><td>Core Azure Services for SREs</td></tr>
<tr><td>3️⃣</td><td>Observability & Monitoring</td></tr>
<tr><td>4️⃣</td><td>Keeping Systems Reliable</td></tr>
<tr><td>5️⃣</td><td>Automation & DevOps (Beginner Friendly)</td></tr>
<tr><td>6️⃣</td><td>Security & Cost Management</td></tr>
<tr><td>7️⃣</td><td>Hands-On Projects (Guided Labs)</td></tr>
<tr><td>8️⃣</td><td>Career Prep, Best Practices & Conclusion</td></tr>
</table>

---

<div style="text-align:center; margin-top:20px;"> <a href="{{ "/course" | relative_url }}" style="display:inline-block; padding:12px 20px; background:#0078d7; color:#fff; border-radius:6px; text-decoration:none; font-weight:bold;"> Explore Full Course Page </a> </div>

## Advanced Azure Topics

Explore Azure Services from an SRE Perspective

<div class="azure-tiles">

  <div class="azure-tile">
    <h3>⚙️ Automation Account</h3>
    <p>Automate operational tasks</p>
    <a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Automation%20Account" target="_blank">Open Module</a>
  </div>

  <div class="azure-tile">
    <h3>🔐 Azure Entra ID</h3>
    <p>Identity & access reliability</p>
    <a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Entra%20Id" target="_blank">Open Module</a>
  </div>

  <div class="azure-tile">
    <h3>☸️ Azure Kubernetes Service</h3>
    <p>Production-grade AKS</p>
    <a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Kubernetes%20Service" target="_blank">Open Module</a>
  </div>

  <div class="azure-tile">
    <h3>📈 Azure Monitor</h3>
    <p>Observability & alerts</p>
    <a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Monitor" target="_blank">Open Module</a>
  </div>

  <div class="azure-tile">
    <h3>💻 Azure Virtual Machines</h3>
    <p>Compute Services</p>
    <a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Virtual%20Machines" target="_blank">Open Module</a>
  </div>

</div>

<p style="margin-top: 20px;">📌 <em>Each module includes concepts, real-world scenarios, and hands-on labs.</em></p>

---

## Learn by Doing
This course focuses heavily on **practice over theory**:
- Guided hands-on labs  
- Failure simulations  
- Incident-style troubleshooting  
- Reliability-first architecture design  

---

## Community & Collaboration
- Ask questions in **[GitHub Discussions](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/discussions)**
- Participate in incident simulations
- Learn from real-world experiences
- Contribute via **[Contributing Guidelines](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/blob/main/CONTRIBUTING.md)**

---

<div class="cta-box">
  <strong>How to Get Started</strong><br><br>
  1️⃣ Start with <a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Module-1-Introduction-to-Azure-SRE">Module 1 – Introduction to Azure & SRE</a><br>
  2️⃣ Follow the roadmap step-by-step<br>
  3️⃣ Join Discussions and ask questions<br>
  4️⃣ Build → Break → Fix → Learn
</div>

---

## Support the Project
If this course helps you:
- ⭐ Star the repository  
- 🍴 Fork it  
- 💬 Share feedback  

Together, let’s build **reliable cloud systems**
