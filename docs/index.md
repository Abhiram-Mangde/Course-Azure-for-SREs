---
layout: page
title: Home
---

<style>
/* ============================= */
/* MS LEARN DESIGN SYSTEM */
/* ============================= */

:root {
  --ms-blue: #0078d4;
  --ms-dark: #323130;
  --ms-gray: #f3f2f1;
  --ms-border: #edebe9;
}

/* Page base */
.content {
  max-width: 960px;
}

/* Headings */
h1 {
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--ms-dark);
  margin-bottom: 16px;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--ms-dark);
  margin-top: 40px;
  border-bottom: 1px solid var(--ms-border);
  padding-bottom: 6px;
}

h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--ms-dark);
}

/* Intro callout (MS Learn style) */
.intro-box {
  background: var(--ms-gray);
  border-left: 4px solid var(--ms-blue);
  padding: 20px;
  margin: 24px 0;
  font-size: 1.05rem;
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
}

th, td {
  border: 1px solid var(--ms-border);
  padding: 12px;
  text-align: left;
}

th {
  background: var(--ms-gray);
  font-weight: 600;
}

/* Azure module cards */
.azure-tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.azure-tile {
  background: #ffffff;
  border: 1px solid var(--ms-border);
  border-radius: 4px;
  padding: 20px;
}

.azure-tile p {
  font-size: 0.95rem;
  color: #605e5c;
}

.azure-tile a {
  display: inline-block;
  margin-top: 10px;
  color: var(--ms-blue);
  font-weight: 600;
  text-decoration: none;
}

.azure-tile a:hover {
  text-decoration: underline;
}

/* CTA (Docs-style) */
.cta-box {
  background: var(--ms-gray);
  border: 1px solid var(--ms-border);
  padding: 24px;
  margin-top: 40px;
}

</style>

# Azure for SREs

<div class="intro-box">
A practical, real-world course designed to help you think like a Site Reliability Engineer (SRE) while working with Microsoft Azure.
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

## Course Roadmap

| Module | Focus Area |
|------|------------|
| 1️⃣ | Introduction to Azure & SRE |
| 2️⃣ | Core Azure Services for SREs |
| 3️⃣ | Observability & Monitoring |
| 4️⃣ | Keeping Systems Reliable |
| 5️⃣ | Automation & DevOps (Beginner Friendly) |
| 6️⃣ | Security & Cost Management |
| 7️⃣ | Hands-On Projects (Guided Labs) |
| 8️⃣ | Career Prep, Best Practices & Conclusion |

<div style="margin-top:16px;">
  <a href="{{ "/course" | relative_url }}" style="color:#0078d4; font-weight:600;">
    → Explore Full Course Page
  </a>
</div>

---

## Advanced Azure Topics

Explore Azure Services from an SRE Perspective

<div class="azure-tiles">

<div class="azure-tile">
<h3>Automation Account</h3>
<p>Automate operational tasks</p>
<a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Automation%20Account" target="_blank">
Open module
</a>
</div>

<div class="azure-tile">
<h3>Azure Entra ID</h3>
<p>Identity & access reliability</p>
<a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Entra%20Id" target="_blank">
Open module
</a>
</div>

<div class="azure-tile">
<h3>Azure Kubernetes Service</h3>
<p>Production-grade AKS</p>
<a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Kubernetes%20Service" target="_blank">
Open module
</a>
</div>

<div class="azure-tile">
<h3>Azure Monitor</h3>
<p>Observability & alerts</p>
<a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Monitor" target="_blank">
Open module
</a>
</div>

<div class="azure-tile">
<h3>Azure Virtual Machines</h3>
<p>Compute Services</p>
<a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Azure%20Virtual%20Machines" target="_blank">
Open module
</a>
</div>

</div>

<p style="margin-top:16px;">
📌 <em>Each module includes concepts, real-world scenarios, and hands-on labs.</em>
</p>

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
