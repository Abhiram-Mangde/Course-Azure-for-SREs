---
layout: default
title: Blogs
---

# Blogs

{% assign blog_pages = site.pages | where_exp: "page", "page.path contains 'blogs/' and page.name != 'index.md'" | sort: "date" | reverse %}

<ul>
{% for page in blog_pages %}
  <li>
    <a href="{{ page.url }}">{{ page.title }}</a>
    <small> - {{ page.date | date: "%B %d, %Y" }}</small>
  </li>
{% endfor %}
</ul>