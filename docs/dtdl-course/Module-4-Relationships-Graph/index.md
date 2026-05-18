---
layout: lesson
title: Module 4 - Relationships & Graph Modeling
permalink: /dtdl-course/Module-4-Relationships-Graph/
---

# Module 4 — Relationships & Graph Modeling

---

## 🎯 Module Objective

By the end of this module, you will:

- Understand how relationships work in DTDL
- Learn how to connect twin models
- Understand graph-based architecture
- Model system dependencies
- Perform impact-aware design thinking
- Think like a Digital Twin Architect

This is where Azure Digital Twins becomes powerful.

---

# 1️⃣ Why Relationships Matter

If you only define properties, you have structured data.

If you define relationships, you have a **graph**.

And graphs enable:

- Dependency tracing
- Impact analysis
- Topology modeling
- Contextual queries

This is the real value of Azure Digital Twins.

---

# 2️⃣ What Is a Relationship?

A relationship connects one twin to another.

Example:

Building → contains → Floor  
Floor → contains → Room  
Room → contains → Device  

Relationships create edges in the twin graph.

---

# 3️⃣ Relationship in DTDL

Here is a basic example:

```json
{
  "@type": "Relationship",
  "name": "contains",
  "target": "dtmi:com:smartbuilding:Room;1"
}
```

Let’s break this down:

- @type → Relationship
- name → Relationship name
- target → Target model DTMI

This means:

This model can connect to another model of type Room.

---

# 4️⃣ Full Example — Building Model

```json
{
  "@id": "dtmi:com:smartbuilding:Building;1",
  "@type": "Interface",
  "@context": "dtmi:dtdl:context;2",
  "displayName": "Building",
  "contents": [
    {
      "@type": "Relationship",
      "name": "contains",
      "target": "dtmi:com:smartbuilding:Floor;1"
    }
  ]
}
```

This defines:

A Building can contain Floors.

But remember:

This defines the allowed relationship type.

The actual connection happens when creating twin instances.

---

# 5️⃣ Direction Matters

Relationships are directional.

Building → contains → Floor  

NOT automatically:

Floor → contains → Building  

If you need bidirectional logic, you must define it separately.

Architectural insight:

Always think about direction carefully.

---

# 6️⃣ Real-World Graph Example — Smart Factory

Let’s model:

Factory  
→ contains → ProductionLine  
→ contains → Machine  
→ monitors → Sensor  

Now you have a dependency chain.

If a Sensor fails:

You can trace upward:

Sensor → Machine → ProductionLine → Factory

This enables impact analysis.

---

# 7️⃣ Why This Is Powerful for SRE

Imagine:

A cooling system fails.

You can ask:

- Which rooms depend on this cooling unit?
- Which machines are affected?
- What production lines stop?

This is graph traversal.

Traditional monitoring systems cannot easily do this.

Azure Digital Twins can.

---

# 8️⃣ Advanced Relationship Properties

Relationships themselves can have properties.

Example:

```json
{
  "@type": "Relationship",
  "name": "suppliesPowerTo",
  "target": "dtmi:com:smartfactory:Machine;1",
  "properties": [
    {
      "@type": "Property",
      "name": "voltage",
      "schema": "double"
    }
  ]
}
```

This means:

Power relationship includes voltage information.

Relationships are not just links.
They can carry metadata.

---

# 9️⃣ Modeling Best Practices

## 🔹 Use Meaningful Relationship Names

Good:

- contains
- monitors
- controls
- suppliesPowerTo
- connectedTo

Bad:

- link1
- relA

Relationships describe semantics.

---

## 🔹 Keep Graph Clean

Avoid:

Over-connecting everything.

Your graph should represent real-world dependencies.

Only model relationships that matter for:

- Queries
- Impact analysis
- Operational reasoning

---

## 🔹 Think in Layers

Layer 1 — Infrastructure  
Layer 2 — Logical grouping  
Layer 3 — Devices  
Layer 4 — Sensors  

Design top-down.

---

# 🔟 Production Architecture Example

Hospital example:

Hospital  
→ contains → Floor  
Floor  
→ contains → Room  
Room  
→ contains → Equipment  
Equipment  
→ poweredBy → PowerUnit  
PowerUnit  
→ backedBy → Generator  

Now imagine:

Generator fails.

Graph query shows:

All equipment → All rooms → All floors → Entire hospital impact.

That is Digital Twin power.

---

# 1️⃣1️⃣ Relationship vs Component (Important Distinction)

Relationship:

- Connects separate twin instances
- Creates graph edges
- Used for topology

Component:

- Embeds a model inside another
- Used for composition

We will deeply cover Components in Module 5.

---

# 1️⃣2️⃣ Query Thinking

When designing relationships, ask:

"What questions will I want to ask?"

Examples:

- Show all machines connected to Line A
- Show all rooms powered by Unit 3
- Show all devices in Building X
- Show impact of cooling failure

Design relationships to answer business questions.

---

# 1️⃣3️⃣ Common Beginner Mistakes

❌ Modeling everything as flat structure  
❌ Not defining relationships  
❌ Wrong direction  
❌ Over-modeling unnecessary connections  
❌ No naming convention  

Remember:

Digital Twins without relationships is just structured JSON.

---

# 🧠 Key Takeaways

- Relationships create graph structure
- Graph enables impact analysis
- Relationships are directional
- Relationships can have properties
- Design based on query needs

This is where DTDL becomes architectural.

---

# 🧪 Practice Exercise

Design this mentally:

Data Center

- DataCenter
- Rack
- Server
- CoolingUnit
- PowerSupply

Think:

Which relationships should exist?

Example:

Rack → contains → Server  
Server → poweredBy → PowerSupply  
Server → cooledBy → CoolingUnit  

Now imagine PowerSupply failure.

Trace impact.

That is graph modeling.

---

# 🚀 What’s Next?

In Module 5, we move to advanced modeling:

- Inheritance (extends)
- Components
- Reusability
- Modular design
- Enterprise modeling patterns

This is where you move from modeler to architect.

