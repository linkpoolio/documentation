---
id: asset_price_main
title: Asset Price (Main)
sidebar_label: Asset Price
---

The Asset Price Chainlink fetches price data from multiple exchanges and aggregates the result based on a 
weighted average of the volume.

In our opinion, this is by far the most advanced and trust-minimised way of requesting crypto price information 
on-chain. It is completely parameterised, dynamically knowing which exchanges support what pair and aggregating
each exchange API at the node level. 

## LinkPool Node Details
- Oracle Address: `0x240bae5a27233fd3ac5440b5a598467725f7d1cd`
- Job ID: `481b87880a8a4ab294bf1eb27f04523d`

## Solidity Usage Example
```
Chainlink.Request memory req = newRequest(jobId, this, this.fulfill.selector);
req.add("base", "LINK");
req.add("quote", "BTC");
req.add("copyPath", "price");
req.addInt("times", 100000000);
```

## Example Contract Source Code
[GitHub](https://github.com/linkpoolio/example-chainlinks/blob/master/contracts/AssetPriceConsumer.sol)

## Running the Adaptor
View the adaptors readme on [GitHub](https://github.com/linkpoolio/asset-price-cl-ea).
