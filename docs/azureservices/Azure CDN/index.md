---
layout: page
title: Azure Content Delivery Network
---

# Azure Content Delivery Network
### What it is Azure CDN? 

Iis a globally distributed network of edge servers that:
- caches content close to users
- reduces latency
- reduces origin load
- improves availability
- speeds up delivery of static and dynamic content

### What Azure CDN delivers
- Static files (JS, CSS, images, videos)
- API responses (cacheable)
- Downloads
- Streaming content
- Web assets

### Azure CDN Providers
Azure CDN is actually backed by multiple providers:

| Provider  | Notes                         |
| --------- | ----------------------------- |
| Microsoft | Native Microsoft edge network |
| Akamai    | Enterprise CDN backbone       |
| Verizon   | Legacy enterprise CDN         |

This matters for SREs because:
- performance varies
- rules engine capabilities differ
- pricing models differ
- feature sets differ

## Azure Front Door (Modern Global CDN + Edge Platform)
For modern architectures, Azure now recommends:

### Azure Front Door (Standard / Premium)
This is more than CDN

### Front Door vs Azure CDN
| Feature                      | Azure CDN | Azure Front Door |
| ---------------------------- | --------- | ---------------- |
| Edge caching                 | ✅         | ✅                |
| Static content               | ✅         | ✅                |
| Dynamic content acceleration | Limited   | Strong           |
| Global routing               | ❌         | ✅                |
| WAF integration              | Limited   | Built-in         |
| TLS offload                  | Basic     | Advanced         |
| Multi-region failover        | ❌         | ✅                |
| Health probes                | ❌         | ✅                |
| Origin failover              | ❌         | ✅                |

### How Azure CDN Works
Request Path
```
User → Nearest Edge POP → Cache Check → Origin → Cache → Serve
```

### Step-by-step:

1️. User requests asset
2. DNS routes to nearest Azure edge location
3️. Edge checks cache
4️. If hit → serve immediately
5️. If miss → fetch from origin
6️. Cache it
7️. Serve to user

### Origin Sources Supported
Azure CDN can pull from:
- Azure Blob Storage
- App Service
- VM endpoints
- AKS ingress
- Azure Front Door backend
- On-prem servers
- Any public HTTP endpoint

### SRE Metrics to Monitor (Important for your blog)

**Performance**
- Cache hit ratio
- Origin latency
- Edge latency
- Throughput
- Requests per second

**Reliability**
- Origin error rate
- Edge error rate
- 5xx rates
- Backend health

**Cost Efficiency**
- Cache efficiency %
- Data transfer savings
- Egress reduction

### Security Controls
- HTTPS enforcement
- TLS versions
- Custom certificates
- DDoS mitigation (with Azure DDoS + Front Door)
- WAF rules (Front Door Premium)
- Geo-blocking
- Rate limiting

### Azure CDN + SRE Use Cases
**Perfect for:**
- Reducing origin pressure
- Handling traffic spikes
- Serving global static assets
- Improving web performance
- Protecting origin servers
- Disaster traffic offload
