---
layout: page
title: Blog
permalink: /blogs/
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

{% assign blog_pages = site.pages | where: "dir", "/blogs/" %}
{% assign blog_pages = blog_pages | sort: "date" | reverse %}

{% for post in blog_pages %}
  <div class="blog-tile">
    <h3>{{ post.title }}</h3>

    <p>
      {% if post.description %}
        {{ post.description }}
      {% else %}
        {{ post.excerpt | strip_html | truncate: 120 }}
      {% endif %}
    </p>

    <a href="{{ post.url | relative_url }}">Read article</a>
  </div>
{% endfor %}

</div>