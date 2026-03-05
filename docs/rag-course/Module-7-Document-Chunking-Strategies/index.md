---
layout: page
title: Module 7 - Document Chunking Strategies
permalink: /rag-course/Module-7-Document-Chunking-Strategies
---

# Document Chunking Strategies

## Learning Objectives

By the end of this module you will understand:

* Why large documents need to be split into smaller chunks
* How chunking impacts embeddings and retrieval
* Different strategies for splitting text
* The concept of **overlap** in chunks
* How chunking improves RAG system performance

In previous modules, we learned about embeddings and vector databases.  
Now we tackle **large documents** and how to make them compatible with retrieval systems.

---

# 1. Why Chunking is Necessary

Large documents often exceed the **context window** of language models.

Example:

```

A research report with 50,000 words

```

Even large LLMs can only process a few thousand tokens at once.

**Problem:** Feeding the entire document to the model is impossible.

**Solution:** Split the document into smaller, manageable chunks.

---

# 2. Chunking and Embeddings

When we generate embeddings, each chunk is converted into a vector.

```

Document → Split into chunks → Each chunk → Embedding

```

Benefits:

* Smaller chunks fit into LLM context windows
* Retrieval is more precise
* Avoids diluting relevant information in long documents

Example:

```

Document: Refund Policy (15,000 words)
Chunks: 100 chunks of ~150 words each
Embedding: Each chunk → vector stored in vector DB

```

---

# 3. Chunk Size

Choosing the right chunk size is crucial.

* Too small:

  * Number of chunks explodes
  * More storage and retrieval overhead

* Too large:

  * Embeddings may contain unrelated content
  * Reduced retrieval accuracy

**Rule of thumb:** 100–500 words per chunk (or 500–1000 tokens)

---

# 4. Chunk Overlap

Overlap ensures context is preserved between chunks.

Example:

```

Chunk 1: words 1–150
Chunk 2: words 120–270 (overlap 30 words)
Chunk 3: words 240–390 (overlap 30 words)

```

Benefits:

* Maintains continuity across chunks
* Prevents missing important information at chunk boundaries

---

# 5. Splitting Strategies

There are several ways to chunk text:

### 5.1 Fixed-Size Chunks

* Divide text by a fixed number of words or tokens
* Simple but may cut sentences abruptly

### 5.2 Sentence-Based Chunks

* Split text at sentence boundaries
* More natural for LLMs

### 5.3 Paragraph-Based Chunks

* Use paragraphs as chunk boundaries
* Preserves semantic integrity

### 5.4 Hybrid Chunks

* Combine paragraph-based chunks with token limits
* Add overlap for continuity
* Works well for large documents

---

# 6. Impact on Retrieval

Proper chunking affects RAG retrieval:

* Smaller, precise chunks → more relevant results
* Overlapping chunks → prevent missing context
* Balanced chunk size → efficient storage and search

Example:

```

Query: "Return policy for electronics"
Retrieval returns top 3 chunks → Combined into prompt → LLM generates answer

````

---

# 7. Tools for Chunking

There are several libraries and tools to automate chunking:

* **LangChain TextSplitter**
* **LlamaIndex DocumentLoader**
* **Custom Python scripts** using `nltk`, `spaCy`, or regex

Example with LangChain:

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50
)

chunks = text_splitter.split_text(document_text)
````

Each `chunk` can then be embedded and stored in a vector database.

---

# 8. Best Practices

* Always **test different chunk sizes** for your data
* Use **overlap** to prevent information loss
* Maintain **semantic integrity** (don’t split mid-sentence)
* Keep track of **metadata** (source, chunk ID, position)

Chunking + embeddings + vector database → **precise and scalable RAG retrieval**

---

# Key Takeaways

* Large documents must be split into chunks to fit LLM context windows
* Proper chunk size and overlap are critical for retrieval accuracy
* Different chunking strategies: fixed-size, sentence-based, paragraph-based, hybrid
* Chunking improves embeddings quality and relevance in RAG pipelines

---

# Next Module

In the next module we will explore **the RAG architecture**:

* How retrieval and generation are combined
* How query → retrieval → language model → answer works
* End-to-end flow of a RAG system