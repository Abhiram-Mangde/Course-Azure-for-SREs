---
layout: page
title: Home
---

<style>

/* ============================= */
/* MICROSOFT-STYLE LANDING PAGE */
/* ============================= */

:root {
  --ms-blue: #0078d4;
  --ms-dark: #323130;
  --ms-gray: #f3f2f1;
  --ms-border: #edebe9;
}

/* Global */
body {
  line-height: 1.6;
}

.content {
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
}

/* ============================= */
/* HERO SECTION */
/* ============================= */

.hero {
  background: linear-gradient(135deg, #0078d4 0%, #005a9e 100%);
  color: white;
  padding: 90px 50px;
  border-radius: 10px;
  margin-bottom: 70px;
  position: relative;
  overflow: hidden;
}

.hero::after {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  background: rgba(255,255,255,0.15);
  filter: blur(100px);
  top: -100px;
  right: -100px;
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: white;
}

.hero-sub {
  font-size: 1.2rem;
  max-width: 650px;
  margin-bottom: 30px;
  opacity: 0.95;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  background: white;
  color: #0078d4;
  padding: 12px 22px;
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
}

.btn-primary:hover {
  background: #f3f2f1;
}

.btn-secondary {
  border: 1px solid white;
  padding: 12px 22px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
}

/* ============================= */
/* SECTION STYLING */
/* ============================= */

.section {
  margin-bottom: 70px;
}

.section h2 {
  font-size: 1.6rem;
  border-bottom: 1px solid var(--ms-border);
  padding-bottom: 8px;
  margin-bottom: 20px;
}

.alt-section {
  background: #faf9f8;
  padding: 50px 40px;
  border-radius: 8px;
}

/* ============================= */
/* TABLES */
/* ============================= */

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  border: 1px solid var(--ms-border);
  padding: 12px;
  text-align: left;
}

th {
  background: var(--ms-gray);
}

/* ============================= */
/* CARDS */
/* ============================= */

.azure-tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 20px;
}

.azure-tile {
  background: white;
  border: 1px solid var(--ms-border);
  border-radius: 8px;
  padding: 24px;
  transition: all 0.25s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
}

.azure-tile:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  border-color: #d2d0ce;
}

.azure-tile h3 {
  margin-top: 0;
}

.azure-tile p {
  font-size: 0.95rem;
  color: #605e5c;
}

.azure-tile a {
  display: inline-block;
  margin-top: 12px;
  color: var(--ms-blue);
  font-weight: 600;
  text-decoration: none;
}

.azure-tile a:hover {
  text-decoration: underline;
}

/* ============================= */
/* CTA */
/* ============================= */

.cta-box {
  background: var(--ms-gray);
  border: 1px solid var(--ms-border);
  padding: 30px;
  border-radius: 8px;
}

/* ============================= */
/* ANIMATIONS */
/* ============================= */

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

<!-- HERO -->

<section class="hero fade-in">
  <h1>Azure for SREs</h1>
  <p class="hero-sub">
    Learn how to design Azure systems that survive failure.
    Think like a real-world Site Reliability Engineer.
  </p>

  <div class="hero-actions">
    <a href="{{ "/course" | relative_url }}" class="btn-primary">
      Start Learning
    </a>

    <a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs" class="btn-secondary">
      View on GitHub
    </a>
  </div>
</section>

<!-- WHY SECTION -->

<section class="section fade-in">
<h2>Why Azure for SREs?</h2>

Most courses teach <em>what Azure services do</em>.  
Most SRE content teaches <em>theory without context</em>.

<strong>This course combines both.</strong>

You’ll learn how systems fail in production, why they fail, and how SREs design Azure architectures that survive failure.

</section>

<!-- AUDIENCE -->

<section class="section alt-section fade-in">
<h2>Who Is This Course For?</h2>

| Role | What You’ll Gain |
|------|------------------|
| Beginners | Clear cloud & SRE fundamentals |
| Junior SREs | Real-world reliability patterns |
| DevOps Engineers | Azure + SRE skills combined |
| Students / Career Switchers | Hands-on job-ready experience |

</section>

<!-- ROADMAP -->

<section class="section fade-in">
<h2>Course Roadmap</h2>

| Module | Focus Area |
|------|------------|
| 1️⃣ | Introduction to Azure & SRE |
| 2️⃣ | Core Azure Services for SREs |
| 3️⃣ | Observability & Monitoring |
| 4️⃣ | Keeping Systems Reliable |
| 5️⃣ | Automation & DevOps |
| 6️⃣ | Security & Cost Management |
| 7️⃣ | Hands-On Projects |
| 8️⃣ | Career Prep & Best Practices |

</section>

<!-- SERVICES -->

<section class="section alt-section fade-in">
<h2>Advanced Azure Topics</h2>

<div class="azure-tiles">

<div class="azure-tile">
<h3>Azure Kubernetes Service</h3>
<p>Production-grade AKS reliability patterns</p>
<a href="{{ '/azureservices/Azure Kubernetes Service/' | relative_url }}">Open Module</a>
</div>

<div class="azure-tile">
<h3>Azure Monitor</h3>
<p>Observability & incident response</p>
<a href="{{ '/azureservices/Azure Monitor/' | relative_url }}">Open Module</a>
</div>

<div class="azure-tile">
<h3>Azure Entra ID</h3>
<p>Identity & access reliability</p>
<a href="{{ '/azureservices/Azure Entra Id/' | relative_url }}">Open Module</a>
</div>

<div class="azure-tile">
<h3>Azure Virtual Machines</h3>
<p>Compute resilience & scaling</p>
<a href="{{ '/azureservices/Azure Virtual Machines/' | relative_url }}">Open Module</a>
</div>

</div>

</section>

<!-- CTA -->

<section class="section fade-in">
<div class="cta-box">
<strong>How to Get Started</strong><br><br>
1️⃣ Start with <a href="https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/tree/main/Module-1-Introduction-to-Azure-SRE">Module 1 – Introduction</a><br>
2️⃣ Follow the roadmap step-by-step<br>
3️⃣ Build → Break → Fix → Learn
</div>
</section>

<script>
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});
</script>
