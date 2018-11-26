---
id: alpha_vantage_ropsten
title: Alpha Vantage (Ropsten)
sidebar_label: Alpha Vantage
---

The Alpha Vantage Chainlink fetches data feeds from [Alpha Vantage's](https://www.alphavantage.co/)
API. This adaptor supports every endpoint available by accepting a parameter
defining which function to call.

## Adaptor Source Code

- [GitHub](https://github.com/linkpoolio/alpha-vantage-cl-ea)

## Usage
To use this contract, you can either use the one that we've deployed to
Ropsten or you can deploy your own to use from the example repo.

### Example
**Contract Address:** [0x40b36e050da8674af88ac80597a824722f2dae6e](https://ropsten.etherscan.io/address/0x40b36e050da8674af88ac80597a824722f2dae6e)

**Steps to use:**

1. Transfer 1 LINK to the address
2. Enter your desired `_from` and `_to` currencies in `requestExchangeRate`.
4. Upon firing the transaction, you can monitor the address of
[0xbe4cda56b65af5ab59276ca02e103584aba84603](https://ropsten.etherscan.io/address/0xbe4cda56b65af5ab59276ca02e103584aba84603).
This is the oracle. In a short amount of time within tx
confirmation, there should be a transaction appearing under that address.
That is the oracle writing back on-chain to the contract with the exchange rate.
5. To be able to manually verify the price, you can call `prices` with the
`keccack256` hash of the trading pair. For example, `web3.sha3('USDGBP')`
will return `0x93ff94ff22b2966f9d445413d45f3f1c91389c695ae5a45f22fbe729e042d52c`
and upon being entered in `prices` will return the latest rate for USD/GBP
as of when it was last called.

**Result:**

```
➜  example-chainlinks git:(master) ✗ npm run exec scripts/get_exchange_rate.js -- USD GBP --network ropsten

> example-chainlinks@0.0.1 exec /mnt/d/dev/example-chainlinks
> truffle exec "scripts/get_exchange_rate.js" "USD" "GBP" "--network" "ropsten"

Using network 'ropsten'.

Pair hash: 0x93ff94ff22b2966f9d445413d45f3f1c91389c695ae5a45f22fbe729e042d52c
Latest price for USD-GBP: 0.78
```

### Deploy your own
We have a repository on GitHub that includes the `AlphaVantageConsumer`
source code for your own deployment.

**Source Code:** [GitHub (example-chainlinks)](https://github.com/linkpoolio/example-chainlinks)