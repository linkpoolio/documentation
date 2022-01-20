---
id: general_chainlink_guide
title: Chainlink Guide
sidebar_label: Chainlink Guide
---

Getting off-chain data from on-chain requires the orchestration of many Chainlink components. The following chart (and description to follow) enumerates how to use Chainlink to manage off-chain data from on-chain.

## Guide to interacting with off-chain data with Chainlink

<img src="/img/guide.png" />

## Reference

### I. Blockchain Space

#### a. [Full Node](https://docs.chain.link/docs/run-an-ethereum-client/#geth)

A Full Node is the bridge from the Chainlink Node to the Blockchain. A Full Node enables the detection of requests for consumer contracts that are passed to the Chainlink Node.

#### b. [Consumer Contract](https://docs.chain.link/docs/make-a-http-get-request/#api-consumer)

A Consumer Contract is deployed for each Job on a given Chainlink Node. A Consumer Contract is generally what is called from the blockchain (based on it's block address) to initiate a given Job which may interact with data on some third-party API off-chain. Once deployed, a Consumer Contract exists as a block on the blockchain.

**Required deployment params:**
  
  - `OracleAddress`
  - `JobId`

#### c. [Oracle Contract](https://docs.chain.link/docs/fulfilling-requests/#deploy-your-own-oracle-contract)

An Oracle Contract is deployed for each Chainlink Node, and is always referenced by the Consumer Contract. The Oracle Contract is what receives the LINK payment associated with the Job request. Once deployed, an Oracle Contract exists as a block on the blockchain.

**Required params:**
  
  - deployment: `AccountId` (web3 wallet)
  - setFulfillmentPermission: `NodeAddress` (Chainlink Node)

#### d. [Node Wallet](https://docs.chain.link/docs/running-a-chainlink-node/#start-the-chainlink-node)

A Node Wallet is required to run a Chainlink Node, and is the source of payment for all on-chain transaction fees. 

### II. Chainlink Node

#### a. [Core](https://docs.chain.link/docs/running-a-chainlink-node/)

Consumer Contract requests are directed to a given Chainlink Node based on the Oracle Contract `Node Address` supplied when setting the Oracle Contract fullment permissions to `true`. 

The Chainlink Node is responsible for receiving the request and initiating the Job id specified via the Consumer Contract. 

#### b. [Jobs](https://docs.chain.link/docs/jobs/)

A Job is created within the Chainlink Operator GUI, and defines some pipeline of tasks to execute, such as retrieving data from some off-chain source, transforming the data, and returning data to the Smart Contract. One step in the Job Pipeline may be to invoke some Bridge.

#### c. [Bridges](https://docs.chain.link/docs/jobs/task-types/bridge/)

A Bridge is created within the Chainlink Operator GUI, and is simply a reference to a given URL for an External Adapter. A Bridge may be referenced by one or more Jobs. 

### III. Internet

#### a. [External Adapter](https://docs.chain.link/docs/external-adapters/)

An External Adapter is a middleware application which follows the standard for receiving requests from a given Chainlink Job, executes some custom logic for interacting with data on some third-party API, and returns the result from that API back to the Job.

#### b. Third-party API

A third-party API can be any API on the internet. External Adapters can call a third-party API to get, create, update, or delete data of any kind. 