---
layout: page
title: Important Concepts in Azure
permalink: /azureconcepts/
---

<style>
/* ============================= */
/* MS LEARN – AZURE CONCEPTS LIST */
/* ============================= */

.concept-tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 20px;
}

.concept-tile {
  border: 1px solid #edebe9;
  padding: 16px;
  background: #ffffff;
}

.concept-tile h3 {
  margin-top: 0;
}

.concept-tile a {
  color: #0078d4;
  font-weight: 600;
  text-decoration: none;
}

.concept-tile a:hover {
  text-decoration: underline;
}
</style>

# Important Concepts in Azure

<div class="concept-tiles">

{% assign concept_pages = site.pages | where_exp: "page", "page.path contains 'azureconcepts/'" %}
{% assign concept_pages = concept_pages | sort: "title" %}

{% for page in concept_pages %}
  {% unless page.url == "/azureconcepts/" %}
  <div class="concept-tile">
    <h3>{{ page.title }}</h3>

    <p>
      {% if page.description %}
        {{ page.description }}
      {% else %}
        {{ page.excerpt | strip_html | truncate: 120 }}
      {% endif %}
    </p>

    <a href="{{ page.url | relative_url }}">Learn more</a>
  </div>
  {% endunless %}
{% endfor %}

</div>