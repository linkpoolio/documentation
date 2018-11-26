---
id: parity_light
title: Parity Light Design (Public RPCs)
sidebar_label: Parity Light (Public RPCs)
---

To power our public Ethereum RPCs, we're using Parity instances in
light mode. To ensure constant sync and integrity of the light nodes,
our full Parity instances are reserved peers, ensuring that our full
nodes are always the priority sources of new states.


## Technologies Used

### CloudFormation
Like the [full-node Parity instances](parity.md), the light instances that are used
to power our public RPCs are forked from the full Parity instances, with
slight changes to the configuration.

This provides us with the same startup configuration, rolling upgrades
and error handling.

When an upgrade is triggered, our light nodes have their reserved peers
created on the server using elastic IP's, waited to be fully-synced and
then added to the load-balancer to be used publicly.

For any active WebSocket connections during an upgrade, they're
re-balanced to the newly upgraded instances.

### Docker
All of the services that run on each instance:
 - [parity-ethereum](https://github.com/paritytech/parity-ethereum):
 Ethereum client
 - [docker-autoheal](https://github.com/willfarrell/docker-autoheal):
 Used to monitor the healthchecks on each container and restart them if
 failing.

By using Docker, it allows us to better manage the CPU/RAM shares across
each container assuring that Parity is never exhausted of resources.

## Healthchecks
Our Parity instances implement custom healthchecks that monitor the
blocknumber compared to Etherscan. If the blocknumber is behind Etherscan
for over 300s, the light node is restarted and all active connections
are re-balanced.

## Failover
Each instance is located in a different availability zone providing
disaster recovery as each node is quickly re-connected on any termination.
To allow for failover we balance both the RPC and WebSocket
endpoints using application load balancers.

## Backups
The light nodes are not backed up, as the database is not critical to
their operation and can be re-synced from fresh using the reserved
peers in less than an hour.

## Caveats
Since these are light nodes, then there's the standard considerations
that have to be considered when using them.
- `eth_getLogs` calls only work within a very limited block range.
- `eth_call` has sporadic response times.
- The WebSocket support has an idle connection limit of over an hour.
This results in occasional disconnects, but is quickly reconnected.