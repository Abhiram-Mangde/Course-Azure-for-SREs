---
layout: page
title: Module 4 - Embeddings and Vector Representations
permalink: /rag-course/Module-4-Embeddings-and-Vector-Representations/
---

# Embeddings and Vector Representations
## Learning Objectives
By the end of this module you will understand:
* What embeddings are and why they are important
* Why machines must convert text into numbers
* How embeddings capture **semantic meaning**
* How similar meanings are placed **closer together in vector space**
* Why embeddings are the foundation of **modern retrieval systems and RAG**

In the previous module we learned that traditional keyword search fails because it relies on **exact words instead of meaning**. To solve this problem, machines must represent text in a way that **captures semantic meaning**. This is where **embeddings** come in.

## 1. Why Computers Need Numbers
Computers cannot directly understand text.
Humans see:
```
"The product can be returned within 15 days."
```

But computers process information using **numbers**. For a machine to analyze language, the sentence must first be converted into a **numerical representation**. This numerical representation is called an **embedding**.

## 2. What is an Embedding?
An **embedding** is a list of numbers that represents the **meaning of text**.

Example sentence:

```

Return the product within 15 days

```

An embedding might look like:

```

[0.12, -0.44, 0.91, 0.33, -0.72, ...]

```

This list may contain **hundreds or even thousands of numbers**.

Each number captures a tiny part of the sentence's meaning.

Together they represent the **semantic meaning of the text**.

---

# 3. From Words to Vectors

An embedding is also called a **vector**.

A vector is simply a list of numbers representing a point in space.

Example vector:

```

[0.2, 0.8]

```

This represents a point in **2-dimensional space**.

Real embeddings often exist in **hundreds or thousands of dimensions**.

Example:

```

[0.21, -0.44, 0.77, 0.13, ... up to 1536 numbers]

```

Each text sentence becomes a **point in a high-dimensional space**.

This space is often called **vector space**.

---

# 4. Meaning Becomes Distance

The key idea behind embeddings is:

```

Texts with similar meanings are located close together in vector space.

```

Example sentences:

Sentence A

```

You can return the product within 15 days.

```

Sentence B

```

Items can be sent back within two weeks.

```

Even though the wording is different, the meaning is similar.

Their embeddings will therefore be **close together in vector space**.

Another sentence:

Sentence C

```

The weather today is sunny.

```

This sentence has a completely different meaning.

Its embedding will be **far away** from the first two sentences.

---

# 5. Visualizing Vector Space (Simplified)

Imagine a simple 2D map.

```

```
    Weather
       *
       
       
```

Return policy *

Send back item *

```

Points that represent **similar meaning cluster together**.

Points representing **different topics appear far apart**.

Real systems operate in **hundreds or thousands of dimensions**, but the principle remains the same.

---

# 6. Why Embeddings Solve the Vocabulary Problem

Earlier we saw a problem called **vocabulary mismatch**.

Example:

Query

```

How long do I have to send a product back?

```

Document

```

Products can be returned within 15 days.

```

Keyword search struggles because:

```

send back ≠ return

```

But embeddings capture **semantic meaning**.

So the embedding for:

```

send back product

```

will be **very close** to the embedding for:

```

return product

````

This allows systems to retrieve relevant documents even when the wording differs.

---

# 7. Embeddings in Modern AI Systems

Embeddings power many modern AI capabilities.

### Semantic Search

Instead of matching keywords, search systems compare **vector similarity**.

### Question Answering

Systems retrieve documents whose embeddings are closest to the question.

### Recommendation Systems

Products with similar embeddings are recommended together.

### Chatbots

Relevant knowledge is retrieved using embedding similarity.

This technology is fundamental to **Retrieval-Augmented Generation (RAG)**.

---

# 8. Embedding Models

Embeddings are generated using **embedding models**.

These are neural networks trained to convert text into vectors.

Examples include:

* OpenAI embedding models
* sentence-transformers
* BERT-based embedding models
* Instructor embeddings

Example code:

```python
from openai import OpenAI

client = OpenAI()

response = client.embeddings.create(
    model="text-embedding-3-small",
    input="Customers can return items within 15 days."
)

embedding = response.data[0].embedding
````

The output is a **vector representation of the sentence**.

---

# 9. The Next Challenge: Searching Through Millions of Vectors

Now we understand something important:

```
Every document → embedding vector
Every query → embedding vector
```

To retrieve knowledge we must:

1. Convert the query into an embedding
2. Compare it with embeddings of stored documents
3. Find the **most similar vectors**

But a real system may contain:

```
Millions or billions of embeddings
```

Searching efficiently through such large vector collections requires specialized systems called **vector databases**.

---

# Key Takeaways

Important concepts from this module:

* Computers must convert text into numbers to process language
* Embeddings represent the **semantic meaning of text**
* Similar meanings produce **similar vectors**
* Retrieval systems use **vector similarity** instead of keyword matching
* Embeddings are the foundation of **semantic search and RAG systems**

---

# Next Module

In the next module we will explore **how similarity between embeddings is measured**.

We will learn:

* cosine similarity
* vector distance
* nearest neighbor search

These techniques allow machines to determine **which pieces of knowledge are most relevant to a user's query**.
