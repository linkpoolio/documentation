---
id: market_node_verification_ocr
title: Node Verification Ethereum
sidebar_label: Ethereum
---

Operators who have both a runlog and an OCR node on the same network are only required to verify a single node for that network in the Market. 
Multiple nodes are supported by adding additional Wallet/Account addresses to the Node's profile.

To list an OCR node after a runlog node has already been Market verified on the same network:

- In your runlog oracle contract, set the fulfillment permission to true for your OCR Wallet address. This can be done by calling function `setFulfillmentPermission({node_wallet}, true)`
- Login to your profile in the Market, click "(Nodes)[https://market.link/profile/nodes]" on the sidebar
- Select your runlog node from the list
- Select the "Settings" tab, and scroll down to the Wallet Addresses section
- Add the Wallet/Account addresses for both your runlog and OCR node

To list an OCR node without already having another node Market verified on the same network:

- If you haven't already, you will need to deploy an Oracle Contract, following the steps in the (official docs)[https://docs.chain.link/docs/fulfilling-requests]
- When setting the `setFulfillmentPermission`, ensure you use your the Wallet/Account address of your OCR node
- Follow the steps to verify your OCR node in the Market as detailed [here](market_node_verification_over.md)
- Once verified, click on "(Nodes)[https://market.link/profile/nodes]" on the sidebar of your user profile
- Select the node you just verified from the list
- Select the "Settings" tab, and scroll down to the Wallet Addresses section
- Add the Wallet/Account addresses for your OCR node
