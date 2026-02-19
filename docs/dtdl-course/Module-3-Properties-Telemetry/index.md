---
layout: page
title: Module 3 - Properties vs Telemetry Deep Dive
permalink: /dtdl-course/Module-3-Properties-Telemetry/
---

# Module 3 — Properties vs Telemetry Deep Dive

---

## 🎯 Module Objective

By the end of this module, you will:

- Clearly understand the difference between Property and Telemetry
- Know when to use each
- Avoid the most common modeling mistake in DTDL
- Understand state vs event modeling
- Design models that are query-friendly and production-ready

This is one of the most important modules in DTDL mastery.

---

# 1️⃣ The Core Confusion

Most beginners ask:

> Should this be a Property or Telemetry?

If you misuse these, your entire digital twin architecture becomes messy.

So let’s understand this properly.

---

# 2️⃣ Property — Represents State

A **Property** represents the current state of a twin.

It is stored in the twin instance.

Example:

```json
{
  "@type": "Property",
  "name": "temperature",
  "schema": "double"
}
```

This means:

The Room twin has a stored temperature value.

Important:

- Properties are queryable
- Properties are stored
- Properties represent the current state

Think:

Property = Snapshot of reality

---

# 3️⃣ Telemetry — Represents Events

Telemetry represents data sent from devices.

Example:

```json
{
  "@type": "Telemetry",
  "name": "humidity",
  "schema": "double"
}
```

This means:

Humidity readings are being sent from a device.

Important:

- Telemetry is event-based
- Telemetry is not automatically stored
- Telemetry is not queryable unless processed

Think:

Telemetry = Stream of data

---

# 4️⃣ State vs Event Thinking

This is the architectural mindset.

| Concept | Property | Telemetry |
|----------|-----------|------------|
| Stored in twin | Yes | No |
| Queryable | Yes | No (by default) |
| Represents | State | Event |
| Example | temperature = 24°C | temperature reading at 10:01 AM |

If you want to ask:

"Show me all rooms above 25°C"

Temperature must be a Property.

---

# 5️⃣ Real-World Example — Smart Building

We have:

- Room
- Temperature sensor
- HVAC system

Sensor sends:

- Temperature every 10 seconds

What should we do?

Correct architecture:

Telemetry → arrives  
Application → processes  
Twin Property → updated  

So:

Telemetry feeds the Property.

Property stores the current state.

---

# 6️⃣ Practical Modeling Example

Here is a correct Room model:

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
      "name": "temperatureReading",
      "schema": "double"
    }
  ]
}
```

What happens:

- temperatureReading → real-time data
- temperature → current state

You may update the Property using telemetry processing logic.

---

# 7️⃣ When to Use Property

Use Property when:

- It represents current status
- You need to query it
- It changes over time
- It represents system configuration

Examples:

- temperature
- isOccupied
- operationalStatus
- firmwareVersion
- lastMaintenanceDate

Properties are about state.

---

# 8️⃣ When to Use Telemetry

Use Telemetry when:

- It is streaming data
- It is high frequency
- It represents raw sensor input
- You don’t need to store every value in twin

Examples:

- temperatureReading
- vibrationReading
- pressureReading
- motionDetectedEvent

Telemetry is about events.

---

# 9️⃣ Production Design Pattern

Professional architecture flow:

1. Device sends telemetry
2. IoT Hub receives it
3. Azure Function processes it
4. Twin property gets updated
5. Queries use the Property

This keeps your twin clean and efficient.

Never store high-frequency data as Property updates directly without processing logic.

---

# 🔟 Common Beginner Mistakes

❌ Making everything telemetry  
❌ Making everything property  
❌ Storing high-frequency data as property  
❌ Not separating state from event  
❌ Not thinking about query use cases  

Architecture rule:

Design backward from the question.

Ask:

"What queries will I need to run?"

Then design Property vs Telemetry accordingly.

---

# 1️⃣1️⃣ Advanced Thinking — Derived Properties

You can derive properties from telemetry.

Example:

Telemetry:
- vibrationReading

Derived Property:
- isMachineHealthy (boolean)

System logic:

If vibration > threshold → isMachineHealthy = false

This enables:

- Alerting
- Querying unhealthy machines
- Impact analysis

This is how real industrial systems are built.

---

# 1️⃣2️⃣ Performance Considerations

High-frequency telemetry:

- Should not be stored as twin properties every second
- Can overwhelm system
- Should be processed before updating state

Twin properties should represent meaningful state.

Not raw noise.

---

# 1️⃣3️⃣ Modeling Exercise

Think about a hospital ICU.

What should be Property?

- roomStatus
- oxygenLevelCurrent
- isOccupied

What should be Telemetry?

- heartRateReading
- oxygenSensorReading
- motionEvent

This exercise helps you build modeling intuition.

---

# 🧠 Key Takeaways

- Property = stored state
- Telemetry = streaming event
- Telemetry feeds properties
- Always design based on query needs
- Think state vs event

This distinction separates junior from senior modelers.

---

# 🚀 What’s Next?

In Module 4, we unlock the real power of Azure Digital Twins:

Relationships & Graph Modeling

You will learn:

- How to connect twins
- How to model dependencies
- How to design impact-aware systems
- How to think like a system architect

This is where Digital Twins become truly powerful.
