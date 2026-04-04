---
layout: page
title: Case Studies
permalink: /casestudy/
---

<style>
.case-tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.case-tile {
  border: 1px solid #edebe9;
  padding: 16px;
  background: #ffffff;
}

.case-tile h3 {
  margin-top: 0;
}

.case-tile a {
  color: #0078d4;
  font-weight: 600;
  text-decoration: none;
}

.case-tile a:hover {
  text-decoration: underline;
}
</style>

# Case Studies & Real-Life Scenarios

<div class="case-tiles">

{% assign case_pages = site.pages | where_exp: "page", "page.path contains 'casestudy/'" %}
{% assign case_pages = case_pages | sort: "date" | reverse %}

{% for page in case_pages %}
  {% unless page.url == "/casestudy/" %}
  <div class="case-tile">
    <h3>{{ page.title }}</h3>

    <p>
      {% if page.description %}
        {{ page.description }}
      {% else %}
        {{ page.excerpt | strip_html | truncate: 120 }}
      {% endif %}
    </p>

    <a href="{{ page.url | relative_url }}">Read case study</a>
  </div>
  {% endunless %}
{% endfor %}

</div>