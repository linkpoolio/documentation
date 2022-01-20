---
id: market_metrics_api_overview
title: Metrics API Overview
sidebar_label: Overview
---

To provide metrics capability to the Market, we've developed a Prometheus based solution that allows open queries with 
unlimited use of the PromQL language. The solution is [Cortex](https://cortexmetrics.io/) powered, with metrics being 
sourced from a custom Prometheus exporter built as a microservice that communicates with the Market backend.

## Available Endpoints

Base URL: https://market.link/v1/metrics/

- api/v1/query_range
- api/v1/query
- api/v1/series
- api/v1/label/\_\_name\_\_/values
- api/v1/metadata

View the [Prometheus API reference](https://prometheus.io/docs/prometheus/latest/querying/api/) for more information 
on request parameters.

## Limits

- Cannot exceed 90 days of range between `start` and `end` query parameters
- The `start` parameter cannot be set 90 days prior to the current time
- No more than 60 data points to be returned in a single query, dictated by the `step` query parameter.
    - For example: a time range of 7 days, is 604800 seconds. To calculate the minimum `step` value, calculate 
    `604800 / 60`. 
- The `time` parameter set in `/api/v1/query` cannot be a timestamp 90 days prior the current time
- 7200 requests per hour. Detailed information about the remaining limit can be found in the `x-ratelimit-*`
 HTTP headers.
    - If a request is present in cache, then it is not counted in the API limits, and `x-ratelimit-*` headers will not 
    be present on response.

## Reading Material

- [PromQL Querying Basics](https://prometheus.io/docs/prometheus/latest/querying/basics/)
- [PromQL Operators](https://prometheus.io/docs/prometheus/latest/querying/operators/)
- [PromQL Functions](https://prometheus.io/docs/prometheus/latest/querying/functions/)
- [Cortex Architecture](https://cortexmetrics.io/docs/architecture/)
  