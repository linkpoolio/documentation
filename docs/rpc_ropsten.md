---
id: rpc_ropsten
title: Ropsten RPC
sidebar_label: RPC
---

We offer a public Ethereum RPC for Ropsten that provides access to the
JSON RPC.

## Endpoint

**JSON RPC:** `https://ropsten-rpc.linkpool.io/`

### Example Usage

```bash
curl https://ropsten-rpc.linkpool.io/ \
    -X POST \
    -d '{"method":"eth_blockNumber","params":[],"id":1,"jsonrpc":"2.0"}' \
    -H "Content-Type: application/json"
```
Result:
```json
{"jsonrpc":"2.0","result":"0x42e37e","id":1}
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