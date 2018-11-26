---
id: nodes
title: Chainlink Node Design
sidebar_label: Chainlink Nodes
---

Our nodes are designed to be highly available, elastic and have
complete redundancy. To hit this goal, we used a mixture of container
management services with redundant network disks and deterministically
created instances.

## Technologies Used

### CloudFormation
All of the EC2 instances that run nodes are managed by Cloudformation in
the same way as our Parity instances are. The startup configuration in
this case manages the correct mounting of disks, dependencies and the
relevant configuration to enable ECS agents.

When a Cloudformation upgrade is started, it starts a rolling upgrade of
each of the node instances. When a new one is created and a success code
is received, then the oldest of the previous instances is terminated.
When an old instance is terminated, the fail-over node will become active
until all the instances have been upgraded. When an instance is destroyed,
ECS already has scope of the new instance, quickly then re-creating the
nodes on the new instance.

This results in a automatic rolling upgrade process that only sees downtime
based on how long it takes for the fail-over nodes to grab the DB and open
the UI & API.

### AWS ECS
[ECS](https://aws.amazon.com/ecs/) is a proprietary container service
developed and supported by Amazon. It draws similarities to Kubernetes,
although better integrates with our Terraform codebase and existing
AWS resources.

In this case, ECS manages the deployment of containers on each of the
EC2 instances. Each 'node' in the LinkPool environment consists of
multiple containers, with those containers being placed on instances
based on their availability zone to enable fail-over.

Each LinkPool node is defined in ECS as a service with a set amount of
tasks. The amount of tasks directly relates to the fail-over capability
and can be increased easily. For example, we currently specify two tasks,
giving an additional one node for fail-over.

### Network File Storage
We use highly redundant NFS drives to hold the database for each node.
By using redundant networked disks, it allows for failover as the same
disk is shared between each container for each of our nodes.

The developer of BoltDB [mentioned](https://github.com/boltdb/bolt/issues/690#issuecomment-304382683)
that it's unsafe to use network disks. Although since BoltDB manages
file locks, we've not seen any issues related with using network disks.
Each lock is managed on disk, there hasn't been any DB corruption and
no disk contention is seen.

## Specification
The amount of resources given to each container instance are:
- CPU: 2048 (2 vCPU)
- RAM: 1GB
- Disk: High IO NFS Drives

## Failover
Each instance is located in a different availability zone providing
disaster recovery. Each node has its own load balancing target group
with all of the containers in a given node registered to it.

If a node is lost, then it's a matter of which node in standby acts the
quickest to grab the DB lock. Once the DB lock is grabbed, then the
standby node will become active and open the UI & API. Once they're
open, then the target group then routes the traffic appropriately.

Since the nodes rely on high IO network disks, then no data is lost
between the switch of active nodes.

## Healthchecks
The nodes have healthchecks at numerous levels. One of the healthchecks
is managed by ECS, and ensures that the nodes executable is always
actively running within each container. There is then a healthcheck at
the load-balancer, ensuring the port for the UI & API is open, managing
which container for a node is routed to.

## Security
The integrity of the sensitive data on each node is crucial. Each of our
nodes will only be able to be called publicly on the service agreement
API, allowing for new in-bound service agreements. The access to the
nodes UI and other API endpoints is only accessible via our internal
network.

To manage secrets and sensitive data, the nodes have KMS keys that
manage all the wallet & API credentials. On-boot before becoming active,
each container will decrypt the relevant data, use it and then remove it,
leaving no trace of secrets on instances during operation.

## Backups
All of the nodes databases and encrypted wallets are backed up on
separate redundant network disks daily.
