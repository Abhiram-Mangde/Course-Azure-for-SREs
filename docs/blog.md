---
layout: page
title: Blog
---

<style>
  .blog-tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .blog-tile {
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

  .blog-tile:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }

  .blog-tile h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #0078d7;
  }

  .blog-tile p {
    font-size: 14px;
    color: #555;
    flex-grow: 1;
    margin-bottom: 15px;
  }

  .blog-tile a {
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

  .blog-tile a:hover {
    background: #004578;
  }
</style>

# Blog Articles

<div class="blog-tiles">

  <div class="blog-tile">
    <h3>Why SREs Need to Understand Networking</h3>
    <p>Networking is the backbone of reliability. Learn why every SRE must master it in Azure.</p>
    <a href="{{ "/blogs/sre-networking/" | relative_url }}">Read Blog</a>
  </div>

</div>
