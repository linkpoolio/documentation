---
id: asset_price_ropsten
title: Asset Price (Ropsten)
sidebar_label: Asset Price
---

The Asset Price Chainlink fetches price data from multiple exchanges and aggregates the result based on a 
weighted average of the volume. 

## Example Contract Source Code
[GitHub](https://github.com/linkpoolio/example-chainlinks/blob/master/contracts/AssetPriceConsumer.sol)

## Chainlink Details
**Oracle Address:** 0x83F00b902cbf06E316C95F51cbEeD9D2572a349a

**Job ID:** 740b88dd7d5347bfae116aa65a550ca9

## Running the Adaptor
View the adaptors readme on [GitHub](https://github.com/linkpoolio/asset-price-cl-ea).

## Example (Requesting prices)
Contract address: https://ropsten.etherscan.io/address/0x31c276C9bb07fD8329C47568D657E486Bb6BcE19

Clone https://github.com/linkpoolio/example-chainlinks and run the following:
```
npm run exec scripts/assetprice/request.js BTC USD -- --network ropsten
npm run exec scripts/assetprice/get.js BTC USD -- --network ropsten
```

or

```
npm run exec scripts/assetprice/request.js LINK ETH -- --network ropsten
npm run exec scripts/assetprice/get.js LINK ETH -- --network ropsten
```

etc. Any pair from any of the supported exchanges is supported and every exchange that supports that trading 
pair will be used in the request.