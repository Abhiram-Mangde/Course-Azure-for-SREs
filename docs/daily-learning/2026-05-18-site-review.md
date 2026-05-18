---
layout: page
title: 2026-05-18 | Site Review & Journal Setup
author: Azure for SREs
---

## Date

May 18, 2026

## Topic

Repository review, site audit, and daily learning journal implementation.

## Overview

Today I reviewed the Azure for SREs documentation site and added a dedicated daily learning journal section.

## Key learnings

- The course site runs from `docs/` and uses a Jekyll/Markdown site structure.
- Course content is split across modules, blogs, Azure service pages, and case studies.
- A new daily journal makes it easier to add study notes consistently.

## Commands / Tools used

- `git clone https://github.com/Abhiram-Mangde/Course-Azure-for-SREs.git`
- `docs/_includes/header.html`
- `docs/index.md`

## Challenges & Solutions

- Challenge: Needed a clear place for daily notes.
- Solution: Added `docs/daily-learning/` with an index, template, and sample note.

## Next steps

- Add more journal entries after each learning session.
- Improve homepage visibility for daily learning notes.
- Strengthen CI checks and deployment automation.
