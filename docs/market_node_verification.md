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
- [OracleVerifier](https://etherscan.io/address/0xf9fc2b4a0E487297B05285e9B3327f26e70c4E9b): `ChainlinkClient` 
implementor. Creates a Chainlink request to a specified oracle, that then emits a log with the response token as fetched 
by the Chainlink node. 

## Fees
To view our fees for verification within the Market, view:
https://market.link/fees

## Steps to Verify
We've spent a lot of time & effort trying to make the verification process as simple as possible for people to run 
through themselves, although we understand there still could be issues.

### Deposit LINK
Firstly, you need to deposit some LINK into the Market. 

1. Login to your profile
2. Click "Wallet" on the sidebar
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
- Make sure your Chainlink node has fulfillment permission within the `Oracle` contract. This can be done by calling function `setFulfillmentPermission({node_wallet}, true)`.
- Confirm the address you provided for your node in the Market is the node's `ORACLE_CONTRACT_ADDRESS`, and not the `ACCOUNT_ADDRESS`.
- When you deploy your `Oracle` contract, ensure the `_link` token address is correct:

| Network                     | LINK Token Address                         |
|-----------------------------|--------------------------------------------|
| Ethereum Mainnet            | 0x514910771af9ca656af840dff83e8264ecf986ca |
| Ethereum Ropsten            | 0x20fe562d797a42dcb3399062ae9546cd06f63280 |
| Ethereum Kovan              | 0xa36085F69e2889c224210F603D836748e7dC0088 |
| Ethereum Rinkeby            | 0x01BE23585060835E02B77ef475b0Cc51aA1e0709 |
| Ethereum Goerli             | 0x326c977e6efc84e512bb9c30f76e30c160ed06fb |
| Binance Smart Chain Mainnet | 0x404460c6a5ede2d891e8297795264fde62adbb75 |
| Binance Smart Chain Testnet | 0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06 |
| Matic Mainnet               | 0xb0897686c545045afc77cf20ec7a532e3120e0f1 |
| Matic Mumbai                | 0x326C977E6efc84E512bB9C30f76E30c160eD06FB |

