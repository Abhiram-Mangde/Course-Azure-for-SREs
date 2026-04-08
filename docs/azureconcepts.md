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
  overflow: hidden;   /* prevents content from spilling out */
}

.concept-tile {
  border: 1px solid #edebe9;
  padding: 16px;
  background: #ffffff;
  overflow: hidden;   /* ensures children stay inside */
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

.concept-tile .mfa-diagram img {
  max-width: 100%;   /* ensures it never exceeds the card */
  height: auto;      /* keeps aspect ratio */
  display: block;
  margin: 0 auto;
  border-radius: 8px;
}

.mfa-diagram {
  border: 1px solid #edebe9;
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  margin: 20px auto;
  max-width: 700px;   /* keeps it contained */
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

.mfa-diagram img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 6px;
}


/* Mobile optimization */
@media (max-width: 768px) {
  .mfa-diagram img {
    width: 95%;
    margin: 10px auto;
  }

  .concept-tile {
    padding: 12px;
  }

  .concept-tile h3 {
    font-size: 1.1em;
  }
}

/* Small screens (phones) */
@media (max-width: 480px) {
  .mfa-diagram img {
    width: 100%;
  }

  .concept-tile {
    padding: 10px;
  }

  .concept-tile h3 {
    font-size: 1em;
  }
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