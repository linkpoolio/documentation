---
id: market_metrics_api_overview
title: Metrics API Overview
sidebar_label: Overview
---

To provide metrics capability to the Market, we've developed an API that allows users to send SQL queries that returns 
the result data parsed as JSON. At a high-level, under the hood the metrics service utilises 
[TimescaleDB](https://www.timescale.com/) and the API is a basic proxy that provides all the same functionality as if 
the DB was being queried directly.

## Example Usage

URL: POST https://market.link/v1/metrics/

Body:
```sql
SELECT sum(link_reward_sum) as value FROM node_aggregates_by_1d WHERE interval >= now() - interval '7 days';
```

cURL:
```shell
curl --location --request POST 'https://api.market.link/v1/metrics' \
--header 'Content-Type: text/plain' \
--data-raw 'SELECT sum(link_reward_sum) as value FROM node_aggregates_by_1d WHERE interval >= now() - interval '\''7 days'\'';'
```

To understand what aggregate functions are available, view the documentation for PostgreSQL and TimescaleDB:
- [PostgreSQL Aggregate Functions](https://www.postgresql.org/docs/9.5/functions-aggregate.html)
- [TimescaleDB Hyperfunctions](https://docs.timescale.com/api/latest/hyperfunctions/)

All functions in the above documentation are available to use.

## No CORS
It is very important that the data we make available can be queried and displayed outside of just the 
[market.link](https://market.link) website, so we've completely disabled CORS enforcement within the API. This 
enables developers to build their own unique websites that query the metrics without any restrictions. We just 
ask that for any website built, it includes a "Powered by [market.link](https://market.link)" link.

## Querying Best Practises
- Always use the aggregate view tables for any time period over 1 day.
- If building a website that uses the API, avoid using the latest timestamp in the SQL date range. This is due to 
the API cache using a hash of the SQL as the key for cache. Instead, set the timestamp as the next minute, 
previous minute, last day at midnight etc.

## Limits

- 7200 requests per hour. Detailed information about the remaining limit can be found in the `x-ratelimit-*`
 HTTP headers.
- There is a DB enforced query timeout of 15 seconds.
- Data availability and completeness is currently only guaranteed on the 6th of May 2022 or later. 

If you're building a new website that calls the API, the rate limit is grouped by client IP so there's no risk that a
singular website will hit rate limits unless the API is called by a backend rather than client-side.
