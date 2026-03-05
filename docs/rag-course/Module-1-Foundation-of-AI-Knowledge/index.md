---
layout: page
title: Module 1 - Foundation of AI Knowledge
permalink: /rag-course/Module-1-Foundation-of-AI-Knowledge
---

# Foundations of AI Knowledge
## Learning Objectives

By the end of this module you will understand:

* What **knowledge** means in computer systems
* The difference between **data, information, and knowledge**
* How machines store and retrieve knowledge
* Why traditional systems struggle with unstructured knowledge
* Why modern AI systems require new approaches

This module builds the **conceptual foundation** required to understand Retrieval-Augmented Generation.

## 1. What is Knowledge?
Before learning RAG, we must first understand **what knowledge means in computing systems**. In simple terms:
```
Data → Raw facts
Information → Organized data
Knowledge → Meaningful understanding
```

*Example:*

**Data:**
```
Paris
France
Capital
```

**Information:**
`Paris is the capital of France.`

**Knowledge:**
`Understanding that Paris functions as the political center of France.`

> Machines must transform **raw data into usable knowledge**.


## 2. Types of Knowledge in Computer Systems
There are two major categories of knowledge.

### Structured Knowledge
Structured knowledge is organized in a predefined format.

*Examples:*
* Databases
* Tables
* Spreadsheets

**Example database table:**

| Country | Capital |
| ------- | ------- |
| France  | Paris   |
| Japan   | Tokyo   |

This type of knowledge is easy for computers to query.

*Example query:*
```sql
SELECT capital FROM countries WHERE country = 'France'
```

The system returns:
`Paris`

> Structured data is **easy to search but limited in flexibility**.

---

### Unstructured Knowledge

Most real-world knowledge is **unstructured**.

*Examples:*
* Books
* Research papers
* PDFs
* Emails
* Documentation
* Websites

*Example paragraph:*
```
Paris has served as the capital city of France since the 10th century and remains the country's political and cultural center.
```

> Unlike structured data, this information **cannot be easily queried using SQL**. This creates a major challenge.

## 3. The Knowledge Retrieval Problem
If knowledge is stored as unstructured text, how do we retrieve it? Traditional search systems rely on **keyword matching**.

*Example query:*
`capital of france`

A traditional search system scans documents and finds those containing the same words. This approach is used by many search engines including early versions of **Google**. However, keyword search has limitations.

*Example:*

**Query:** `What city governs France?`

> A keyword system might fail because the words **"capital"** and **"governs"** are different. Humans understand the meaning. Machines struggle.


## 4. Semantic Understanding
Humans understand **meaning**, not just words.

*Example:*
`capital of france` and `which city governs france`

These sentences have **different words but identical meaning**. Traditional search systems cannot easily recognize this relationship. Modern AI systems solve this using **semantic representations**. These representations allow machines to understand **meaning instead of keywords**.

> This idea is the foundation for modern AI search systems.

## 5. Knowledge Systems
A complete knowledge system has three components:
- Storage
- Retrieval
- Reasoning

*Example:*

- **Storage** → documents, databases, knowledge bases
- **Retrieval** → search systems that find relevant information
- **Reasoning** → systems that interpret and explain knowledge

> Traditional systems separate these components. Modern AI systems combine them.

## 6. The Rise of AI Knowledge Systems
Modern AI models can now reason over text. Examples include large language models such as:
* GPT-4
* Claude 3
* Llama 3

**These models can:**
* summarize documents
* answer questions
* generate explanations
* analyze information

> However, they have a major limitation. They **do not have direct access to external knowledge sources**. Understanding this limitation will lead us directly to the concept of RAG.


## 7. Key Takeaways
Important ideas from this module:

* Knowledge systems must **store, retrieve, and reason over information**
* Most real-world knowledge is **unstructured**
* Traditional keyword search struggles with **semantic meaning**
* Modern AI systems attempt to understand **meaning rather than words**
* Large language models introduce new capabilities but also new challenges

These challenges lead directly to the need for **Retrieval-Augmented Generation**.

## Next Module

In the next module we will explore **how large language models work internally**.
Understanding how models like **GPT-4** generate language will help explain **why they need retrieval systems to access knowledge**.
