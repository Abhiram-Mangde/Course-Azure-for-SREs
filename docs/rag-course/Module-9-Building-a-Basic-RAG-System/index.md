---
layout: page
title: Module 9 - Building a Basic RAG System
permalink: /rag-course/Module-9-Building-a-Basic-RAG-System/
---

# Building a Basic RAG System

## Learning Objectives

By the end of this module you will understand:

* How to combine embeddings, vector databases, and an LLM into a working RAG system
* How queries are processed through the RAG pipeline
* How to retrieve top K chunks and generate answers
* Basic code implementation of a RAG system
* Key best practices for small-scale RAG pipelines

In previous modules we covered the theory:

* embeddings  
* vector similarity  
* vector databases  
* document chunking  
* RAG architecture  

Now we put it all together into a **hands-on basic RAG system**.

---

# 1. System Overview

A basic RAG system consists of three main components:

```

1. Embedding model → converts text into vectors
2. Vector database → stores document embeddings
3. Language model (LLM) → generates answers using retrieved context

```

Workflow:

```

User Query → Embedding → Vector DB → Retrieve top K chunks → LLM → Answer

```

---

# 2. Preparing Documents

Start with a set of documents you want your RAG system to know.

Example:

```

documents = [
"Customers can return products within 15 days of purchase.",
"Warranty covers defects for 1 year from the purchase date.",
"Shipping takes 3-5 business days."
]

````

---

# 3. Chunking Documents

Split documents into smaller chunks for better embeddings.

```python
from langchain.text_splitter import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=50,
    chunk_overlap=10
)

chunks = []
for doc in documents:
    chunks.extend(text_splitter.split_text(doc))
````

Each chunk will later be embedded.

---

# 4. Generating Embeddings

Use an embedding model to convert chunks into vectors.

```python
from openai import OpenAI

client = OpenAI()

embeddings = []
for chunk in chunks:
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=chunk
    )
    embeddings.append(response.data[0].embedding)
```

Now each chunk has a corresponding **embedding vector**.

---

# 5. Storing Embeddings in a Vector Database

Choose a vector database (e.g., **FAISS** for local or **Pinecone** for cloud).

Example using FAISS:

```python
import faiss
import numpy as np

dimension = len(embeddings[0])
index = faiss.IndexFlatL2(dimension)  # Euclidean distance
index.add(np.array(embeddings).astype("float32"))
```

Now the system can search for nearest neighbor embeddings efficiently.

---

# 6. Querying the System

1. Convert the user query into an embedding
2. Search vector database for top K most similar chunks

```python
query = "How long can I return a product?"
query_embedding = client.embeddings.create(
    model="text-embedding-3-small",
    input=query
).data[0].embedding

# Search top 2 similar chunks
D, I = index.search(np.array([query_embedding]).astype("float32"), k=2)
retrieved_chunks = [chunks[i] for i in I[0]]
```

---

# 7. Constructing the Prompt

Combine retrieved chunks into a prompt for the LLM:

```python
prompt = f"""
You are a helpful assistant. Use the following information to answer the question.

Context:
{''.join(retrieved_chunks)}

Question: {query}
Answer:
"""
```

---

# 8. Generating the Answer

Feed the prompt to an LLM to generate a response:

```python
from openai import OpenAI

client = OpenAI()
response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": prompt}]
)

answer = response.choices[0].message.content
print(answer)
```

Example output:

```
Customers can return products within 15 days of purchase, provided the items are unused and in their original packaging.
```

---

# 9. Putting It All Together

Summary of steps:

1. Prepare documents and chunk them
2. Generate embeddings for each chunk
3. Store embeddings in vector database
4. Convert user query to embedding
5. Retrieve top K relevant chunks
6. Construct prompt with context
7. Feed prompt to LLM → generate answer

Even this **basic system** already implements RAG and can be extended to:

* larger document collections
* hybrid search
* multiple LLMs
* caching and batching

---

# Key Takeaways

* RAG systems combine embeddings, vector databases, and LLMs to answer questions
* Chunking ensures documents fit within LLM context windows
* Vector similarity retrieves the most relevant chunks
* Prompt construction and feeding context to the LLM produces grounded answers
* A simple RAG pipeline can be implemented with minimal code

---

# Next Module
In the next module we will explore **Advanced RAG Techniques**:

* Query refinement and re-ranking
* Multi-step retrieval
* Handling long documents efficiently
* Scaling and performance optimizations