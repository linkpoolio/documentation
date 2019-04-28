---
id: api_aggregator_ropsten
title: API Aggregator (Ropsten)
sidebar_label: API Aggregator
---

The API aggregator is a generalised adaptor that accepts inputs of multiple APIs and JSON paths and then aggregates
the returning value either by mean/median/mode.

## Example Contract Source Code
[GitHub](https://github.com/linkpoolio/example-chainlinks/blob/master/contracts/APIAggregatorConsumer.sol)

## Chainlink Details
**Oracle Address:** 0x83F00b902cbf06E316C95F51cbEeD9D2572a349a

**Job ID:** becb68242def4f248faa84374d975d4a

## Running the Adaptor
This adaptor is built in bridges and can be ran by building this example folder:
https://github.com/linkpoolio/bridges/tree/master/examples/apiaggregator

## Example (BTC-USD Price)
Contract address: https://ropsten.etherscan.io/address/0xB830F888a287D2bc7AA2a42C7cED8ecEfcB8cb34

Clone https://github.com/linkpoolio/example-chainlinks and run the following:
```
npm run exec scripts/apiaggregator/request.js -- --network ropsten
npm run exec scripts/apiaggregator/get.js -- --network ropsten
```