---
layout: page
title: Course
permalink: /course/
---

<style>
/* ============================= */
/* MS LEARN – COURSE PAGE */
/* ============================= */

:root {
  --ms-blue: #0078d4;
  --ms-dark: #323130;
  --ms-gray: #f3f2f1;
  --ms-border: #edebe9;
}

/* Limit readable width like Microsoft Learn */
.content {
  max-width: 960px;
}

/* Section headings */
h1, h2, h3 {
  color: var(--ms-dark);
  font-weight: 600;
}

h2 {
  border-bottom: 1px solid var(--ms-border);
  padding-bottom: 6px;
  margin-top: 40px;
}

/* Docs-style callout */
.course-callout {
  background: var(--ms-gray);
  border-left: 4px solid var(--ms-blue);
  padding: 20px;
  margin: 20px 0;
}

/* Module navigation cards (flat, docs-style) */
.course-tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.course-tile {
  border: 1px solid var(--ms-border);
  padding: 16px;
  background: #ffffff;
}

.course-tile h3 {
  margin-top: 0;
}

.course-tile a {
  color: var(--ms-blue);
  font-weight: 600;
  text-decoration: none;
}

.course-tile a:hover {
  text-decoration: underline;
}
</style>

# Course Overview

<div class="course-callout">
This comprehensive course is designed for aspiring and junior Site Reliability Engineers (SREs) who want to master Microsoft Azure fundamentals and SRE best practices.
</div>

Through hands-on labs, real-world projects, and practical demos, learners will gain the skills needed to build, monitor, automate, and secure cloud-native systems on Azure.

- [Discussion and Challenges Board](https://github.com/Abhiram-Mangde/Course-Azure-for-SREs/discussions)

---

## Who Should Take This Course?
- **Beginners** interested in cloud computing and Azure
- **Junior SREs, DevOps engineers, and IT professionals**
- **Students and career changers** seeking hands-on Azure experience

---

## Prerequisites
- No prior cloud or SRE experience required
- Optional: Familiarity with IT concepts or programming

---

## Learning Objectives
By the end of this course, you will be able to:
- Understand core Azure services and SRE principles
- Deploy, monitor, and manage resources in Azure
- Automate infrastructure and application deployments
- Implement security and cost management best practices
- Build portfolio-ready projects for interviews and career growth
- Advance Topics: Details about each Service in Azure

---

## Course Structure
The course is divided into modules, each with beginner-friendly explanations, hands-on labs, demo ideas, and assessment suggestions.

---

## Course Modules

<div class="course-tiles">

<div class="course-tile">
<h3>Module 1</h3>
<p>Introduction to Azure & SRE</p>
<a href="{{ "/Module-1-Introduction-to-Azure-SRE/" | relative_url }}">Open module</a>
</div>

<div class="course-tile">
<h3>Module 2</h3>
<p>Core Azure Services for SREs</p>
<a href="{{ "/Module-2-Core-Azure-Services/" | relative_url }}">Open module</a>
</div>

<div class="course-tile">
<h3>Module 3</h3>
<p>Observability & Monitoring</p>
<a href="{{ "/Module-3-Observability-Monitoring/" | relative_url }}">Open module</a>
</div>

<div class="course-tile">
<h3>Module 4</h3>
<p>Keeping Systems Reliable</p>
<a href="{{ "/Module-4-Keeping-Systems-Reliable/" | relative_url }}">Open module</a>
</div>

<div class="course-tile">
<h3>Module 5</h3>
<p>Automation & DevOps</p>
<a href="{{ "/Module-5-Automation-DevOps/" | relative_url }}">Open module</a>
</div>

<div class="course-tile">
<h3>Module 6</h3>
<p>Security & Cost Management</p>
<a href="{{ "/Module-6-Security-Cost-Management/" | relative_url }}">Open module</a>
</div>

<div class="course-tile">
<h3>Module 7</h3>
<p>Hands-On Projects</p>
<a href="{{ "/Module-7-Hands-On-Project/" | relative_url }}">Open module</a>
</div>

<div class="course-tile">
<h3>Module 8</h3>
<p>Career Prep & Best Practices</p>
<a href="{{ "/Module-8-Career-Prep-Best-Practices/" | relative_url }}">Open module</a>
</div>

</div>
