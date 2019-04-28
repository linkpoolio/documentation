---
id: wolframalpha_ropsten
title: WolframAlpha Short Answers (Distance Between) (Ropsten)
sidebar_label: WolframAlpha Short Answers (Distance Between)
---

The Wolfram Alpha example fetches the distance between two locations using the Short Answer API and the natural query
language. 

## API Documentation
https://products.wolframalpha.com/short-answers-api/documentation/

## Example Contract Source Code
[GitHub](https://github.com/linkpoolio/example-chainlinks/blob/master/contracts/WolframAlphaConsumer.sol)

## Chainlink Details
**Oracle Address:** 0x83F00b902cbf06E316C95F51cbEeD9D2572a349a

**Job ID:** bdb5a7393629426f8a944f0ccbe6442e

## Running the Adaptor
This adaptor is built in bridges and can be ran by building this example folder:
https://github.com/linkpoolio/bridges/tree/master/examples/wolframalpha

## Example (Requesting distance)
Contract address: https://ropsten.etherscan.io/address/0x2e1126b97B66188E7815FF2D5ba1948c0B9c1400

Clone https://github.com/linkpoolio/example-chainlinks and run the following:
```
npm run exec scripts/wolframalpha/request.js London Tokyo -- --network ropsten
npm run exec scripts/wolframalpha/get.js London Tokyo -- --network ropsten
```