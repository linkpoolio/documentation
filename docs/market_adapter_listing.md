---
id: market_adapter_listing
title: Adapter Configuration
sidebar_label: Adapter Configuration
---

For an adapter to be supported on the Market, it needs a configuration file that describes and species the adapter to 
be committed into the repository.

## Requirements

- **Visibly Public Repository:** No private GitHub repositories or forked repositories can be added.
- **Adapter Configuration:** Repository has a committed `.adapter.yml` file in any folder or with any filename matching 
to the schema described below.

## Configuration Schema

Full example (.adapter.yml):

```yaml
name: Example
description: An example adapter that does something.
node_identifier: example
platforms:
  - Docker
  - AWS Lambda
  - GCP Functions
data_sources:
  - name: Example
    url: https://example.com
parameters:
  - base
  - quote
```

| Key               | Type     | Regex Validation                           | Description                                                                                                                                                                                                                                                         |
|-------------------|----------|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name              | string   | `^[a-zA-Z0-9_\-\.\ \+\>\=]{2,50}$`         | The publicly visible name/title of the adapter when listed on the Market. This will show as the title in all pages & search results.                                                                                                                                |
| node_identifier   | string   | `^[a-zA-Z0-9_\-\.\ \+\>\=]{2,50}$`         | The ID of the adapter on Chainlink nodes. This is what is used within `tasks` in a Chainlink Job Specification.                                                                                                                                                     |
| description       | string   | `^[a-zA-Z0-9_\-\.\ \,\!\?\+\>\=]{10,480}$` | The publicly visible description of the adapter that is shown within search results and when viewing.                                                                                                                                                               |
| platforms         | []string | `^[a-zA-Z0-9_\-\.\ \+\>\=]{2,30}$`         | The list of platforms that your adapter supports. Currently only: `Docker`, `AWS Lambda`, `GCP Functions`.                                                                                                                                                             |
| data_sources.name | string   | `^[a-zA-Z0-9_\-\.\ \+\>\=]{2,30}$`         | The name of that datasource. This is used to match any pre-existing data sources. For example, if you name your data source `Binance`, then the market will use the already preexisting data source called `Binance`.                                               |
| data_sources.url  | string   | Valid URL                                  | The URL of the datasource. We recommend this be the homepage of the service in question, or the landing page for the API documenation.                                                                                                                              |
| parameters        | []string | `^[a-zA-Z0-9_\-]{1,30}$`                   | The list of parameters for your adapter. These parameters will be shown to the node operators/users when using your adapter. For example, when creating a job if you select an added adapter, it will show the list of parameter keys as designated by this field.  |
