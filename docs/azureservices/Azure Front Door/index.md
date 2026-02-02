---
layout: page
title: Azure Front Door A Modern Global CDN + Edge Platform
---

# Azure Front Door: A Modern Global CDN + Edge Platform

### Why SREs Should Care About Azure Front Door
In modern cloud architectures, **users never talk to your backend directly**.

They talk to:
- an edge
- a global entry point
- a smart routing layer

That layer decides:
- where traffic goes
- how fast it reaches
- what happens when things fail

In Azure, **Azure Front Door (AFD)** plays this role.

From an SRE perspective, Azure Front Door is not just a CDN — it is a **reliability, performance, and protection layer** at the edge.

### What Exactly Is Azure Front Door?

**Azure Front Door (Standard / Premium) is a global, layer-7 (HTTP/HTTPS) edge service** that combines:
- Global HTTP load balancing
- Content Delivery Network (CDN)
- Edge caching
- Web Application Firewall (WAF)
- Smart routing & failover

_Azure Front Door is the first hop of user traffic that optimizes latency, absorbs failures, and protects origins before requests reach your infrastructure._

### Azure CDN vs Azure Front Door
| Feature                 | Azure CDN        | Azure Front Door          |
| ----------------------- | ---------------- | ------------------------- |
| Static content delivery | ✅                | ✅                         |
| Edge caching            | ✅                | ✅                         |
| Global load balancing   | ❌                | ✅                         |
| Origin health probes    | ❌                | ✅                         |
| Automatic failover      | ❌                | ✅                         |
| WAF integration         | Limited          | Built-in                  |
| Multi-region routing    | ❌                | ✅                         |
| SRE use cases           | Performance only | Performance + Reliability |

- Azure CDN = performance
- Azure Front Door = performance + resilience + security

### Where Azure Front Door Sits in Architecture

Backend never sees the real internet traffic directly — Azure Front Door shields it.

## Core Components of Azure Front Door

### Frontend (Entry Point)
- Public endpoint (DNS)
- TLS termination
- First layer of security

Think of it as: _“The global door to your application.”_

### Backend Pools
Backends can be:
- App Services
- AKS ingress
- VM scale sets
- Azure Functions
- Any public endpoint

_You can add:_
- Multiple regions
- Multiple services
- Priority & weight

### Routing Rules
Routing rules define:
- Which requests go where
- Based on path, host, protocol

_Example:_
- /api/* → AKS
- /static/* → Blob Storage

### Health Probes (Critical for SREs)
Azure Front Door continuously checks:
- Backend health
- HTTP status
- Response time

If a backend fails:
- Traffic is automatically routed away
- No manual intervention required

### Azure Front Door as a CDN (Edge Caching)
Azure Front Door caches:
- Static assets
- Cacheable responses
- Content based on headers

_Cache Hit Flow: User → Edge → Cache Hit → Response
Cache Miss Flow: User → Edge → Origin → Cache → Response_

## Azure Front Door for Reliability Engineering

### Global Failover (Built-in)

If Region A fails:
- Front Door detects unhealthy backend
- Routes traffic to Region B
- Users may not even notice

No DNS changes
No redeployments
No runbook execution

### Origin Shielding

CDN + Front Door:
- Prevents sudden traffic bursts from hitting origin
- Smooths traffic
- Protects backend from overload

This is extremely important during:
- Viral traffic
- DDoS attempts
- Incident recovery

### Azure Front Door + WAF (Security at Edge)

Azure Front Door (Premium) integrates **Web Application Firewall**:
- SQL injection protection
- XSS protection
- Bot mitigation
- Rate limiting
- Geo-blocking

_Security controls live outside your app, reducing blast radius._

### Observability: What SREs Must Monitor

**Key metrics:**
- Request latency (edge vs backend)
- Cache hit ratio
- Backend health status
- 4xx / 5xx error rates
- WAF blocked requests

_When Front Door is present, origin metrics alone are not enough._

## Failure Scenarios
### Scenario 1: Backend Down
- Front Door serves cached responses
- Routes traffic to healthy region
- Users see minimal impact

### Scenario 2: Partial Region Failure
- Health probes fail
- Traffic shifts automatically
- No DNS TTL delays

### Scenario 3: Traffic Spike
- Edge absorbs load
- Backend protected
- Cache hit ratio increases

## Azure Front Door in Chaos Engineering

**When chaos testing:**
- Origin failures may be masked
- Latency injection may be hidden by cache
- Observability must include edge metrics

_If you test reliability without Front Door in scope, the test is incomplete._

## When NOT to Use Azure Front Door
- Internal-only applications
- Non-HTTP workloads
- Ultra-low latency trading systems (special cases)
- Stateful TCP protocols
