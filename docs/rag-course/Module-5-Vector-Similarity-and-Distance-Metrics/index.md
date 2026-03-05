---
layout: page
title: Module 5 - Vector Similarity and Distance Metrics
permalink: /rag-course/Module-5-Vector-Similarity-and-Distance-Metrics/
---

# Vector Similarity and Distance Metrics

## Learning Objectives

By the end of this module you will understand:

* Why measuring similarity between vectors is necessary
* How machines determine whether two texts have similar meaning
* The intuition behind **vector distance**
* The concept of **cosine similarity**
* Why cosine similarity is commonly used in modern AI retrieval systems
* How similarity search works in RAG systems

In the previous module we learned that **text can be converted into embeddings (vectors)**.

Every document and every query becomes a **point in vector space**.

The next challenge is determining:

```

Which stored document vector is most similar to the query vector?

```

To solve this problem, we use **vector similarity metrics**.

---

# 1. The Core Retrieval Problem

Imagine we have stored embeddings for thousands of documents.

Example documents:

```

Doc 1: Return policy for electronics
Doc 2: Weather forecast for tomorrow
Doc 3: Laptop warranty information

```

Each document has been converted into an embedding vector.

When a user asks a question:

```

How long can I return a product?

```

We convert the query into an embedding as well.

Now the system must answer:

```

Which document vector is closest to the query vector?

```

The closest vector likely contains the most relevant information.

---

# 2. What Does "Similarity" Mean for Vectors?

In everyday language, similarity means:

```

How alike two things are.

```

For vectors, similarity means:

```

How close two points are in vector space.

```

Example:

```

Vector A: [0.21, 0.52]
Vector B: [0.20, 0.50]

```

These vectors are very close to each other.

Now compare:

```

Vector C: [0.90, -0.12]

```

Vector C is far away from A and B.

This distance tells us:

```

A and B likely represent similar meanings
C represents something different

```

---

# 3. Distance vs Similarity

There are two ways to measure relationships between vectors.

### Distance

Distance measures **how far apart two vectors are**.

```

Smaller distance = more similar

```

### Similarity

Similarity measures **how aligned two vectors are**.

```

Higher similarity = more similar

```

Both approaches can be used to find relevant documents.

---

# 4. Euclidean Distance

One way to measure vector distance is **Euclidean distance**.

This is the same concept used to measure distance between two points on a map.

Example:

```

Point A: (1,2)
Point B: (4,6)

```

Distance formula:

```

distance = √((x2-x1)^2 + (y2-y1)^2)

```

This gives the straight-line distance between the points.

In vector search:

```

Smaller distance → higher similarity

```

However, Euclidean distance is **not always ideal for text embeddings**.

---

# 5. The Problem with Raw Distance

Consider two vectors:

```

Vector A: [1,2,3]
Vector B: [2,4,6]

```

These vectors represent **exactly the same direction**.

Vector B is simply a scaled version of Vector A.

But Euclidean distance sees them as **far apart**.

This creates problems for semantic search.

What matters more is **direction**, not absolute size.

This leads us to a better metric.

---

# 6. Cosine Similarity

The most widely used similarity measure for embeddings is **cosine similarity**.

Cosine similarity measures **the angle between two vectors**.

Instead of asking:

```

How far apart are these vectors?

```

Cosine similarity asks:

```

Do these vectors point in the same direction?

```

If two vectors point in the same direction:

```

Cosine similarity ≈ 1

```

If they are unrelated:

```

Cosine similarity ≈ 0

```

If they point in opposite directions:

```

Cosine similarity ≈ -1

```

---

# 7. Visual Intuition

Imagine vectors as arrows starting from the same point.

```

Query Vector
↗

Document A
↗

Document B
↘

```

Document A points in a similar direction as the query.

Document B points in a very different direction.

Cosine similarity therefore ranks:

```

Document A → highly relevant
Document B → not relevant

```

This works extremely well for semantic embeddings.

---

# 8. Why Cosine Similarity Works Well for Text

Text embeddings represent **semantic meaning**.

What matters is the **relationship between concepts**, not their magnitude.

Cosine similarity focuses only on the **angle between vectors**, which makes it ideal for comparing meanings.

Advantages include:

* Works well in high dimensional spaces
* Ignores magnitude differences
* Captures semantic similarity effectively
* Efficient to compute

Because of these advantages, cosine similarity is widely used in:

* semantic search
* recommendation systems
* document retrieval
* RAG pipelines

---

# 9. Finding the Nearest Neighbors

Once we can measure similarity, the retrieval process becomes straightforward.

Steps:

1. Convert query to embedding
2. Compare query embedding with all document embeddings
3. Compute similarity score
4. Return the **top K most similar documents**

Example:

```

Query: How long is the refund period?

```

Similarity results:

```

Doc A: Return policy (score: 0.91)
Doc B: Warranty terms (score: 0.64)
Doc C: Weather forecast (score: 0.05)

```

The system retrieves **Doc A** because it has the highest similarity score.

This process is called:

```

Nearest Neighbor Search

```

---

# 10. The Scalability Challenge

The approach we described works well for small datasets.

But real-world systems may contain:

```

Millions or billions of embeddings

```

Computing similarity against every vector would be extremely slow.

To solve this problem, modern systems use:

```

Approximate Nearest Neighbor (ANN) search

```

ANN algorithms allow systems to quickly find **the most similar vectors without scanning the entire dataset**.

This is the technology behind modern **vector databases**.

---

# Key Takeaways

Important ideas from this module:

* Embeddings allow text to be represented as vectors
* Retrieval systems must compare vectors to determine similarity
* Distance metrics measure how far vectors are from each other
* Cosine similarity measures the angle between vectors
* Cosine similarity is the most commonly used metric for semantic search
* Retrieval systems use **nearest neighbor search** to find relevant documents

---

# Next Module

In the next module we will explore **vector databases**.

We will learn:

* why traditional databases are not suitable for vector search
* how vector databases store embeddings
* how they perform fast similarity search
* the role they play in modern RAG systems

