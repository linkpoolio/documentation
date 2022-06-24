---
id: market_metrics_api_examples
title: Metrics Query Examples
sidebar_label: Query Examples
---

Below are some example SQL queries ranging from simple to more complicated. All the below are used on [market.link](https://market.link).

You can contribute to this page by editing [this file](https://github.com/linkpoolio/documentation/blob/develop/docs/market_metrics_api_examples.md) and raising a pull request.

## Global Examples

### Total Daily LINK Rewards

```SQL
SELECT network_group, network_name, sum(link_reward_sum) as "value"
FROM feed_aggregates_by_1d
WHERE interval BETWEEN 'Thu, 16 Jun 2022 23:01:00 GMT' AND 'Thu, 23 Jun 2022 22:58:00 GMT'
AND network_name IN ('Mainnet')
GROUP BY network_group, network_name
ORDER BY "value" DESC;
```

### Total Daily Feed Transactions

```SQL
SELECT network_group, network_name, sum(transaction_count) as "value"
FROM feed_aggregates_by_1d
WHERE interval BETWEEN 'Thu, 16 Jun 2022 23:01:00 GMT' AND 'Thu, 23 Jun 2022 22:58:00 GMT'
AND network_name IN ('Mainnet')
GROUP BY network_group, network_name
ORDER BY "value" DESC;
```

### Total Daily VRF v1 & v2 Requests

```SQL
SELECT time, sum(value) as value
FROM (SELECT time_bucket_gapfill('86400s', ts) as time, coalesce(count(*), 0) as "value"
      FROM vrf_v1_events
      WHERE ts BETWEEN 'Mon, 23 May 2022 23:01:00 GMT' AND 'Thu, 23 Jun 2022 22:58:00 GMT'
        AND event_name = 'randomness_request'
        AND network_name IN ('Mainnet')
      GROUP BY time
      UNION
      SELECT time_bucket_gapfill('86400s', ts) as time, coalesce(count(*), 0) as "value"
      FROM vrf_v2_events
      WHERE ts BETWEEN 'Mon, 23 May 2022 23:01:00 GMT' AND 'Thu, 23 Jun 2022 22:58:00 GMT'
        AND event_name = 'random_words_requested'
        AND network_name IN ('Mainnet')
      GROUP BY time
      ORDER BY time) as requests
GROUP BY time;
```

### Active Nodes by Network

```SQL
SELECT network_group, network_name, count(DISTINCT node_id) as "value"
FROM node_aggregates_by_1d
WHERE interval BETWEEN 'Mon, 23 May 2022 23:01:00 GMT' AND 'Thu, 23 Jun 2022 22:58:00 GMT'
AND network_name IN ('Mainnet')
GROUP BY network_group, network_name
ORDER BY "value" DESC;
```

## Per Feed Examples

### BTC / USD Answer Every 5min for 30 Days

```SQL
SELECT time_bucket('5m', interval) as time,
       network_id,
       network_group,
       feed_address,
       feed_name,
       locf(last(answer, interval), treat_null_as_missing => true) as "value"
FROM feed_answers_by_5m
WHERE feed_name = 'BTC / USD'
  AND interval >= now() - interval '30 days'
  AND network_name = 'Mainnet'
GROUP BY time, network_id, network_group, feed_address, feed_name
ORDER BY time;
```

### Daily LINK Rewards for BTC / USD

```SQL
SELECT "interval" as time,
       network_id,
       network_group,
       feed_address,
       coalesce(sum(link_reward_sum), 0) as "value"
FROM feed_aggregates_by_1d
WHERE feed_name = 'BTC / USD'
  AND "interval" >= now() - interval '30 days'
  AND network_name = 'Mainnet'
GROUP BY time, network_id,
         network_group,
         feed_address
ORDER BY time DESC;
```

### Top Nodes by LINK Rewards on BTC / USD

```SQL
SELECT node_name, COALESCE(sum(link_reward_sum), 0) as "value"
FROM feed_node_aggregates_by_1d
WHERE feed_name = 'BTC / USD'
  AND "interval" >= now() - interval '30 days'
  AND network_name = 'Mainnet'
GROUP BY node_name
ORDER BY value DESC;
```

## Per Node Examples

### Daily Gas Costs in USD

```SQL
SELECT time,
       network_id,
       network_group,
       node_name,
       coalesce(sum(gas_costs), 0) as "value"
FROM (SELECT events.interval                                       as time,
             node_name,
             network_group,
             sum(events.total_eth) * last(gas_pair.answer, answer) as gas_costs,
             network_id
      FROM (
               (SELECT interval,
                       node_id,
                       node_name,
                       network_group,
                       network_id,
                       ether_spent_sum as total_eth
                FROM node_aggregates_by_1d
                WHERE node_name = 'LinkPool'
                  AND "interval" >= now() - interval '30 days'
                  AND network_name = 'Mainnet'
                ORDER BY interval) events LEFT JOIN (SELECT id, gas_token
                                                     FROM networks) as gas_token ON events.network_id = gas_token.id LEFT JOIN (SELECT interval,
                                                                                                                                       feed_name,
                                                                                                                                       last(answer, interval) as answer
                                                                                                                                FROM feed_answers_by_1d
                                                                                                                                WHERE "interval" >= now() - interval '30 days'
                                                                                                                                  AND feed_name IN
                                                                                                                                      (SELECT DISTINCT (gas_token || ' / USD') as gas_token FROM networks)
                                                                                                                                GROUP BY interval, feed_name
                                                                                                                                ORDER BY interval) gas_pair
               ON events.interval = gas_pair.interval AND gas_token.gas_token || ' / USD' = gas_pair.feed_name
               )
      GROUP BY events.interval, network_id, node_id, node_name, network_group) as gas_sums
GROUP BY time, network_id, network_group, node_name;
```

### Daily Profit in USD

```SQL
SELECT time,
       network_id,
       network_group,
       node_name,
       coalesce(sum(link_rewards) - sum(gas_costs), 0) as "value"
FROM (SELECT events.interval                                             as time,
             network_id,
             network_group,
             node_name,
             sum(events.total_eth) * last(gas_pair.answer, answer)       as gas_costs,
             sum(events.total_link) * last(link_usd.link_answer, answer) as link_rewards
      FROM (
               (SELECT interval,
                       node_id,
                       network_id,
                       network_group,
                       node_name,
                       ether_spent_sum as total_eth,
                       link_reward_sum as total_link
                FROM node_aggregates_by_1d
                WHERE node_name = 'LinkPool'
                  AND "interval" >= now() - interval '30 days'
                  AND network_name = 'Mainnet'
                ORDER BY interval) events LEFT JOIN (SELECT id, gas_token
                                                     FROM networks) as gas_token ON events.network_id = gas_token.id LEFT JOIN (SELECT interval, feed_name, last(answer, interval) as answer
                                                                                                                                FROM feed_answers_by_1d
                                                                                                                                WHERE "interval" >= now() - interval '30 days'
                                                                                                                                  AND feed_name IN
                                                                                                                                      (SELECT DISTINCT (gas_token || ' / USD') as gas_token FROM networks)
                                                                                                                                GROUP BY interval, feed_name
                                                                                                                                ORDER BY interval) gas_pair ON
                           events.interval = gas_pair.interval AND
                           gas_token.gas_token || ' / USD' = gas_pair.feed_name LEFT JOIN
                   (SELECT interval, last(answer, interval) as link_answer
                    FROM feed_answers_by_1d
                    WHERE feed_name = 'LINK / USD'
                      AND network_name = 'Mainnet'
                      AND "interval" >= now() - interval '30 days'
                    GROUP BY "interval"
                    ORDER BY "interval") link_usd ON events.interval = link_usd.interval
               )
      GROUP BY events.interval,
               network_id,
               node_id,
               network_id,
               network_group,
               node_name) as gas_sums
GROUP BY time, network_id,
         network_group,
         node_name;
```