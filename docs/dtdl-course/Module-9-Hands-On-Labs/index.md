---
layout: page
title: Module 9 - Hands On Lab
permalink: /dtdl-course/Module-9-Hands-On-Lab/
---

# Module 9 — Hands On Lab

## Module Objective

This lab will help you **apply DTDL and Azure Digital Twins concepts** in a real scenario. By the end of this module, you will:

- Create a digital twin instance in Azure  
- Define DTDL models for devices and components  
- Instantiate twins and relationships  
- Send telemetry and query the twins  
- Explore event routing and visualization  

# 1️⃣ Lab Setup

1. Ensure you have an **Azure subscription**.  
2. Create an **Azure Digital Twins instance** via Azure Portal or CLI.  
3. Install **Azure CLI** and the **ADT CLI extension**:  
```bash
az extension add --name azure-iot
```
4. Create a **local project folder** for your lab files.  

---

# 2️⃣ Define Your Models

Create a folder `models/` and add DTDL files for your devices. Example:  

**`Sensor.json`**
```json
{
  "@id": "dtmi:example:Sensor;1",
  "@type": "Interface",
  "displayName": "Temperature Sensor",
  "contents": [
    {
      "@type": "Telemetry",
      "name": "temperature",
      "schema": "double",
      "unit": "degreeCelsius"
    },
    {
      "@type": "Property",
      "name": "location",
      "schema": "string"
    }
  ]
}
```

**`Room.json`**
```json
{
  "@id": "dtmi:example:Room;1",
  "@type": "Interface",
  "displayName": "Room",
  "contents": [
    {
      "@type": "Relationship",
      "name": "hasSensor",
      "target": "dtmi:example:Sensor;1"
    }
  ]
}
```

---

# 3️⃣ Upload Models to Azure

```bash
az dt model create --dt-name <YourADTInstance> --models models/
```

---

# 4️⃣ Instantiate Twins

Create twins for rooms and sensors:  

```bash
az dt twin create --dt-name <YourADTInstance> --twin-id Room1 --model-id dtmi:example:Room;1
az dt twin create --dt-name <YourADTInstance> --twin-id Sensor1 --model-id dtmi:example:Sensor;1
```

---

# 5️⃣ Create Relationships

Link the sensor to the room:

```bash
az dt relationship create --dt-name <YourADTInstance> \
  --relationship-id rel1 \
  --source-id Room1 \
  --relationship-name hasSensor \
  --target-id Sensor1
```

---

# 6️⃣ Send Telemetry

Send simulated telemetry to your sensor twin:  

```bash
az dt telemetry send --dt-name <YourADTInstance> \
  --twin-id Sensor1 \
  --telemetry '{"temperature": 23.5}'
```

---

# 7️⃣ Query Twins

Use ADT Query Language to explore your twins:

```sql
SELECT * FROM digitaltwins Room
```

Query relationships:

```sql
SELECT Sensor.* 
FROM digitaltwins Sensor 
JOIN Room.r HAS_SENSOR_REL 
WHERE Room.$dtId = 'Room1'
```

---

# 8️⃣ Visualization & Insights

- Connect your ADT instance to **Azure Time Series Insights** for rich visualization.  
- Use **Azure IoT Central or Power BI** to monitor sensor telemetry.  
- Explore **Event Grid or Azure Functions** for real-time event processing.  

---

# 9️⃣ Lab Exercises

1. Add a new device twin type (e.g., `Fan`) and connect it to rooms.  
2. Send random telemetry for multiple sensors and visualize it.  
3. Implement an alert using **Azure Functions** when temperature > threshold.  
4. Version your models and deploy updates safely.  

---

# Lab Summary

- You created a fully functional ADT environment  
- Defined DTDL models and relationships  
- Sent telemetry and queried twins  
- Connected data to visualization and event processing  
- Practiced real-world deployment and operational tasks  

---

# Congratulations!

You have **completed the Azure Digital Twins hands-on lab**.  
You now have practical skills to design, deploy, and operate digital twin solutions in Azure.
