---
layout: page
title: Module 6 - Schema Types, Enums & Complex Models
permalink: /dtdl-course/Module-6-Schemas-DeepDive/
---

# Module 6 — Schema Types, Enums & Complex Models

---

## 🎯 Module Objective

By the end of this module, you will:

- Master primitive schema types
- Use complex schemas (Enum, Object, Array, Map)
- Design structured properties
- Build strongly-validated models
- Model real enterprise-grade systems
- Avoid weak data modeling practices

This module transforms your DTDL from basic to professional.

---

# 1️⃣ What Is a Schema?

In DTDL, a **schema** defines the type of data.

Example:

```json
{
  "@type": "Property",
  "name": "temperature",
  "schema": "double"
}
```

Here:

`double` = schema

Schemas define:

- Data type
- Validation
- Structure

Think of schema as:

Data contract.

---

# 2️⃣ Primitive Schema Types

These are the simplest types.

Common primitives:

- boolean
- integer
- double
- string
- date
- dateTime
- time
- duration

Example:

```json
{
  "@type": "Property",
  "name": "isOperational",
  "schema": "boolean"
}
```

Use primitive types when:

- Data is simple
- No structure required

---

# 3️⃣ Enum — Controlled Value Sets

Enum restricts values to a predefined list.

Example:

```json
{
  "@type": "Property",
  "name": "operationalStatus",
  "schema": {
    "@type": "Enum",
    "valueSchema": "string",
    "enumValues": [
      { "name": "Running", "enumValue": "Running" },
      { "name": "Stopped", "enumValue": "Stopped" },
      { "name": "Maintenance", "enumValue": "Maintenance" }
    ]
  }
}
```

Now only those values are valid.

Why this is powerful:

- Prevents invalid data
- Standardizes state
- Improves query reliability

Always use Enum when values are predictable.

---

# 4️⃣ Object — Structured Data

Objects allow grouping multiple related fields.

Example:

```json
{
  "@type": "Property",
  "name": "location",
  "schema": {
    "@type": "Object",
    "fields": [
      {
        "name": "latitude",
        "schema": "double"
      },
      {
        "name": "longitude",
        "schema": "double"
      }
    ]
  }
}
```

Now location is structured.

Instead of two separate properties:

- latitude
- longitude

You have a single structured object.

Use Object when:

- Data belongs together logically
- You want grouping
- It represents a concept

---

# 5️⃣ Array — Multiple Values

Array allows storing multiple values.

Example:

```json
{
  "@type": "Property",
  "name": "supportedProtocols",
  "schema": {
    "@type": "Array",
    "elementSchema": "string"
  }
}
```

Now the twin can store:

["MQTT", "HTTP", "AMQP"]

Use Array when:

- Multiple values of same type
- Dynamic lists
- Tags
- Capabilities

---

# 6️⃣ Map — Key-Value Structure

Map stores dynamic key-value pairs.

Example:

```json
{
  "@type": "Property",
  "name": "configuration",
  "schema": {
    "@type": "Map",
    "mapKey": {
      "name": "configName",
      "schema": "string"
    },
    "mapValue": {
      "name": "configValue",
      "schema": "string"
    }
  }
}
```

This allows flexible configuration storage.

Use Map when:

- Keys are dynamic
- Structure is not fixed
- You need flexibility

---

# 7️⃣ Complex Example — Smart Machine Model

Here is a production-style model combining everything:

```json
{
  "@id": "dtmi:com:smartfactory:Machine;1",
  "@type": "Interface",
  "@context": "dtmi:dtdl:context;2",
  "displayName": "Machine",
  "contents": [
    {
      "@type": "Property",
      "name": "operationalStatus",
      "schema": {
        "@type": "Enum",
        "valueSchema": "string",
        "enumValues": [
          { "name": "Running", "enumValue": "Running" },
          { "name": "Stopped", "enumValue": "Stopped" },
          { "name": "Maintenance", "enumValue": "Maintenance" }
        ]
      }
    },
    {
      "@type": "Property",
      "name": "location",
      "schema": {
        "@type": "Object",
        "fields": [
          { "name": "x", "schema": "double" },
          { "name": "y", "schema": "double" }
        ]
      }
    },
    {
      "@type": "Property",
      "name": "supportedModes",
      "schema": {
        "@type": "Array",
        "elementSchema": "string"
      }
    }
  ]
}
```

This is real-world ready modeling.

---

# 8️⃣ When to Use What?

Use:

Primitive → Simple values  
Enum → Controlled states  
Object → Grouped structured data  
Array → Lists  
Map → Flexible dynamic key-value  

Design rule:

Use the simplest schema that solves the problem.

---

# 9️⃣ Over-Engineering Warning

Avoid:

❌ Using Object when primitive is enough  
❌ Using Map for everything  
❌ Making deeply nested structures  
❌ Creating overly complex schemas  

Remember:

Digital Twin modeling is about clarity.

Not showing complexity.

---

# 🔟 Schema Validation Thinking

Ask:

- Does this value have limited states? → Enum
- Does this represent a structured concept? → Object
- Is it a list? → Array
- Is it dynamic key-value? → Map

Model intentionally.

---

# 1️⃣1️⃣ Enterprise Modeling Example — Energy System

PowerUnit:

- status → Enum
- load → double
- voltage → double
- connectedDevices → Array
- configuration → Map

This creates:

Strong validation  
Clear semantics  
Query-friendly structure  

---

# 🧠 Key Takeaways

- Schema defines data contract
- Enum improves reliability
- Object groups related data
- Array supports lists
- Map allows flexibility
- Use structure intentionally

Now your DTDL is expressive and controlled.

---

# 🧪 Practice Exercise

Model a Smart Elevator.

Think:

- currentFloor → integer
- direction → Enum (Up, Down, Idle)
- capacity → integer
- passengers → Array?
- lastMaintenance → dateTime

Design the correct schema types.

That is professional modeling thinking.

---

# 🚀 What’s Next?

In Module 7 we build:

A complete Real-World Smart Factory Case Study

You will:

- Design full model hierarchy
- Apply inheritance
- Use components
- Define relationships
- Combine schema mastery

This is where everything comes together.

You are now modeling like an enterprise architect.
