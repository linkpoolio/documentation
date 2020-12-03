---
id: market_adapter_listing_open_adapter
title: Adding an Open Adapter
sidebar_label: An Open Adapter
---

Adapters can now be added from an open GitHub repository, such as the Chainlink Adapter [monorepo](external-adapters-js.md).

We've created a simple form, so it's easy for a registered user to list an open adapter.

| Key               | Type     | Regex Validation                           | Description                                                                                                                                                                                                                                                         |
|-------------------|----------|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Adapter URL       | string   | valid URL                                  | The url of the adapter file in the repo. If no adapter file exists, then enter the  url of the subdirectory for the adapter                                                                                                                                         |
| Name              | string   | `^[a-zA-Z0-9_\-\.\ \+\>\=]{2,30}$`         | The publicly visible name/title of the adapter when listed on the Market. This will show as the title in all pages & search results.                                                                                                                                |
| Description       | string   | `^[a-zA-Z0-9_\-\.\ \,\!\?\+\>\=]{10,255}$` | The publicly visible description of the adapter that is shown within search results and when viewing.                                                                                                                                                               |
| Node Identifier   | string   | `^[a-zA-Z0-9_\-\.\ \+\>\=]{2,30}$`         | The ID of the adapter on Chainlink nodes. This is what is used within `tasks` in a Chainlink Job Specification.                                                                                                                                                     |
| Platforms         | []string | `^[a-zA-Z0-9_\-\.\ \+\>\=]{2,30}$`         | The list of platforms that your adapter supports. Currently only: `Docker`, `AWS Lambda`, `GCP Functions`.                                                                                                                                                          |
| Data Sources Name | string   | `^[a-zA-Z0-9_\-\.\ \+\>\=]{2,30}$`         | The name of that datasource. This is used to match any pre-existing data sources. For example, if you name your data source `Binance`, then the market will use the already preexisting data source called `Binance`.                                               |
| Data Sources URL  | string   | Valid URL                                  | The URL of the datasource. We recommend this be the homepage of the service in question, or the landing page for the API documentation. Multiple datasources can be added.                                                                                          |


## Example
As an example, the [CoinAPI](https://market.link/search/adapters?page=1&search=coinapi) adapter was added from Chainlink's monorepo with the following details:

```example
Adapter URL: https://github.com/smartcontractkit/external-adapters-js/tree/master/coinapi
Name: CoinAPI
Description: External adapter for CoinAPI to access cryptocurrency price data
Node Identifier: coinapi
platforms:
  - Docker
  - AWS Lambda
  - GCP Functions
data_sources:
  - name: CoinAPI
  - url: https://coinapi.io
```
