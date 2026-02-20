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

{% assign blog_pages = site.pages | where_exp: "page", "page.path contains 'blogs/'" %}
{% assign blog_pages = blog_pages | sort: "date" | reverse %}

{% for page in blog_pages %}
  <div class="blog-tile">
    <h3>{{ page.title }}</h3>

    <p>
      {% if page.description %}
        {{ page.description }}
      {% else %}
        {{ page.excerpt | strip_html | truncate: 120 }}
      {% endif %}
    </p>

    <a href="{{ page.url | relative_url }}">Read article</a>
  </div>
{% endfor %}

</div>