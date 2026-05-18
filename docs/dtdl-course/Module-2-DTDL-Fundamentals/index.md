---
layout: lesson
title: Module 2 - DTDL Fundamentals & Structure
permalink: /dtdl-course/Module-2-DTDL-Fundamentals/
---

# Module 2 — DTDL Fundamentals & Structur
## Module Objective

By the end of this module, you will:
- Understand the structure of a DTDL model
- Learn required fields in every model
- Understand DTMI naming rules
- Write your first valid DTDL model
- Avoid beginner mistakes
- Think like a production architect

---

# 1️⃣ What Is DTDL?

DTDL stands for:

**Digital Twins Definition Language**

It is the modeling language used in Azure Digital Twins.

It defines:

- What a twin represents
- What properties it has
- What telemetry it receives
- What relationships it supports

Important:

> DTDL defines the blueprint, not the actual twin instance.

---

# 2️⃣ DTDL Is JSON-Based

DTDL is written in JSON format.

If you understand JSON, you already understand 50% of DTDL.

Example JSON:

```json
{
  "name": "Room",
  "temperature": 23
}
```

DTDL builds structured models using this format.

---

# 3️⃣ The Smallest Valid DTDL Model

Here is the smallest valid model:

```json
{
  "@id": "dtmi:com:example:Room;1",
  "@type": "Interface",
  "@context": "dtmi:dtdl:context;2",
  "displayName": "Room",
  "contents": []
}
```

Let’s break this down carefully.

---

# 4️⃣ Required Fields Explained

## 🔹 @id

This is the **Digital Twin Model Identifier (DTMI)**.

Format:

```
dtmi:<domain>:<modelName>;<version>
```

Example:

```
dtmi:com:example:Room;1
```

Breakdown:

- `dtmi` → required prefix
- `com:example` → namespace
- `Room` → model name
- `;1` → version number

### Important Rules:

- Must be globally unique
- Must include version
- Cannot change after deployment
- If updated → increase version

Example new version:

```
dtmi:com:example:Room;2
```

Never overwrite version 1.

---

## 🔹 @type

For models, this is usually:

```
"Interface"
```

An Interface defines a blueprint for a digital twin.

Think of it like:

- A class in programming
- A schema in a database

---

## 🔹 @context

This tells Azure which DTDL version you are using.

For DTDL v2:

```
"dtmi:dtdl:context;2"
```

Always include it.

Without it → model validation fails.

---

## 🔹 displayName

Human-readable name.

Used in:

- Azure portal
- Model visualization
- Developer tools

This does NOT affect logic.

---

## 🔹 contents

This is where the real modeling happens.

Inside contents you define:

- Properties
- Telemetry
- Relationships
- Commands
- Components

Example:

```json
"contents": []
```

An empty array means:
The model currently has no properties.

---

# 5️⃣ Creating Your First Real Model

Let’s build something meaningful.

We will create a Room model with:

- temperature (Property)
- humidity (Telemetry)

Here is the full model:

```json
{
  "@id": "dtmi:com:smartbuilding:Room;1",
  "@type": "Interface",
  "@context": "dtmi:dtdl:context;2",
  "displayName": "Room",
  "contents": [
    {
      "@type": "Property",
      "name": "temperature",
      "schema": "double"
    },
    {
      "@type": "Telemetry",
      "name": "humidity",
      "schema": "double"
    }
  ]
}
```

Now you have a valid production-ready DTDL model.

---

# 6️⃣ Understanding Schema

The `schema` defines the data type.

Common primitive schemas:

- double
- integer
- string
- boolean
- dateTime

Example:

```json
{
  "@type": "Property",
  "name": "isOccupied",
  "schema": "boolean"
}
```

This means the Room has a boolean state.

---

# 7️⃣ Model Validation Thinking

Before uploading to Azure Digital Twins, ask:

- Is the @id unique?
- Is version correct?
- Did I include @context?
- Are schema types valid?
- Are names meaningful?

DTDL is strict. Syntax errors will fail validation.

---

# 8️⃣ DTMI Naming Best Practices (Architect Level)

Good naming:

```
dtmi:com:yourcompany:building:Room;1
```

Bad naming:

```
dtmi:test:Room;1
```

Production guidelines:

- Use domain-based naming
- Keep hierarchical structure
- Be consistent across models
- Plan naming before implementation

Large systems may have:

```
dtmi:com:company:factory:ProductionLine;1
dtmi:com:company:factory:Machine;1
dtmi:com:company:factory:Sensor;1
```

Think enterprise scale.

---

# 9️⃣ Common Beginner Mistakes

❌ Forgetting version in @id  
❌ Using invalid schema type  
❌ Mixing telemetry and property  
❌ Changing model without version bump  
❌ Poor naming conventions  

Avoid these early.

---

# 🔟 Conceptual Understanding
What did we just do?

We did NOT:

- Create a device
- Send telemetry
- Create a twin

We created a blueprint.

Blueprint → Model  
Model → Twin Instances  
Twin Instances → Graph  

DTDL is the foundation.

---

# Knowledge Check
**Answer mentally:**

1. What is the purpose of @context?
2. Why must we version models?
3. What happens if two models have same DTMI?
4. Is DTDL defining data or structure?

If you can answer clearly → you understand this module.

In **Module 3**, we go deep into:

- Property vs Telemetry
- State vs Event modeling
- When to use each
- Query implications
- Real production scenarios


