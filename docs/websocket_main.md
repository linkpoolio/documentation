---
id: websocket_main
title: Main (Foundation) WebSocket
sidebar_label: WebSocket
---

We offer a public Ethereum RPC for main (Foundation) that provides
access to the WebSocket RPC.

## Endpoint

**WebSocket RPC:** `https://main-rpc.linkpool.io/ws`

### Example Usage

```bash
wscat -c wss://main-rpc.linkpool.io/ws
connected (press CTRL+C to quit)
> {"id": 1, "method": "eth_subscribe", "params": ["newHeads"], "jsonrpc":"2.0"}
< {"jsonrpc":"2.0","result":"0x55cba7be0653ec81","id":1}
< {"jsonrpc":"2.0","method":"eth_subscription","params":{"result":{"author":"0x829bd824b016326a401d083b33d092293333a830","difficulty":"0x9d32446af0513","extraData":"0xe4b883e5bda9e7a59ee4bb99e9b1bc","gasLimit":"0x7a1200","gasUsed":"0x79c21c","hash":"0x9554169a4d94ceb54af6cf2144a8b3eff11efeea9be80c91a77542b6cc3d4014","logsBloom":"0x0000295020520c1c6021000404200004129992aa1208201000010040004005b0400801028280228400100a00044090200e310000540042192000208058703081e99c200801220143208086881830828840000008841812080208021121006410110200881270400584c04242000008cc4c059a0440404020420201134880300100004889040508208502204001648444084109012086000e00031001086801c1664080182008040800257200140180000a00068020080800103094509c06692280208043403c920c145804101608028480ca288501200005208092022203202120d201b501000060010000080004a100646002020a4010015000126c0b088800","miner":"0x829bd824b016326a401d083b33d092293333a830","number":"0x6708c6","parentHash":"0xc41c751c7bfb5a01ba1f4b3d28de40fef86c112a40c831528f9064af2ee911fc","receiptsRoot":"0x954c1a7b5747c3c9080cf8c9bc387d07577e20895d06a2ba7f5a2f229835d6b8","sealFields":["0x47e4463cf15e32e47db00941b92e726ad4b7dacae4b2c6253554a911b6baf4f1","0x51d2305017ce0bd3"],"sha3Uncles":"0x6896aa2d23d76ca71b80f090e9fdedcf29fefd1f55f12c4d8703d9f48194c240","size":"0x213","stateRoot":"0x58a6822122cc9564849db6cd090d31cf750274511f026416836c1950560ab541","timestamp":"0x5bf6cd1c","transactionsRoot":"0x3d2563c9964e5d6e535654b904f17becb06ade00376e4e14f35e56083794b238"},"subscription":"0x55cba7be0653ec81"}}
```

## Limitations
The RPC is behind a web application firewall that restricts traffic
based on the rate of calls.

### Rate Limiter
The RPC is limited to 2,000 calls per 5 minutes. If that is exceeded,
then the source IP address is blocked.