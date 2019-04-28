---
id: alpha_vantage_ropsten
title: Alpha Vantage (Ropsten)
sidebar_label: Alpha Vantage
---

The Alpha Vantage Chainlink fetches data feeds from [Alpha Vantage's](https://www.alphavantage.co/)
API.

## API Documenation
https://www.alphavantage.co/documentation/

## Example Contract Source Code
[GitHub](https://github.com/linkpoolio/example-chainlinks/blob/master/contracts/AlphaVantageConsumer.sol)

## Chainlink Details
**Oracle Address:** 0x83F00b902cbf06E316C95F51cbEeD9D2572a349a

**Job ID:** 4f5bd067b34a45b0adae559105f3e6fc

## Running the Adaptor
This adaptor is built in [bridges](https://github.com/jleeh/bridges):

[Bridge URL](https://s3.linkpool.io/bridges/alphavantage.json), example usage:
```
bridges -b https://s3.linkpool.io/bridges/alphavantage.json
```

## Example (Forex Rates)
Contract address: https://ropsten.etherscan.io/address/0x6f5f0C4256a6f06741a4Fd13F30a7592a62fD979

Clone https://github.com/linkpoolio/example-chainlinks and run the following:
```
npm run exec scripts/alphavantage/request.js -- GBP USD --network ropsten
npm run exec scripts/alphavantage/get.js -- GBP USD --network ropsten
```

This will request a forex rate from AlphaVantage, then get the returning result returning via our LinkPool node.