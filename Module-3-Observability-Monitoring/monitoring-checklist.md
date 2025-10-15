# Azure Monitoring Checklist

## Infrastructure Monitoring
- [ ] Enable Azure Monitor for all VMs and resources
- [ ] Set up VM insights for detailed performance metrics
- [ ] Configure Network Watcher for network diagnostics
- [ ] Enable diagnostic settings for PaaS services
- [ ] Set up Azure Monitor for containers (if using AKS)

## Application Monitoring
- [ ] Set up Application Insights for web apps
- [ ] Configure custom metrics for business KPIs
- [ ] Enable dependency tracking
- [ ] Set up availability tests for critical endpoints
- [ ] Configure distributed tracing

## Metrics and Dashboards
- [ ] Create dashboards for:
  - [ ] CPU, memory, and network metrics
  - [ ] Application response times
  - [ ] Error rates and exceptions
  - [ ] Business metrics
- [ ] Set up workbooks for detailed analysis

## Alerting Strategy
- [ ] Configure alerts for:
  - [ ] Critical thresholds (e.g., CPU > 70%, Memory > 80%)
  - [ ] Application errors and exceptions
  - [ ] SLA breaches
  - [ ] Security incidents
- [ ] Set up action groups for notifications
- [ ] Define alert severity levels
- [ ] Configure smart groups for alert correlation

## Log Analytics
- [ ] Set up Log Analytics workspace
- [ ] Configure log collection for all resources
- [ ] Create custom log queries for common scenarios
- [ ] Set up log retention policies
- [ ] Enable sentinel for security logs (if required)

## Documentation and Maintenance
- [ ] Document monitoring setup and architecture
- [ ] Create runbooks for alert response
- [ ] Regular review of monitoring effectiveness
- [ ] Maintain cost optimization for monitoring
- [ ] Schedule periodic testing of alert notifications
