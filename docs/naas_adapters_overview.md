---
id: naas_adapters_overview
title: NaaS Adapters Overview
sidebar_label: Overview
---

Node as a Service (NaaS) offers the ability to deploy a private, secure Chainlink External Adapter. External adapters are how Chainlink enables easy integration of custom computations and specialized APIs (to learn more about Chainlink Adapters, [visit their documentation](https://docs.chain.link/docs/external-adapters/).

## Types of Adapters

### Open Adapters

Open Adapters are publicly available External Adapters via the [Official Chainlink External Adapter Monorepo (NodeJS)](https://github.com/smartcontractkit/external-adapters-js). To browse currently available Open Adapters, checkout [LinkPool's Market Adapter](https://market.link/search/adapters) explorer.

### Generic Adapters

A Generic Adapter is a LinkPool developed and managed External Adapter which enables access to any publicly available API. In addition, a Generic Adapter provides the ability to specifiy authentication information to the API, such as Bearer Token, username and password, API client id and key, etc. Effectually, Generic Adapters enable Smart Contract developers to leverage the power of Chainlink's ecosystem to make available data from any publicly available API on-chain. Most notably, Smart Contract developers will not need to build their own custom External Adapter, and can instead use this single Generic Adapter for all their custom data needs. 

## Getting Started

Installing an adapter can be accomplished with just a few steps:

- Navigate to [naas.link/adapters](https://naas.link/adapters)
- Select the Adapter you'd like to deploy 
- Specify a name, region and environment variables
- Deploy the Adapter

The External Adapter will be available within a few moments. Once the External Adapter is live, you will be provided a URL to the External Adapter on the External Adapter detail page. This is the URL you will use to specify when creating the [Bridge](https://docs.chain.link/docs/node-operators/) to the External Adapter in your Chainlink Node Operator.

## Networks

NaaS is currently available to the following testnets. In the Spring of 2022, LinkPool will release Mainnet support for the same blockchain protocols:

- Ethereum (Rinkeby, Goerli, Kovan)
- Optimism (Kovan)
- Binance (Testnet)
- HECO (Testnet)
- Matic (Testnet)
- Avalanche (Testnet)
- Arbitrum (Testnet)

## Security

External Adapters will be available to your deployed Nodes in the LinkPool NaaS Product. External Adapters are restricted to Nodes within the same region. For example, a given External Adapter in the `us-east1` region will be available to any Node you deploy in that same region. 

## Expiration

External Adapters have an expiration period of 30 days, which will auto-renew if you've had an active Node in the same region in the previous 30 days. If there has not been an active Node in the previous 30 days in the same region, the External Adapter instance will automatically be destroyed.

## Limitations

Each External Adapter image may be deployed once per region per user.

## Pricing

External Adapters are currently free to use in Testnets (subject to change).

