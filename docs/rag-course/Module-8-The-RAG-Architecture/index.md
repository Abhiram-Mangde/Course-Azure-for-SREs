---
layout: page
title: Module 8 - The RAG Architecture
permalink: /rag-course/Module-8-The-RAG-Architecture
---

# The RAG Architecture

## Learning Objectives

By the end of this module you will understand:

* What Retrieval-Augmented Generation (RAG) is
* How retrieval and generation are combined
* The step-by-step flow of a RAG system
* The role of embeddings, vector databases, and chunked documents
* How RAG improves accuracy and reduces hallucinations

In previous modules we learned:

* How embeddings capture semantic meaning  
* How vector databases enable fast similarity search  
* How chunking prepares documents for retrieval  

Now we connect these components into a **complete RAG system**.

---

# 1. What is RAG?

**Retrieval-Augmented Generation (RAG)** is a framework that combines:

```

1. A retrieval system → finds relevant knowledge
2. A language model → generates answers based on retrieved knowledge

```

Instead of asking the LLM to remember everything, we **retrieve relevant context** on demand.

This makes LLMs:

* more accurate  
* up-to-date  
* capable of reasoning over large external knowledge bases

---

# 2. Why RAG?

Traditional LLM-only approaches:

* rely solely on model memory  
* have knowledge cutoff limits  
* hallucinate if information is missing  

RAG overcomes this by **feeding the model retrieved information**, so the model has the context it needs.

Example:

```

Question: "What is our company refund policy for electronics purchased last month?"

```

*LLM alone:* may not know last month’s updated policy  
*RAG:* retrieves relevant policy document chunk → LLM generates an accurate answer

---

# 3. The RAG Pipeline Overview

The RAG process can be broken down into **four main steps**:

1. **Query Encoding**  
   Convert user query into an embedding vector

2. **Document Retrieval**  
   Search the vector database for top K most similar embeddings

3. **Context Construction**  
   Combine retrieved document chunks into a context for the LLM

4. **Answer Generation**  
   Feed query + retrieved context to the LLM → generate answer

```

User Query → Embedding → Vector DB → Retrieve Chunks → LLM → Answer

````id="b1m0c7"

---

# 4. Step 1: Query Encoding

* Convert the user’s query into a vector using the **same embedding model** as used for documents  
* Ensures embeddings are in the same semantic space  
* Example:

```python
query_embedding = embedding_model.encode("Return policy for electronics")
````

This embedding is used to **find similar document chunks** in the vector database.

---

# 5. Step 2: Document Retrieval

* Use the query embedding to perform **nearest neighbor search** in the vector DB
* Retrieve top K chunks based on **cosine similarity**
* Example:

```
Top 3 retrieved chunks:
1. Electronics return policy, section 2
2. Refund process details
3. Exclusions and conditions
```

These chunks become the **context** for the LLM.

---

# 6. Step 3: Context Construction

* Combine retrieved chunks into a **single prompt**
* May include **metadata or citations**
* Use a template to guide the LLM:

```
You are a helpful assistant. Use the following retrieved information to answer the question.

Context:
[Chunk 1]
[Chunk 2]
[Chunk 3]

Question: What is the return policy for electronics purchased last month?
Answer:
```

*Important:* Be mindful of **LLM context window** — too many chunks may exceed it.

---

# 7. Step 4: Answer Generation

* Feed the query + retrieved context to the LLM
* LLM generates an answer **grounded in retrieved documents**
* Benefits:

  * Reduces hallucinations
  * Incorporates updated knowledge
  * Handles large knowledge bases

Example output:

```
Customers can return electronics within 15 days of purchase, provided the items are unused and in original packaging.
```

---

# 8. RAG Variants

There are two main types of RAG:

### 8.1 RAG-Sequence

* LLM processes **each retrieved document sequentially**
* Pros: thorough reasoning
* Cons: slower for many documents

### 8.2 RAG-Token

* LLM attends to all retrieved documents **at each token generation step**
* Pros: potentially more accurate
* Cons: computationally expensive

Both approaches are used depending on **accuracy vs speed requirements**.

---

# 9. Key Components of RAG

* **Embedding Model:** converts text into vectors
* **Vector Database:** stores embeddings, supports similarity search
* **Chunked Documents:** ensures LLM can process retrieved information
* **Language Model (LLM):** generates the final answer using context

Together, these components create a **scalable and accurate RAG system**.

---

# Key Takeaways

* RAG combines retrieval and generation for better LLM performance
* Query embedding + vector database → relevant context retrieval
* Context is fed to LLM to generate grounded answers
* RAG reduces hallucinations and enables up-to-date knowledge
* Variants (sequence/token) trade off **accuracy** vs **speed**

---

# Next Module

In the next module we will **build a basic RAG system from scratch**:

* Integrate embedding model + vector database + LLM
* Feed a query → retrieve context → generate answer
* Hands-on example of a working RAG pipeline