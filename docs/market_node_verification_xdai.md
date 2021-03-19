---
id: market_node_verification_xdai
title: Node Verification xDai
sidebar_label: xDai
---

## Contracts
Verification is executed via two contracts:

### Market Deposits
This contract is a central depositing contract to the Market. It allows you to deposit LINK into the 
Market for it to be spent within the verification process when approved by the user.

| Network          | Market Deposit Contract Address            |
|------------------|--------------------------------------------|
| xDai Mainnet     | 0xeC5d782fab011E30f49925Cde640bb01bc487D9B |



### OracleVerifier
`ChainlinkClient` implementor. Creates a Chainlink request to a specified oracle, that then emits a log 
with the response token as fetched by the Chainlink node. 

| Network          | Oracle Verifier Contract Address           |
|------------------|--------------------------------------------|
| xDai Mainnet     | 0xC56d2be9ccFa0a99F0810A96BC6076b739510a75 |


## Steps to Verify
We've spent a lot of time and effort trying to make the verification process as simple as possible for people to run 
through themselves, although we understand there still could be issues.

### Deposit LINK
First, you need to deposit some LINK into the Market.

1. Login to your profile
2. Using the cog in the top right corner of the Market, select the same xDai network as the node you are looking to verify
3. Click "Wallet" on the sidebar
4. Ensure Metamask is installed, and you are connected to the same network as your node. Instructions for configuring Metamask for xDai, including RPC details can be found [here](https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup)
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
9. Wait a minute, and then it should complete and your node be verified!

## Common Problems

- Make sure your Chainlink node has a xDai balance.
- The `env` for your node should have the configuration variable `MINIMUM_CONTRACT_PAYMENT` value set. The default is `1000000000000000000` which is 1 LINK. This value should be set to `1000000000000000` or lower for the verification to complete.
- Make sure your Chainlink node has fulfillment permission within the `Oracle` contract. This can be done by calling function `setFulfillmentPermission({node_wallet}, true)`.
- Confirm the address you provided for your node in the Market is the node's `ORACLE_CONTRACT_ADDRESS`, and not the `ACCOUNT_ADDRESS`.
- When you deploy your `Oracle` contract, ensure the `_link` token address is correct:

| Network          | LINK Token Address                         |
|------------------|--------------------------------------------|
| xDai Mainnet     | 0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2 |
