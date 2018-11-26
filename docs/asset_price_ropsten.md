---
id: asset_price_ropsten
title: Asset Price (Ropsten)
sidebar_label: Asset Price
---

The Asset Price Chainlink fetches price data for Cryptocurrency assets.
This is performed by aggregating price information from multiple
exchanges, returning a price calculated from the weighted average of
volume on each trading pair amongst supported exchanges.

## Source Code

- [GitHub](https://github.com/linkpoolio/asset-price-cl-ea)

## Usage
To use this contract, you can either use the one that we've deployed to
Ropsten or you can deploy your own to use from the example repo.

### Example
**Contract Address:** [0xdbb384b9871be341bb360a4768efa7f7872e0ee0](https://ropsten.etherscan.io/address/0xdbb384b9871be341bb360a4768efa7f7872e0ee0)

Steps to use:

1. Transfer 1 LINK to the address
2. Choose of the following methods:
    - `requestUSDPrice`
    - `requestEURPrice`
    - `requestWeiPrice`
    - `requestSatsPrice`
3. Enter your desired asset to get the quote of. For example, if you
enter `BTC` into `requestUSDPrice` it will get you the price of BTC
in USD to two decimal places. You can choose **any base asset** that is
supported by any of the exchanges that the asset price adaptor calls.
4. Upon firing the transaction, you can monitor the address of
[0xbe4cda56b65af5ab59276ca02e103584aba84603](https://ropsten.etherscan.io/address/0xbe4cda56b65af5ab59276ca02e103584aba84603).
This is the oracle. So in a short amount of time within tx
confirmation, there should be a transaction appearing under that address.
That is the oracle writing back on-chain to the contract with the price.
5. To be able to manually verify the price, you can call `prices` with the
`keccack256` hash of the trading pair. For example, `web3.sha3('BTCUSD')`
will return `0x7404e3d104ea7841c3d9e6fd20adfe99b4ad586bc08d8f3bd3afef894cf184de`
and upon being entered in `prices` will return the latest price of BTC/USD
as of when it was last called.

For the BTC/USD example, three exchanges are used for a price aggregate.
These are Coinbase Pro, HitBTC and Bitfinex.

**Note:** There is an [on-going issue](https://www.pivotaltracker.com/n/projects/2129823/stories/162187918)
which is breaking `requestWeiPrice` resulting in a non-correct wei value
being written on-chain.

### Deploy your own
We have a repository on GitHub that includes the `AssetPriceConsumer`
source code for your own deployment.

**Source Code:** [GitHub (example-chainlinks)](https://github.com/linkpoolio/example-chainlinks)
