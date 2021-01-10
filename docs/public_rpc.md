---
id: public_rpc
title: Public Ethereum RPCs
sidebar_label: Public ETH RPCs
---

We offer a public Ethereum endpoints for mainnet and test networks.

## Endpoint

#### Mainnet

- **JSON RPC:** `https://main-light.eth.linkpool.io/`
- **Websocket:** `wss://main-light.eth.linkpool.io/ws`

#### Rinkeby

- **JSON RPC:** `https://rinkeby-light.eth.linkpool.io/`
- **Websocket:** `wss://rinkeby-light.eth.linkpool.io/ws`

#### Goerli

- **JSON RPC:** `https://goerli-light.eth.linkpool.io/`
- **Websocket:** `wss://goerli-light.eth.linkpool.io/ws`

### Example Usage

#### HTTP:

```bash
curl https://main-rpc.linkpool.io/ \
    -X POST \
    -d '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}' \
    -H "Content-Type: application/json"
```
Result:
```json
{"jsonrpc":"2.0","result":"0x6708b4","id":1}
```

#### Websocket:

```bash
wscat -c wss://main-light.eth.linkpool.io/ws
```

## Limitations
The RPC is behind a web application firewall that restricts traffic
based on the rate of calls and the module being called.

### Supported Modules

- eth
- net
- pubsub
- rpc
- web3

### Rate Limiter
The RPC is limited to 2,000 calls per 5 minutes. If that is exceeded,
then the source IP address is blocked.