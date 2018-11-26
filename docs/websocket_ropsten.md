---
id: websocket_ropsten
title: Ropsten WebSocket
sidebar_label: WebSocket
---

We offer a public Ethereum RPC for main (Foundation) that provides
access to the WebSocket RPC.

## Endpoint

**WebSocket RPC:** `https://ropsten-rpc.linkpool.io/ws`

### Example Usage

```bash
wscat -c wss://ropsten-rpc.linkpool.io/ws
connected (press CTRL+C to quit)
> {"id": 1, "method": "eth_subscribe", "params": ["newHeads"], "jsonrpc":"2.0"}
< {"jsonrpc":"2.0","result":"0x87ef579a4bb13cd0","id":1}
< {"jsonrpc":"2.0","method":"eth_subscription","params":{"result":{"author":"0x6a9ecfa04e99726ec105517ac7ae1aba550bea6c","difficulty":"0x241a53a32","extraData":"0xd883010812846765746888676f312e31302e34856c696e7578","gasLimit":"0x7a1200","gasUsed":"0x3b723","hash":"0x7e893ad159efd0b719d52a390682d2241213de3f4170c029f40ee293f1616704","logsBloom":"0x00000000000040000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000040000002000000000000000000000000000000000100000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000020000000","miner":"0x6a9ecfa04e99726ec105517ac7ae1aba550bea6c","number":"0x446567","parentHash":"0x08537d69841f5c4dc5dbad161c3ae58d9525fbd3c218a762b50c9f5f0db5846d","receiptsRoot":"0x67eb28f7973dd1d79983a7ae5f8ed265910d70dd60b648de4b8ed8a95bc6a4e7","sealFields":["0x4081ceb297eb4a8ef5bebbf2501ac0f2c39aeef7a7d2aa79aa796bc5b264d015","0x76f517f4a652f546"],"sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347","size":"0x21b","stateRoot":"0x89f8c9c765c0981ead235344d11db16f393ecdd3a70900eca7a930038a903aee","timestamp":"0x5bf6cd76","transactionsRoot":"0x5376a8caaa3f71dccbbd4ed2204c400d9c7678ea1a7cfca57461d3b7eff3e59a"},"subscription":"0x87ef579a4bb13cd0"}}
```

## Limitations
The RPC is behind a web application firewall that restricts traffic
based on the rate of calls.

### Rate Limiter
The RPC is limited to 2,000 calls per 5 minutes. If that is exceeded,
then the source IP address is blocked.