---
id: market_node_verification
title: Node Verification
sidebar_label: Node Verification
---

For any node to be visible within the Market's search results, it first needs to be verified on-chain. This process is 
what validates that the node you're creating is in-fact a Chainlink node and can respond to any requests correctly.

## Contracts
Verification is executed via two contracts:
- [MarketDeposits](https://etherscan.io/address/0x1c877ba1d3b384410b61f1663ca1b8130f4ad59c): This contract 
is a central depositing contract to the Market. It allows you to deposit LINK into the market for it to be spent within 
the verification process when approved by the user.
- [OracleVerifier](https://etherscan.io/address/0x6c00887f34c017aa1febb9e5Da8EF9d0Cb264C2F): `ChainlinkClient` 
implementor. Creates a Chainlink request to a specified oracle, that then emits a log with the response token as fetched 
by the Chainlink node. 

## Fees
To view our fees for verification within the Market, view:
https://market.link/fees

- 1 LINK is sent back to the `Oracle` contract being verified. This can be withdrawn by the Chainlink node operator.
- 15 LINK is sent to our [PoolOwners](https://etherscan.io/address/0x182d4990bb0ff595b308b3efcb93313abad575e7) contract. 
This contract is how LinkPool and our token holders are distributed the earned LINK from our revenue streams.

## Steps to Verify
We've spent a lot of time & effort trying to make the verification process as simple as possible for people to run 
through themselves, although we understand there still could be issues.

### Deposit LINK
Firstly, you need to deposit some LINK into the Market. 

1. Login to your profile
2. Click "ETH Wallet" on the sidebar
3. Ensure Metamask is installed
3. Click Connect
4. Make sure you have enough LINK to deposit in your wallet
5. Click "Deposit LINK" and enter the amount of LINK charged as per the [fees page](https://market.link/fees).

### Verification Process

1. Click "Nodes" on the profile sidebar
2. Click the node that you want to verify
3. Click the "Verification" tab
4. Create the given JSON specification on your node.
    - Log into your Chainlink node
    - Click "Jobs"
    - Create a new Job
    - Paste the JSON as given from the Market
    - Create it, copy the resulting ID
5. From the ID you created in Step 4, paste that into the Node Job ID field
6. Connect to your wallet
7. Click the "Approve Transaction" button to approve the LINK fees to be spent during verification
8. Click "Send Transaction"
9. Wait a couple of minutes, and then it should complete and your node be verified!

## Common Problems

- Make sure your Chainlink node has an ETH balance.
- The `env` for your node should have the configuration variable `MINIMUM_CONTRACT_PAYMENT` value set. The default is `1000000000000000000` which is 1 LINK. This value should be set to `100000000000000000` or lower for the verification to complete.
- When you deploy your `Oracle` contract, ensure the `_link` token address is correct
(0x514910771af9ca656af840dff83e8264ecf986ca).
- Make sure your Chainlink node has fulfillment permission within the `Oracle` contract. This can be done by calling 
function `setFulfillmentPermission({node_wallet}, true)`.
