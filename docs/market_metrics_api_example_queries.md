---
id: market_metrics_api_example_queries
title: Metrics API Example Queries
sidebar_label: Example Queries
---

Below are some example queries that can be used and referenced for calculating certain data points.

### Average Response Gas Price in Gwei

Query:

```
feeds_response_gas_price_average{network_id="1"} / 1000000000
```

[Example Request](https://market.link/metrics-api/?query=feeds_response_gas_price_average{network_id=%221%22}+/+1000000000&start=1599169349&end=1599774149)

### Latest Feed Answer (LINK / USD)

Query:

```
feeds_latest_answer{feed_address=~"(?i)0x32dbd3214ac75223e27e575c53944307914f7a90", network_id=~"1|"} / 10 ^ 8
```

_Note: `(?i)` matches on the feed_address without case sensitivity_

[Example Request](https://market.link/metrics-api/?query=feeds_latest_answer{feed_address=~%22(?i)0x32dbd3214ac75223e27e575c53944307914f7a90%22,+network_id=~%221|%22}+/+10+^+8&start=1599169349&end=1599774149)

### Average Response Latency over 7 days (LINK / USD)

Query:

```
avg_over_time(feeds_response_latency{feed_address=~"(?i)0x32dbd3214ac75223e27e575c53944307914f7a90", network_id=~"1|"}[7d])
```

[Example Request](https://market.link/metrics-api/?query=feeds_latest_answer{feed_address=~%22(?i)0x32dbd3214ac75223e27e575c53944307914f7a90%22,+network_id=~%221|%22}+/+10+^+8&start=1599169349&end=1599774149)

### LINK Earned per Day (LinkPool)

Query:

```
sum(increase(feeds_link_earned{oracle_address=~"(?i)0x240BaE5A27233Fd3aC5440B5a598467725F7D1cd", network_id="1"}[1d])) by (feed_address) / 10 ^ 18
```

[Example Request](https://market-staging.websites.linkpool.io/metrics-api/?query=sum\(increase\(feeds_link_earned{oracle_address=~%22\(?i\)0x240BaE5A27233Fd3aC5440B5a598467725F7D1cd%22,+network_id=%221%22}[1d]\)\)+by+\(feed_address\)+/+10+^+18&start=1599244928&end=1599849728)

### Gas Spent per Day in USD (LinkPool)

```
sum(
  sum(increase(feeds_response_count{network_id="1", oracle_name="LinkPool"}[1d])) by (oracle_name, oracle_address, feed_type) * 
  avg(feeds_response_gas_consumed{network_id="1", oracle_name="LinkPool"}) by (oracle_name, oracle_address, feed_type) * 
  (avg(feeds_response_gas_price) by (oracle_name, oracle_address, feed_type) / 10 ^ 18)
) * (max(feeds_latest_answer{feed_name="ETH / USD",network_id="1"}) / 10 ^ 8)
```

[Example Request](https://market.link/metrics-api/?query=sum\(++sum\(increase\(feeds_response_count{network_id=%221%22,+oracle_name=%22LinkPool%22}[1d]\)\)+by+\(oracle_name,+oracle_address,+feed_type\)+*+++avg\(feeds_response_gas_consumed{network_id=%221%22,+oracle_name=%22LinkPool%22}\)+by+\(oracle_name,+oracle_address,+feed_type\)+*+++\(avg\(feeds_response_gas_price\)+by+\(oracle_name,+oracle_address,+feed_type\)+/+10+^+18\)\)+*+\(max\(feeds_latest_answer{feed_name=%22ETH+/+USD%22,network_id=%221%22}\)+/+10+^+8\)&start=1599244928&end=1599849728)

In this example, you can easily get the ETH figure by removing the multiplication at the end. As the first query within 
the sum block calculates all gas spent denominated in ETH.

### Feed Responses per Day (LinkPool)

```
sum(increase(feeds_response_count{oracle_name="LinkPool", network_id="1"}[1d]))
```

[Example Request](https://market.link/metrics-api/?query=sum\(increase\(feeds_response_count{oracle_name=%22LinkPool%22,+network_id=%221%22}[1d]\)\)&start=1599169576&end=1599774376)
