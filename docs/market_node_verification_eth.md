---
id: market_node_verification_eth
title: Node Verification Ethereum
sidebar_label: Ethereum
---

## Contracts
Verification is executed via two contracts:

### Market Deposits
This contract is a central depositing contract to the Market. It allows you to deposit LINK into the 
Market for it to be spent within the verification process when approved by the user.

| Network             | Market Deposit Contract Address            |
|---------------------|--------------------------------------------|
| Ethereum Mainnet    | 0x1c877BA1D3b384410b61f1663cA1B8130f4aD59c |
| Ethereum Ropsten    | 0x586Db96A71FDe2c250a29551000DC46b15b007DB |
| Ethereum Kovan      | 0xB73B0899CD59C8273eD072f9A4cd45E0b20ad7aD |
| Ethereum Rinkeby    | 0xB73B0899CD59C8273eD072f9A4cd45E0b20ad7aD |
| Ethereum Goerli     | 0x15bD39adCFE535629d7d9De62ee4aD9aee94bDeB |


### OracleVerifier
`ChainlinkClient` implementor. Creates a Chainlink request to a specified oracle, that then emits a log 
with the response token as fetched by the Chainlink node. 

| Network             | Oracle Verifier Contract Address           |
|---------------------|--------------------------------------------|
| Ethereum Mainnet    | 0xf9fc2b4a0E487297B05285e9B3327f26e70c4E9b |
| Ethereum Ropsten    | 0x6a622F4DfF2eB3EE22663dDC3c6Ddf6030F4F333 |
| Ethereum Kovan      | 0x0f15e81E2C3A81e1a18c585a9431393598c31c6B |
| Ethereum Rinkeby    | 0x110BEC13a259251F28668f97323c1A90CB90f05f |
| Ethereum Goerli     | 0x1B989d64131a2a685cf0D07E1262eB851b47885f |

## Steps to Verify
We've spent a lot of time and effort trying to make the verification process as simple as possible for people to run 
through themselves, although we understand there still could be issues.

### Deposit LINK
Firstly, you need to deposit some LINK into the Market. 

1. Login to your profile
2. Using the cog in the top right corner of the Market, select the same Ethereum network as the node you are looking to verify
3. Click "Wallet" on the sidebar
4. Ensure Metamask is installed, and you are connected to the same network as your node
5. Click "Connect" in the Wallet Access section of the Market
6. Make sure you have enough LINK to deposit in your wallet
7. Click "Deposit LINK" and enter the amount of LINK charged as per the [fees page](https://market.link/fees)

### Verification Process

1. Click "Nodes" on the profile sidebar
2. Click the node that you want to verify
3. Click the "Verification" tab
4. Create the given JSON specification on your node.
    - Log into your Chainlink node
    - Click "Jobs"
    - Create a new Job
    - Paste the JSON as given from the Market
    - Create it, copy the resulting Job ID
5. From the Job ID you created in Step 4, paste that into the Node Job ID field
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

| Network             | LINK Token Address                         |
|---------------------|--------------------------------------------|
| Ethereum Mainnet    | 0x514910771af9ca656af840dff83e8264ecf986ca |
| Ethereum Ropsten    | 0x20fe562d797a42dcb3399062ae9546cd06f63280 |
| Ethereum Kovan      | 0xa36085F69e2889c224210F603D836748e7dC0088 |
| Ethereum Rinkeby    | 0x01BE23585060835E02B77ef475b0Cc51aA1e0709 |
| Ethereum Goerli     | 0x326c977e6efc84e512bb9c30f76e30c160ed06fb |