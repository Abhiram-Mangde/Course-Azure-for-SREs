---
layout: page
title: Module 10 - Capstone Project
permalink: /dtdl-course/Module-10-Capstone-Project/
---

# Module 10 — Capstone Project
## Module Objective

The Capstone Project will help you **consolidate all your learning** from the Azure Digital Twins (ADT) and DTDL course. By the end of this module, you will:

- Design a complex digital twin solution  
- Model multiple devices, components, and relationships using DTDL  
- Simulate real-world telemetry  
- Query, monitor, and visualize twin data  
- Implement event-driven processing and alerts  

# 1️⃣ Project Scenario

You are tasked with building a **Smart Building Digital Twin**:

- Multiple floors with rooms, sensors, and devices  
- HVAC systems, temperature and humidity sensors, lighting, and fans  
- Real-time telemetry and state updates  
- Event-driven alerts (e.g., high temperature or power failure)  
- Dashboard visualization using Azure Time Series Insights or Power BI  

---

# 2️⃣ Design Your Models

Suggested models:

**Room.json**
```json
{
  "@id": "dtmi:capstone:Room;1",
  "@type": "Interface",
  "displayName": "Room",
  "contents": [
    {
      "@type": "Property",
      "name": "roomNumber",
      "schema": "string"
    },
    {
      "@type": "Relationship",
      "name": "containsDevice",
      "target": "dtmi:capstone:Device;1"
    }
  ]
}
```

**Device.json**
```json
{
  "@id": "dtmi:capstone:Device;1",
  "@type": "Interface",
  "displayName": "Device",
  "contents": [
    {
      "@type": "Telemetry",
      "name": "status",
      "schema": "string"
    },
    {
      "@type": "Property",
      "name": "lastMaintenance",
      "schema": "dateTime"
    }
  ]
}
```

**Sensor.json**
```json
{
  "@id": "dtmi:capstone:Sensor;1",
  "@type": "Interface",
  "displayName": "Sensor",
  "contents": [
    {
      "@type": "Telemetry",
      "name": "temperature",
      "schema": "double"
    },
    {
      "@type": "Telemetry",
      "name": "humidity",
      "schema": "double"
    },
    {
      "@type": "Property",
      "name": "location",
      "schema": "string"
    }
  ]
}
```

---

# 3️⃣ Deploy Models

```bash
az dt model create --dt-name <YourADTInstance> --models models/
```

---

# 4️⃣ Create Twins and Relationships

1. Create room twins for each floor:  

```bash
az dt twin create --dt-name <YourADTInstance> --twin-id Floor1Room101 --model-id dtmi:capstone:Room;1
```

2. Create device and sensor twins and link them to rooms:

```bash
az dt twin create --dt-name <YourADTInstance> --twin-id Sensor1 --model-id dtmi:capstone:Sensor;1
az dt relationship create --dt-name <YourADTInstance> \
  --relationship-id rel1 \
  --source-id Floor1Room101 \
  --relationship-name containsDevice \
  --target-id Sensor1
```

---

# 5️⃣ Simulate Telemetry

Use scripts or the ADT CLI to send continuous telemetry:

```bash
az dt telemetry send --dt-name <YourADTInstance> \
  --twin-id Sensor1 \
  --telemetry '{"temperature": 24.5, "humidity": 45.2}'
```

---

# 6️⃣ Query Twins

Example queries:

```sql
-- All sensors in Floor 1
SELECT Sensor.* 
FROM digitaltwins Sensor 
JOIN Floor1Room101.r containsDevice

-- Average temperature per floor
SELECT AVG(Sensor.temperature) 
FROM digitaltwins Sensor 
JOIN Room.r containsDevice
```

---

# 7️⃣ Event Processing

- Use **Azure Event Grid** or **Azure Functions** to trigger alerts  
- Example: Notify when temperature > 28°C  

```python
# Python Function example
if temperature > 28:
    send_alert("Temperature exceeded threshold in Room 101")
```

---

# 8️⃣ Visualization

- Connect to **Time Series Insights**, **Power BI**, or **IoT Central**  
- Create dashboards for sensors, rooms, and devices  
- Monitor trends and generate alerts  

---

# 9️⃣ Capstone Exercises

1. Add multiple floors with 3–5 rooms each  
2. Integrate lights, fans, and HVAC devices with telemetry  
3. Implement maintenance scheduling for devices  
4. Simulate real-time occupancy and energy usage  
5. Build dashboards and alerts for key metrics  

---

# Capstone Summary

- You designed a complete Smart Building Digital Twin  
- Created DTDL models and instantiated twins with relationships  
- Sent and analyzed telemetry data  
- Implemented event-driven automation and visualization  

---

# Congratulations!

You have **completed the Azure Digital Twins Capstone Project**.  
You are now capable of **designing and implementing production-grade ADT solutions**.
