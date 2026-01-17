---
layout: page
title: Blog
permalink: /blog/
---

<style>
/* ============================= */
/* MS LEARN – BLOG LIST */
/* ============================= */

.blog-tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.blog-tile {
  border: 1px solid #edebe9;
  padding: 16px;
  background: #ffffff;
}

.blog-tile h3 {
  margin-top: 0;
}

.blog-tile a {
  color: #0078d4;
  font-weight: 600;
  text-decoration: none;
}

.blog-tile a:hover {
  text-decoration: underline;
}
</style>

# Blog Articles

<div class="blog-tiles">

<div class="blog-tile">
<h3>Why SREs Need to Understand Networking</h3>
<p>Networking is the backbone of reliability. Learn why every SRE must master it in Azure.</p>
<a href="{{ "/blogs/SREBlogs/" | relative_url }}">Read article</a>
</div>

<div class="blog-tile">
<h3>Why SRE, PowerShell, and AI Integration is the Future of IT Operations</h3>
<p>How PowerShell and AI are transforming reliability engineering and automation.</p>
<a href="{{ "/blogs/PowerShellBlogs/" | relative_url }}">Read article</a>
</div>

</div>
