---
layout: page
title: Module 7 - Case Study
permalink: /dtdl-course/Module-7-Case-Study/
---

# Module 7 — Case Study

## 🎯 Module Objective

By the end of this module, you will:

- Apply all DTDL concepts in a real-world system
- Build a multi-component Smart Factory model
- Use properties, telemetry, commands, relationships, and components
- Ensure modularity, clarity, and reusability
- Prepare a professional-grade DTDL model ready for Azure Digital Twins

---

# 1️⃣ Scenario: Smart Factory

We are modeling a Smart Factory with:

- Machines producing products
- Sensors monitoring environment
- Energy systems controlling power
- Operators interacting with machines
- Facility monitoring (temperature, humidity, air quality)

We aim for a **modular, query-friendly, and real-world model**.

---

# 2️⃣ Step 1 — Define Base Components

### Machine Interface

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
      "@type": "Telemetry",
      "name": "temperature",
      "schema": "double"
    },
    {
      "@type": "Command",
      "name": "start",
      "request": null,
      "response": null
    }
  ]
}
```

### Sensor Interface

```json
{
  "@id": "dtmi:com:smartfactory:Sensor;1",
  "@type": "Interface",
  "displayName": "Sensor",
  "contents": [
    {
      "@type": "Telemetry",
      "name": "reading",
      "schema": "double"
    },
    {
      "@type": "Property",
      "name": "unit",
      "schema": "string"
    }
  ]
}
```

---

# 3️⃣ Step 2 — Define Energy System

```json
{
  "@id": "dtmi:com:smartfactory:EnergySystem;1",
  "@type": "Interface",
  "displayName": "Energy System",
  "contents": [
    {
      "@type": "Property",
      "name": "voltage",
      "schema": "double"
    },
    {
      "@type": "Property",
      "name": "load",
      "schema": "double"
    },
    {
      "@type": "Relationship",
      "name": "powers",
      "target": "dtmi:com:smartfactory:Machine;1"
    }
  ]
}
```

---

# 4️⃣ Step 3 — Facility Interface

```json
{
  "@id": "dtmi:com:smartfactory:Facility;1",
  "@type": "Interface",
  "displayName": "Facility",
  "contents": [
    {
      "@type": "Component",
      "name": "machines",
      "schema": "dtmi:com:smartfactory:Machine;1"
    },
    {
      "@type": "Component",
      "name": "sensors",
      "schema": "dtmi:com:smartfactory:Sensor;1"
    },
    {
      "@type": "Component",
      "name": "energy",
      "schema": "dtmi:com:smartfactory:EnergySystem;1"
    }
  ]
}
```

---

# 5️⃣ Step 4 — Relationships

- Machines **belongTo** Facility  
- Sensors **monitor** Machines  
- EnergySystem **powers** Machines  

```json
{
  "@type": "Relationship",
  "name": "monitors",
  "target": "dtmi:com:smartfactory:Machine;1"
}
```

---

# 6️⃣ Step 5 — Putting it Together

The factory model now has:

- **Machines**: status, telemetry, commands  
- **Sensors**: readings, units  
- **EnergySystem**: load, voltage, powers machines  
- **Facility**: component aggregation of machines, sensors, energy  

This is a **full-stack real-world model**.

---

# 7️⃣ Step 6 — Practice Exercise

1. Add a **conveyor belt** interface with properties: speed, load, status  
2. Link **conveyor belts** to machines via relationships  
3. Add telemetry for temperature, vibrations, or error codes  
4. Extend facility to include **operators** component

---

# 8️⃣ Step 7 — Best Practices

- Use **components** for reusable parts  
- Keep **telemetry and properties clear and typed**  
- Relationships define how twins interact  
- Avoid over-nesting objects or maps  
- Name interfaces and properties **intuitively**  

---

# Key Takeaways

- Real-world modeling combines all DTDL elements  
- Components + Relationships = modular and scalable models  
- Schema mastery ensures strong validation  
- Telemetry + Commands make the twin interactive  
- Relationships enable querying and analytics

---

# Next Module (Module 8)

- Wrap up the **full DTDL course**  
- Learn **versioning, inheritance, and deploying** to Azure Digital Twins  
- Get ready to **apply models in real scenarios**  

You now have a full Smart Factory model that is production-ready!
