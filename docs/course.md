---
layout: page
title: Course
permalink: /course/
---

<style>
:root {
  --ms-blue: #0078d4;
  --ms-dark: #323130;
  --ms-gray: #f3f2f1;
  --ms-border: #edebe9;
}

/* Headings */
h1, h2, h3 {
  color: var(--ms-dark);
  font-weight: 600;
}

h2 {
  border-bottom: 1px solid var(--ms-border);
  padding-bottom: 6px;
  margin-top: 40px;
}

/* Callout */
.course-callout {
  background: var(--ms-gray);
  border-left: 4px solid var(--ms-blue);
  padding: 20px;
  margin: 20px 0;
}

/* Course selector cards */
.course-selector {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.course-card {
  border: 1px solid var(--ms-border);
  padding: 24px;
  background: #ffffff;
  cursor: pointer;
  transition: border 0.2s ease, box-shadow 0.2s ease;
}

.course-card:hover {
  border-color: var(--ms-blue);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

/* Module tiles */
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

.course-tile a {
  color: var(--ms-blue);
  font-weight: 600;
  text-decoration: none;
}

.course-tile a:hover {
  text-decoration: underline;
}

/* Hide / show */
.hidden {
  display: none;
}
</style>

# Course Overview

<div class="course-callout">
This repository provides structured, hands-on learning paths for
Site Reliability Engineering and Kusto Query Language on Azure.
</div>

---

## Select a Course

<div class="course-selector">

  <div class="course-card" onclick="showCourse('sre')">
    <h3>🧑‍💻 Azure SRE Course</h3>
    <p>
      Learn Azure fundamentals, SRE principles, observability,
      automation, security, and real-world reliability practices.
    </p>
  </div>

  <div class="course-card" onclick="showCourse('kql')">
    <h3>📊 KQL for Observability</h3>
    <p>
      Learn Kusto Query Language for logs, metrics,
      time-series analysis, alerts, and incident response.
    </p>
  </div>

  <div class="course-card" onclick="showCourse('dtdl')">
  <h3>🏗️ Azure Digital Twins & DTDL</h3>
  <p>
    Learn Digital Twin modeling, DTDL architecture, graph relationships,
    and production-ready system modeling from beginner to architect level.
  </p>
  </div>

  <div class="course-card" onclick="showCourse('rag')">
  <h3>🤖 Retrieval Augmented Generation (RAG)</h3>
  <p>
    Learn how modern AI assistants work by combining LLMs with
    external knowledge. Build RAG systems from fundamentals to
    production-ready architectures.
  </p>
  </div>

</div>

---

<!-- ================= SRE COURSE ================= -->

<div id="sre-course" class="hidden">

<h2>Azure SRE — Course Modules</h2>

<div class="course-tiles">

  <div class="course-tile">
    <h3>Module 1</h3>
    <p>Introduction to Azure & SRE</p>
    <a href="{{ "/sre-course/Module-1-Introduction-to-Azure-SRE/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 2</h3>
    <p>Core Azure Services</p>
    <a href="{{ "/sre-course/Module-2-Core-Azure-Services/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 3</h3>
    <p>Observability & Monitoring</p>
    <a href="{{ "/sre-course/Module-3-Observability-Monitoring/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 4</h3>
    <p>Keeping Systems Reliable</p>
    <a href="{{ "/sre-course/Module-4-Keeping-Systems-Reliable/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 5</h3>
    <p>Automation & DevOps</p>
    <a href="{{ "/sre-course/Module-5-Automation-DevOps/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 6</h3>
    <p>Security & Cost Management</p>
    <a href="{{ "/sre-course/Module-6-Security-Cost-Management/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 7</h3>
    <p>Hands-On Projects</p>
    <a href="{{ "/sre-course/Module-7-Hands-On-Project/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 8</h3>
    <p>Career Prep & Best Practices</p>
    <a href="{{ "/sre-course/Module-8-Career-Prep-Best-Practices/" | relative_url }}">Open module</a>
  </div>

</div>
</div>

<!-- ================= KQL COURSE ================= -->

<div id="kql-course" class="hidden">

<h2>KQL for Observability — Course Modules</h2>

<div class="course-tiles">

  <div class="course-tile">
    <h3>Module 1</h3>
    <p>KQL Fundamentals</p>
    <a href="{{ "/kql-course/Module-1-Introduction-To-Kql/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 2</h3>
    <p>Data Model & Types</p>
    <a href="{{ "/kql-course/Module-2-data-model/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 3</h3>
    <p>Filtering & Projection</p>
    <a href="{{ "/kql-course/Module-3-filtering/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 4</h3>
    <p>Aggregation & Summarization</p>
    <a href="{{ "/kql-course/Module-4-aggregation/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 5</h3>
    <p>Time-Series Analysis</p>
    <a href="{{ "/kql-course/Module-5-time-series/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 6</h3>
    <p>Joins & Parsing</p>
    <a href="{{ "/kql-course/Module-6-joins-parsing/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 7</h3>
    <p>Visualization & Alerts</p>
    <a href="{{ "/kql-course/Module-7-visualization/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 8</h3>
    <p>Advanced KQL & Labs</p>
    <a href="{{ "/kql-course/Module-8-advanced/" | relative_url }}">Open module</a>
  </div>

</div>
</div>

<!-- ================= DTDL COURSE ================= -->

<div id="dtdl-course" class="hidden">

<h2>Azure Digital Twins & DTDL — Course Modules</h2>

<div class="course-tiles">

  <div class="course-tile">
    <h3>Module 1</h3>
    <p>Digital Twin Thinking & Architecture</p>
    <a href="{{ "/dtdl-course/Module-1-Digital-Twin-Thinking/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 2</h3>
    <p>DTDL Fundamentals & Structure</p>
    <a href="{{ "/dtdl-course/Module-2-DTDL-Fundamentals/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 3</h3>
    <p>Properties vs Telemetry Deep Dive</p>
    <a href="{{ "/dtdl-course/Module-3-Properties-Telemetry/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 4</h3>
    <p>Relationships & Graph Modeling</p>
    <a href="{{ "/dtdl-course/Module-4-Relationships-Graph/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 5</h3>
    <p>Inheritance, Components & Advanced Modeling</p>
    <a href="{{ "/dtdl-course/Module-5-Advanced-Modeling/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 6</h3>
    <p>Schema Types, Enums & Complex Models</p>
    <a href="{{ "/dtdl-course/Module-6-Schemas-DeepDive/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 7</h3>
    <p>Real-World Smart Factory Case Study</p>
    <a href="{{ "/dtdl-course/Module-7-Case-Study/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 8</h3>
    <p>Production Best Practices & Architecture Patterns</p>
    <a href="{{ "/dtdl-course/Module-8-Best-Practices/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 9</h3>
    <p>Hands-On Labs & Model Deployment</p>
    <a href="{{ "/dtdl-course/Module-9-Hands-On-Labs/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 10</h3>
    <p>Capstone Project & Interview Prep</p>
    <a href="{{ "/dtdl-course/Module-10-Capstone/" | relative_url }}">Open module</a>
  </div>

</div>
</div>

<!-- ================= RAG COURSE ================= -->

<div id="rag-course" class="hidden">

<h2>Retrieval Augmented Generation (RAG) — Course Modules</h2>

<div class="course-tiles">

  <div class="course-tile">
    <h3>Module 1</h3>
    <p>Introduction to Retrieval Augmented Generation</p>
    <a href="{{ "/rag-course/Module-1-Introduction-to-RAG/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 2</h3>
    <p>Language Models and Their Limitations</p>
    <a href="{{ "/rag-course/Module-2-Language-Models-and-Limitations/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 3</h3>
    <p>The Knowledge Retrieval Problem</p>
    <a href="{{ "/rag-course/Module-3-Knowledge-Retrieval-Problem/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 4</h3>
    <p>Embeddings and Vector Representations</p>
    <a href="{{ "/rag-course/Module-4-Embeddings/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 5</h3>
    <p>Vector Similarity and Search</p>
    <a href="{{ "/rag-course/Module-5-Vector-Similarity/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 6</h3>
    <p>Vector Databases</p>
    <a href="{{ "/rag-course/Module-6-Vector-Databases/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 7</h3>
    <p>Chunking Strategies for Documents</p>
    <a href="{{ "/rag-course/Module-7-Chunking-Strategies/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 8</h3>
    <p>RAG Architecture</p>
    <a href="{{ "/rag-course/Module-8-RAG-Architecture/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 9</h3>
    <p>Building a Basic RAG System</p>
    <a href="{{ "/rag-course/Module-9-Basic-RAG-System/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 10</h3>
    <p>Advanced RAG Techniques</p>
    <a href="{{ "/rag-course/Module-10-Advanced-RAG-Techniques/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 11</h3>
    <p>Building Production RAG Systems</p>
    <a href="{{ "/rag-course/Module-11-Building-Production-RAG-System/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 12</h3>
    <p>Evaluating and Improving RAG Systems</p>
    <a href="{{ "/rag-course/Module-12-Evaluating-and-Improving-RAG-Systems/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 13</h3>
    <p>Industry RAG Architectures and Design Patterns</p>
    <a href="{{ "/rag-course/Module-13-Industry-RAG-Architectures/" | relative_url }}">Open module</a>
  </div>

  <div class="course-tile">
    <h3>Module 14</h3>
    <p>End-to-End RAG Project</p>
    <a href="{{ "/rag-course/Module-14-End-to-End-RAG-Project/" | relative_url }}">Open module</a>
  </div>

</div>
</div>

<script>
function showCourse(course) {
  document.getElementById('sre-course').classList.add('hidden');
  document.getElementById('kql-course').classList.add('hidden');
  document.getElementById('dtdl-course').classList.add('hidden');
  document.getElementById('rag-course').classList.add('hidden');

  document.getElementById(course + '-course').classList.remove('hidden');
}
</script>

