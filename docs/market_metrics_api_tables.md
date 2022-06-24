---
id: market_metrics_api_tables
title: Metrics Available Tables
sidebar_label: Available Tables
---

## Available Tables

The tables available to query are as follows:

| Table                 | Description                                                                                                                                                              |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| feed_events           | All of the raw feed updates for all feed types                                                                                                                           |
| feed_users            | The raw data of contracts that consume Chainlink feeds. Any deployed contract that calls the`latestRoundData()` or `latestAnswer()` getters within aggregator contracts. |
| keeper_events         | Raw table of all Keeper upkeep events                                                                                                                                    |
| keeper_registries     | Table that lists all Keeper registry contracts by chain ID.                                                                                                              |
| networks              | Table of all networks, including the gas token for all networks.                                                                                                         |
| oracle_request_events | All direct request events. This means any Chainlink requests that use either the`Operator` or `Oracle` contracts.                                                        |
| vrf_v1_coordinators   | Table of the VRF v1 coordinator contracts by chain ID.                                                                                                                   |
| vrf_v1_events         | Table of all VRF v1 requests and fulfillments.                                                                                                                           |
| vrf_v2_coordinators   | Table of the VRF v2 coordinator contracts by chain ID.                                                                                                                   |
| vrf_v2_events         | Table of all VRF v2 requests and fulfillments.                                                                                                                           |

## Aggregate Views

Aggregate views use TimescaleDB's [continuous aggregates](https://docs.timescale.com/timescaledb/latest/how-to-guides/continuous-aggregates/) 
to create aggregate views which drastically increase query performance over large time periods.

**Important:** For any query that has a time range over a day, it is recommended to use the aggregate tables.

There are five main groups of aggregate tables:

| Group                | Description                                                                             |
|----------------------|-----------------------------------------------------------------------------------------|
| feed_aggregates      | Aggregation of feed data by each individual feed by a given interval.                   |
| feed_answers         | The last answer of each individual feed by a given interval.                            |
| feed_node_aggregates | Aggregation of feed and node data by each individual feed and node by a given interval. |
| feed_users           | Aggregation of feed user data by user contract address.                                 |
| node_aggregates      | Aggregation of node data by each individual node by a given interval.                   |

All aggregate tables are suffixed by their interval. There's 5 intervals for each table:
- 5m
- 1h
- 12h
- 1d
- 7d

To give an example of aggregate view table names:
- feed_aggregates_by_5m
- feed_users_by_1d
- node_aggregates_by_1h

etc.

### Real-time Aggregates

In aid to further boost performance and data liveness, there's a difference with how different interval aggregate views 
collate data. The shorter interval aggregate views when queried will in real-time fill any gaps in the data from 
when the last refresh job was ran, the larger time periods will not, resulting in a slight lag in the data as the most 
recent data will only be populated when the refresh job is ran.

Real-time intervals are:
- 5m
- 1h

Cron-only intervals are:
- 12h
- 1d
- 7d


## Understanding Schema

To understand how to build SQL queries for each table, it's recommended to do a basic select on each table to understand
the schema. For example:

```SQL
SELECT * FROM feed_events ORDER BY ts DESC LIMIT 5;
```

Or for an aggregate view:

```SQL
SELECT * FROM feed_aggregates_by_1d ORDER BY "interval" DESC LIMIT 5;
```
