---
id: parity
title: Parity Design
sidebar_label: Parity
---

We're proud to be using Parity for our Ethereum clients. These boxes are
used by our staking nodes to read and write on-chain, being crucial to
their operation. Designed to have sub 1s block propogation times to
ensure for fast responses back on-chain.


## Technologies Used

### CloudFormation
All of the instances that Parity runs on are managed by Auto Scaling
Groups within CloudFormation. By doing this it allows us deterministically
create and update the instances with rolling updates.

The configuration includes a startup process that downloads the latest
database template ane then waits for the template to re-sync before
going live. Once live, the instance is then added to the load balancer,
giving sure confidence that when it's open for connections it is fully
synced with the chain.

In addition, the rolling process allows us to manage errors. For example,
if the worst case happened and a task in the startup failed, it will
notify CloudFormation which will then fail the upgrade and start the
roll back. This process does not interrupt already existing connections
from nodes.

### Docker
All of the services that run on each instance:
 - [parity-ethereum](https://github.com/paritytech/parity-ethereum):
 Ethereum client
 - [eth-net-intelligence-api](https://github.com/cubedro/eth-net-intelligence-api/):
 ETH client monitor, used to display the stats on [ETH Stats](https://ethstats.net).
 - [docker-autoheal](https://github.com/willfarrell/docker-autoheal):
 Used to monitor the healthchecks on each container and restart them if
 failing.

By using Docker, it allows us to better manage the CPU/RAM shares across
each container assuring that Parity is never exhausted of resources.

## Failover
Each instance is located in a different availability zone providing
disaster recovery as each node is quickly re-connected on any termination.
To allow for failover we balance both the RPC and WebSocket
endpoints using network load balancers.

## Healthchecks
Our Parity instances implement custom healthchecks that monitor the
blocknumber compared to Etherscan. If the blocknumber is behind Etherscan
for over 90s, the Parity instance is then restarted, re-balancing all the
nodes that were connected to fully synced instances. The reason
for the restart is due to the instance often quickly re-syncing on
restart. When left, the instance would often stay un-synced for large
periods of time until re-syncing, resulting in each connected node not
responding to new requests.

## Backups
A separate instance away from the Parity instances will automatically
template the latest chain bi-daily and upload it to S3. This is the
database which is then pulled down by any new instances and re-synced.
Resulting in a fresh-to-synced process that only takes 15-60 minutes
depending on when the last template was taken.
