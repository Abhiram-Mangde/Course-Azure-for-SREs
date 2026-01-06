---
layout: page
title: Course
---

<style>
  .course-tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  .course-tile {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
  }
  .course-tile:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  .course-tile h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #0078d7;
  }
  .course-tile p {
    font-size: 14px;
    color: #555;
    margin-bottom: 15px;
  }
  .course-tile a {
    display: inline-block;
    padding: 8px 12px;
    background: #0078d7;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s;
  }
  .course-tile a:hover {
    background: #004578;
  }
</style>

# Course Modules

<div class="course-tiles">

  <div class="course-tile">
    <h3>Module 1</h3>
    <p>Introduction to Azure & SRE</p>
    <a href="{{ "/Module-1-Introduction-to-Azure-SRE" | relative_url }}">Open Module</a>
  </div>

  <div class="course-tile">
    <h3>Module 2</h3>
    <p>Core Azure Services for SREs</p>
    <a href="{{ "/Module-2-Core-Azure-Services" | relative_url }}">Open Module</a>
  </div>

  <div class="course-tile">
    <h3>Module 3</h3>
    <p>Observability & Monitoring</p>
    <a href="{{ "/Module-3-Observability-Monitoring" | relative_url }}">Open Module</a>
  </div>

   <div class="course-tile">
    <h3>Module 4</h3>
    <p>Keeping Systems Reliable</p>
    <a href="{{ "/Module-4-Keeping-Systems-Reliable" | relative_url }}">Open Module</a>
  </div>

  <div class="course-tile">
    <h3>Module 5</h3>
    <p>Keeping Systems Reliable</p>
    <a href="{{ "/Module-5-Automation-DevOps" | relative_url }}">Open Module</a>
  </div>

  <div class="course-tile">
    <h3>Module 6</h3>
    <p>Keeping Systems Reliable</p>
    <a href="{{ "/Module-6-Security-Cost-Management" | relative_url }}">Open Module</a>
  </div>

  <div class="course-tile">
    <h3>Module 7</h3>
    <p>Keeping Systems Reliable</p>
    <a href="{{ "/Module-7-Hands-On-Project" | relative_url }}">Open Module</a>
  </div>

  <div class="course-tile">
    <h3>Module 8</h3>
    <p>Career Preparation Best Practices</p>
    <a href="{{ "/Module-8-Career-Prep-Best-Practices" | relative_url }}">Open Module</a>
  </div>
  
</div>
