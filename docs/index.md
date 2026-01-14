---
layout: page
title: Home
---

<style>
  /* Global styles */
  body {
    font-family: "Segoe UI", Arial, sans-serif;
    line-height: 1.6;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: #eee;
    margin: 0;
    padding: 0;
    animation: fadeIn 1.2s ease-in-out;
  }

  h1 {
    color: #00c6ff;
    font-size: 42px;
    text-align: center;
    margin-top: 40px;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.4);
    animation: slideDown 1s ease;
  }

  h2 {
    color: #ffd700;
    margin-top: 30px;
    border-bottom: 2px solid #00c6ff;
    padding-bottom: 5px;
    animation: fadeInUp 1s ease;
  }

  h3 {
    color: #fff;
    margin-top: 20px;
  }

  /* Intro box */
  .intro-box {
    background: rgba(0, 198, 255, 0.1);
    border-left: 4px solid #00c6ff;
    padding: 20px;
    margin: 30px auto;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
    max-width: 800px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    animation: pulseGlow 3s infinite;
  }

  /* Roadmap table */
  .roadmap-table {
    width: 100%;
    border-collapse: collapse;
    margin: 30px 0;
    border-radius: 10px;
    overflow: hidden;
  }
  .roadmap-table th, .roadmap-table td {
    border: 1px solid #444;
    padding: 12px;
    text-align: center;
  }
  .roadmap-table th {
    background: #00c6ff;
    color: #fff;
    text-transform: uppercase;
  }
  .roadmap-table td {
    background: rgba(255,255,255,0.05);
    color: #eee;
  }
  .roadmap-table tr:hover td {
    background: rgba(0,198,255,0.2);
    transition: background 0.3s;
  }

  /* Azure tiles */
  .azure-tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 25px;
    margin-top: 30px;
  }

  .azure-tile {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 12px;
    padding: 25px;
    text-align: center;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .azure-tile::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0,198,255,0.2), transparent 70%);
    transform: rotate(45deg);
    transition: opacity 0.5s;
    opacity: 0;
  }

  .azure-tile:hover::before {
    opacity: 1;
  }

  .azure-tile:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 12px 30px rgba(0,198,255,0.3);
  }

  .azure-tile h3 {
    font-size: 26px;
    margin-bottom: 12px;
    color: #00c6ff;
  }

  .azure-tile p {
    font-size: 15px;
    color: #ccc;
    margin-bottom: 20px;
  }

  .azure-tile a {
    display: inline-block;
    padding: 10px 16px;
    background: linear-gradient(135deg, #00c6ff, #0078d7);
    color: #fff;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s, transform 0.3s;
  }

  .azure-tile a:hover {
    background: linear-gradient(135deg, #0078d7, #004578);
    transform: scale(1.05);
  }

  /* CTA box */
  .cta-box {
    background: linear-gradient(135deg, #0078d7, #00c6ff);
    color: #fff;
    padding: 25px;
    text-align: center;
    margin-top: 50px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
    animation: fadeInUp 1.2s ease;
  }

  .cta-box a {
    color: #ffd700;
    font-weight: bold;
    text-decoration: none;
  }

  .cta-box a:hover {
    text-decoration: underline;
  }

  /* Animations */
  @keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  @keyframes slideDown {
    from {transform: translateY(-30px); opacity: 0;}
    to {transform: translateY(0); opacity: 1;}
  }

  @keyframes fadeInUp {
    from {transform: translateY(30px); opacity: 0;}
    to {transform: translateY(0); opacity: 1;}
  }

  @keyframes pulseGlow {
    0% {box-shadow: 0 0 15px rgba(0,198,255,0.4);}
    50% {box-shadow: 0 0 30px rgba(0,198,255,0.8);}
    100% {box-shadow: 0 0 15px rgba(0,198,255,0.4);}
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
