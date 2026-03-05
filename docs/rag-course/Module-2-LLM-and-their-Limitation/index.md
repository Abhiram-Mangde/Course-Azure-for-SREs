---
layout: page
title: Module 2 - Language Models and Their Limitations
permalink: /rag-course/Module-2-LLM-and-their-Limitation/
---

# Language Models and Their Limitations
## Learning Objectives

By the end of this module you will understand:
* What **language models** are
* How modern **Large Language Models (LLMs)** generate text
* The concepts of **tokens, attention, and context windows**
* Why LLMs sometimes produce incorrect or fabricated information
* The fundamental limitations of LLMs that lead to the need for Retrieval-Augmented Generation

This module explains **how language models work internally and why they require external knowledge systems**.

## 1. What is a Language Model?
A **language model** is a machine learning system trained to **predict the next word in a sequence of text**. At its core, a language model answers one question:

`Given the previous words, what is the most probable next word?`

*Example:*

**Input:** `The capital of France is`

**Prediction:** `Paris`

The model chooses **Paris** because during training it saw many examples where the sequence *“capital of France”* was followed by *“Paris”*.

> Language models therefore learn **statistical patterns in language**.

## 2. Large Language Models (LLMs)
Modern systems like:
* GPT-4
* Claude 3
* Llama 3

are called **Large Language Models (LLMs)**. They are called “large” because:
* They are trained on **massive datasets**
* They contain **billions or trillions of parameters**
* They learn complex patterns in language

These models can perform tasks such as:
* answering questions
* writing essays
* summarizing documents
* translating languages
* generating code

> Despite these impressive abilities, they still operate using the **same fundamental mechanism: predicting tokens**.

## 3. Tokens: How Models Read Text
Language models do not process text word by word. Instead they process **tokens**. A token is a small unit of text. It can be:
* a word
* part of a word
* punctuation
* a symbol

*Example sentence:* `Artificial intelligence is transforming technology`.

**Possible tokenization:**
```
Artificial
intelligence
is
transforming
technology
.
```

*Another example:* `unbelievable`

**Might become:**
```text
un
believ
able
```

> Tokens allow models to process language efficiently.

## 4. Context Windows
A **context window** defines how much text the model can consider at one time.

*Example:*

A model with a context window of: `8,000 tokens` can only read **8,000 tokens of input at once**. If the input exceeds that size, earlier tokens must be removed. Modern models have larger context windows.

*For example:*
* GPT-4 supports very large contexts
* Claude 3 can process extremely long documents

However, **context is always limited**. This means an LLM cannot read **an entire knowledge base at once**.

## 5. The Transformer Architecture
Most modern LLMs are built using the **Transformer architecture**. This architecture was introduced in 2017 and revolutionized natural language processing. Transformers rely on a mechanism called **attention**.

## 6. Attention: Understanding Relationships Between Words
Attention allows the model to decide **which words in a sentence are important when predicting the next token**.

*Example sentence:* `The cat sat on the mat because it was tired`. The word **"it"** refers to **"cat"**. Attention helps the model learn that relationship. Instead of reading text strictly left-to-right, attention allows the model to **connect related words across the entire sentence**.

This ability allows transformers to understand:
* context
* relationships
* meaning

## 7. How Language Models Generate Responses
When you ask a question, the model performs the following steps:
- Step 1 — Convert input into tokens
- Step 2 — Process tokens through the neural network
- Step 3 — Predict the most likely next token
- Step 4 — Append the token to the response
- Step 5 — Repeat until the response is complete

*Example:*

**Input:** `What is the capital of France?`

**Output generation process:**
```text
The
capital
of
France
is
Paris
.
```

Each token is generated **one step at a time**.

## 8. Why LLMs Sometimes Produce Incorrect Answers
Because LLMs generate text based on **probability**, they sometimes produce answers that sound correct but are actually wrong. This phenomenon is called **hallucination**.

*Example:*

**Question:** `What is the refund policy of my company?`

If the model has never seen your company’s policy, it may **invent an answer** based on patterns from other companies. The model is not intentionally lying. It is simply **predicting what a typical answer might look like**.

## 9. Knowledge Limitations of LLMs
LLMs face several important knowledge limitations.

- ### Static Knowledge
Models are trained once and then deployed. They do not automatically learn new information.

*Example:* `A model trained in 2024 may not know events that occur in 2025.`

- ### No Access to Private Data
LLMs cannot access internal documents such as:
* company policies
* private databases
* internal reports
* confidential knowledge bases

- ### Limited Context
Even with large context windows, LLMs cannot process **millions of documents simultaneously**. This creates a major challenge. How can a model answer questions about information stored in large knowledge bases?

## 10. The Core Problem
We now arrive at a critical realization:
```text
Language models are excellent at generating explanations,
but they are not designed to retrieve information from large knowledge bases.
```

This creates a gap between **generation** and **retrieval**. To solve this problem, modern AI systems combine:
* retrieval systems that **search for relevant information**
* language models that **interpret and explain the results**

This approach is known as **Retrieval-Augmented Generation**.

## Key Takeaways

Important ideas from this module:
* Language models generate text by **predicting tokens**
* Modern LLMs use the **Transformer architecture**
* Tokens are the basic units used to process text
* Context windows limit how much information a model can read
* LLMs sometimes hallucinate because they generate answers probabilistically
* Language models are **not designed to retrieve knowledge from large document collections**

These limitations motivate the need for **retrieval-based AI systems**.

## Next Module

In the next module we will examine **the knowledge retrieval problem** in detail.
We will explore:
* why traditional search systems struggle with semantic understanding
* how modern AI systems retrieve relevant information
* the conceptual foundations behind **Retrieval-Augmented Generation**
