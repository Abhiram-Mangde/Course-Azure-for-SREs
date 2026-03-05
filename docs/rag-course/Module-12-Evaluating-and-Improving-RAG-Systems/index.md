---
layout: page
title: Module 12 - Evaluating and Improving RAG Systems
permalink: /rag-course/Module-12-Evaluating-and-Improving-RAG-Systems/
---

# Evaluating and Improving RAG Systems

## Learning Objectives

By the end of this module you will understand:

- Why evaluating RAG systems is difficult
- The difference between **retrieval evaluation** and **generation evaluation**
- Metrics used to measure retrieval quality
- How to detect hallucinations
- How to systematically improve a RAG system

Building a RAG system is only half the job.

The real challenge is answering the question:

**“How good is my RAG system?”**

Without evaluation, you cannot know if the system is:

- retrieving the correct documents
- generating correct answers
- hallucinating information
- improving over time

This module explains how RAG systems are evaluated in practice.

---

# 1. Why Evaluating RAG is Difficult

Traditional machine learning models are easier to evaluate.

Example:

```

Image classification → accuracy
Spam detection → precision and recall

```

But RAG systems contain **two major components**:

```

Retrieval System
+
Language Model

```

So errors can occur in multiple places:

1. The system retrieved the wrong documents
2. The system retrieved correct documents but the LLM ignored them
3. The LLM hallucinated information
4. The prompt was poorly constructed

Example:

```

User Question:
What is the refund policy?

Retrieved Document:
Return policy for electronics

Generated Answer:
Incorrect refund time

```

The retrieval may be correct, but the generation may still fail.

This is why RAG evaluation is more complex.

---

# 2. Two Levels of Evaluation

RAG systems must be evaluated at **two levels**.

## Level 1 — Retrieval Evaluation

Measures whether the **right documents were retrieved**.

Key question:

```

Did the system retrieve the correct knowledge?

```

---

## Level 2 — Generation Evaluation

Measures whether the **LLM produced a correct answer**.

Key question:

```

Did the LLM correctly use the retrieved knowledge?

```

Both evaluations are necessary.

---

# 3. Retrieval Evaluation Metrics

Retrieval metrics measure how well the vector search performs.

---

## Recall@K

Recall@K checks whether the **correct document appears in the top K results**.

Example:

```

User Question:
What is the return period?

Correct Document:
Return policy document

```

If the correct document appears in:

```

Top 3 results → success

```

Then:

```

Recall@3 = 1

```

If it does not appear:

```

Recall@3 = 0

```

High Recall@K means the system **rarely misses relevant documents**.

---

## Precision@K

Precision measures how many retrieved documents are actually relevant.

Example:

```

Top 5 retrieved chunks

Chunk 1 → relevant
Chunk 2 → relevant
Chunk 3 → irrelevant
Chunk 4 → irrelevant
Chunk 5 → relevant

```

Precision:

```

3 relevant / 5 retrieved = 0.6

```

Higher precision means **less noise in retrieval**.

---

## Mean Reciprocal Rank (MRR)

MRR measures **how early the correct result appears**.

Example:

```

Rank 1 → correct → score = 1
Rank 2 → correct → score = 0.5
Rank 5 → correct → score = 0.2

```

Higher MRR means the system retrieves **relevant documents earlier**.

---

# 4. Generation Evaluation

After retrieval, we must evaluate the **LLM response**.

Important questions:

- Is the answer correct?
- Is the answer grounded in the retrieved documents?
- Is the answer complete?

---

## Human Evaluation

One approach is **manual review**.

Experts evaluate responses based on:

- factual accuracy
- completeness
- relevance

Example rating scale:

```

1 → incorrect
2 → partially correct
3 → correct but incomplete
4 → correct and complete

```

Human evaluation is accurate but **slow and expensive**.

---

# 5. Detecting Hallucinations

Hallucination happens when the LLM **makes up information not present in the documents**.

Example:

```

Retrieved Document:
Return period is 30 days

Generated Answer:
Return period is 60 days

```

This is a hallucination.

Ways to detect hallucinations:

### Grounding Check

Verify whether the answer is supported by retrieved documents.

### Citation Requirement

Force the model to include citations.

Example:

```

Answer: The return period is 30 days [Doc 2]

```

### Automated LLM Evaluation

Use another LLM to check if the answer is supported by the context.

---

# 6. Building an Evaluation Dataset

To evaluate RAG systems properly, we need **benchmark questions**.

Example dataset:

```

Question: What is the refund period?
Answer: 30 days
Relevant Document: Return policy document

```

A good evaluation dataset contains:

- realistic user questions
- verified answers
- relevant documents

This dataset allows consistent testing.

---

# 7. RAG Evaluation Pipeline

A typical evaluation pipeline looks like this:

```

Evaluation Questions
↓
Run Through RAG System
↓
Retrieve Documents
↓
Generate Answers
↓
Compute Metrics

```

Metrics include:

- Recall@K
- Precision@K
- Answer correctness
- Hallucination rate

This pipeline helps track improvements.

---

# 8. Improving RAG Systems

Once evaluation identifies problems, improvements can be applied.

---

## Improve Chunking

Poor chunking often causes retrieval failures.

Example improvement:

```

Add overlapping chunks
Use semantic chunking

```

---

## Improve Embeddings

Better embedding models improve semantic search.

Example:

```

Switch from basic embeddings
to domain-specific embeddings

```

---

## Improve Prompts

Prompt structure greatly affects answer quality.

Example:

```

Use only the provided context.
If the answer is not found, say "I don't know".

```

This reduces hallucinations.

---

## Improve Retrieval

Techniques include:

- hybrid search
- query expansion
- re-ranking

---

# 9. Continuous Evaluation

Production RAG systems require **continuous monitoring**.

Example workflow:

```

User Queries
↓
Log Retrieval + Responses
↓
Evaluate Quality
↓
Identify Failures
↓
Improve System

```

This process continuously improves the system.

---

# Key Takeaways

- RAG systems must be evaluated at **two levels**: retrieval and generation
- Retrieval metrics include Recall@K, Precision@K, and MRR
- Generation evaluation focuses on accuracy and grounding
- Hallucinations must be detected and minimized
- Evaluation datasets allow consistent system benchmarking
- Continuous evaluation is essential for production systems

A well-evaluated RAG system becomes **more reliable and trustworthy over time**.

---

# Next Module

In the next module we will explore:

**Industry RAG Architectures and Design Patterns**

You will learn how companies build:

- large scale RAG pipelines
- enterprise knowledge assistants
- multi-agent retrieval systems
