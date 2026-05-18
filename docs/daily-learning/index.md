---
layout: page
title: Daily Learning Journal
---

# Daily Learning Journal

Welcome to the daily learning hub for Azure for SREs. This page helps you track study sessions, hands-on notes, and follow-up actions.

> Tip: Add a new note after every learning session so progress stays visible and reviewable.

## Why keep a journal?

- Capture what you learned today
- Record commands, tools, and Azure resources used
- Note challenges and how you solved them
- Build a reliable learning habit

## How to add a note

1. Create a new file under `docs/daily-learning/`.
2. Use the date in the filename, for example: `2026-05-18-site-review.md`.
3. Follow the template in `entry-template.md`.
4. Keep the entry short, practical, and focused on what you learned.

## Journal entries

{% assign journal_entries = site.pages | where_exp: "entry", "entry.url contains '/daily-learning/' and entry.url != '/daily-learning/' and entry.url != '/daily-learning/entry-template/'" | sort: 'title' %}

{% for entry in journal_entries %}
- [{{ entry.title }}]({{ entry.url | relative_url }})
{% endfor %}
