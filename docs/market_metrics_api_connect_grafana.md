---
id: market_metrics_api_connect_grafana
title: Connect Grafana to Market Metrics API
sidebar_label: Connect your Grafana
---

Since the Market Metrics API opens up a Prometheus API, you can connect your own Grafana to it and create dashboards as 
if it was your own Prometheus instance.

## Grafana Examples

See the link below for example Grafana dashboards that you can quickly run yourself:

https://github.com/linkpoolio/chainlink-metric-examples

## Adding the Market as a Datasource

Browse to your own Grafana and follow the below steps:

- Add Data Source
- Select "Prometheus"
- Enter a name for that data source, for example: `market`
- Set the URL as: `https://market.link/v1/metrics`
- Set access to: `Server`
    - This step is important, as it will not work set as `Browser` due to CORS.
- Click Save & Test

If Grafana showed the test result as `Data source is working`, you're all setup!
