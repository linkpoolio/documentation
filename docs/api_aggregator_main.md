---
id: api_aggregator_main
title: API Aggregator (Mainnet)
sidebar_label: API Aggregator
---

The API aggregator is a generalised adaptor that accepts inputs of multiple APIs and JSON paths and then aggregates
the returning value either by mean/median/mode.

## LinkPool Node Details
- Oracle Address: `0x240bae5a27233fd3ac5440b5a598467725f7d1cd`
- Job ID: `6dc6f43099284d5cbf9b33c7e4695e65`

## Solidity Usage Example
```
Chainlink.Request memory req = newRequest(jobId, this, this.fulfill.selector);
string[] memory api = new string[](2);
api[0] = "https://www.bitstamp.net/api/v2/ticker/ethusd/";
api[1] = "https://api.pro.coinbase.com/products/eth-usd/ticker";
req.addStringArray("api", api);
string[] memory paths = new string[](2);
paths[0] = "$.last";
paths[1] = "$.price";
req.addStringArray("paths", paths);
req.add("aggregationType", "median");
req.add("copyPath", "aggregateValue");
req.addInt("times", 100);
```

### Example Contract Source Code
[GitHub](https://github.com/linkpoolio/example-chainlinks/blob/master/contracts/APIAggregatorConsumer.sol)

## Running the Adaptor
This adaptor is built in bridges and can be ran by building this example folder:
https://github.com/linkpoolio/bridges/tree/master/examples/apiaggregator