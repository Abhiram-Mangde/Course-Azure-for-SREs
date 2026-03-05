---
layout: page
title: Module 6 - Vector Databases
permalink: /rag-course/Module-6-Vector-Databases
---

# Vector Databases

## Learning Objectives

By the end of this module you will understand:

* What vector databases are and why they are needed
* Why traditional databases are not suitable for embeddings
* How vector databases store and index embeddings
* How they perform **fast similarity search**
* The role of vector databases in **RAG pipelines**

In the previous module, we learned how to represent text as embeddings and measure similarity between vectors.

The next challenge is **scaling retrieval** when we have millions or billions of embeddings.

Vector databases are the solution.

---

# 1. Why Traditional Databases Fail

Traditional databases (SQL, NoSQL) are designed for:

* exact matches
* structured data
* numeric or text filtering

Example:

```

SELECT * FROM documents WHERE title = 'Return Policy';

```

This works for structured queries but **fails for vector similarity search**:

* SQL cannot efficiently find “nearest neighbors” in high-dimensional space
* Querying millions of embeddings would be extremely slow

---

# 2. What is a Vector Database?

A **vector database** is a system specifically designed to:

* store high-dimensional vectors (embeddings)
* index them for fast similarity search
* retrieve **nearest neighbors** efficiently

It allows us to scale semantic search and RAG systems.

---

# 3. How Vector Databases Work

Core components of a vector database:

1. **Storage:** stores embeddings in high-dimensional space
2. **Indexing:** builds structures (like HNSW, IVF, PQ) for fast search
3. **Search API:** accepts query embedding and returns top K nearest neighbors
4. **Metadata storage:** optional extra information (document ID, text, source)

---

# 4. Nearest Neighbor Search in Practice

For example, given a query embedding:

```

Query: "How long is the return period?"

```

The database searches for the top K embeddings with highest **cosine similarity**.

Example result:

```

Doc A: Return policy (score: 0.92)
Doc B: Warranty policy (score: 0.68)
Doc C: Shipping info (score: 0.42)

```

The system returns **Doc A**, which is the most relevant.

---

# 5. Indexing Techniques

Vector databases use special indexing structures to reduce computation:

* **HNSW (Hierarchical Navigable Small World):** efficient ANN search for millions of vectors
* **IVF (Inverted File Index):** partitions vector space into clusters
* **PQ (Product Quantization):** compresses embeddings for memory efficiency

These allow **fast and memory-efficient nearest neighbor search**.

---

# 6. Popular Vector Databases

Several vector databases are widely used in AI applications:

* **Pinecone** – fully managed, cloud-native
* **Weaviate** – semantic search with knowledge graph support
* **FAISS** – Facebook AI open-source library
* **Chroma** – open-source vector database optimized for local usage
* **Milvus** – scalable vector database for enterprise solutions

---

# 7. Metadata and Hybrid Search

Vector databases often store **metadata** alongside embeddings:

* document ID
* original text
* source URL
* creation date

This allows **hybrid search**:

* filter by metadata (e.g., only PDFs)
* combine vector similarity with keyword search

Example:

```

Retrieve the most relevant document embedding where type = 'policy'

```

---

# 8. Integration with RAG Pipelines

In RAG systems, vector databases serve as the **retrieval engine**:

1. **Embed documents** → store embeddings in vector DB
2. **Embed query** → perform nearest neighbor search
3. **Retrieve top K documents** → send to language model
4. **Generate answer** → language model interprets retrieved context

Vector DB + LLM = Retrieval-Augmented Generation

---

# 9. Benefits of Vector Databases

* **Scalability:** handle millions or billions of embeddings
* **Efficiency:** fast retrieval via ANN search
* **Flexibility:** combine similarity search with metadata filters
* **Foundation for RAG:** reliable retrieval of relevant documents

---

# Key Takeaways

* Traditional databases cannot efficiently handle embedding search
* Vector databases store high-dimensional embeddings and perform nearest neighbor search
* Indexing techniques like HNSW, IVF, PQ enable fast retrieval
* Metadata allows hybrid search with filters
* Vector databases are critical components of RAG systems

---

# Next Module
In the next module we will explore **Document Chunking Strategies**:

* Why large documents need to be split
* How to chunk text efficiently
* How chunking impacts embeddings and retrieval
