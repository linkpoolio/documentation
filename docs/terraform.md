---
id: terraform
title: Use of Terraform
sidebar_label: Use of Terraform
---

When LinkPool was being built, the automation of the platform was of a
critical importance to its operation. With a high level of automation,
it drastically cuts the amount of resource we need to operate; reduces
the level of human error and slashes the time it takes to scale and
re-create environments.

This is why [Terraform](https://www.terraform.io/) was chosen, as it
allows for descriptive code that defines, provisions and manages all
aspects of infrastructure.

## Scale of Use
Terraform describes all of our AWS resources bar a few Route53 records.
Since it's used so extensively, the applying of changes is managed
in our internal CI platform, requiring permissioned approval on each
infrastructure update.

## Source Code
With Terraform describing all our infrastructure, it will remain closed
source in internal repositories.

### Example
Below is a code snippet describing all the paramters for our Ropsten
nodes:
```tf
module "ropsten_nodes" {
  source = "git::ssh://<redacted>/terraform-modules/node.git"

  vpc_id             = "${aws_vpc.poolnodes_ropsten.id}"
  vpc_cidr           = "${aws_vpc.poolnodes_ropsten.cidr_block}"
  availability_zones = "${data.aws_availability_zones.available.names}"
  subnets            = "${aws_subnet.poolnodes_ropsten.*.id}"
  security_group     = "${aws_security_group.poolnode_host_ropsten.id}"
  efs_security_group = "${aws_security_group.efs_ropsten.id}"
  vpn_security_group = "${module.openvpn.security_group}"
  hosted_zone        = "${aws_route53_zone.poolnodes_ropsten.id}"
  cert_arn           = "${aws_acm_certificate.ropsten_cert.arn}"
  service_discovery  = "${aws_service_discovery_private_dns_namespace.ropsten.id}"
  sns_topic          = "${aws_sns_topic.pagerduty.arn}"
  cluster            = "poolnodes"
  family             = "ropsten"
  es_lambda          = "${aws_lambda_function.cwl_stream_lambda.arn}"
  patch_group        = "ropsten"
  cwl_endpoint       = "logs.${data.aws_region.current.name}.amazonaws.com"

  eth_chain_id          = "3"
  eth_ws_uri            = "ws://${module.ropsten_parity.lb_ws_fqdn}"
  total_node_services   = "${var.ropsten_node_count}"
  node_per_service      = 2
  node_version          = "v0.35"
  link_contract_address = "0x20fe562d797a42dcb3399062ae9546cd06f63280"
}
```
This code block in Terraform is the inclusion of a module. The module
contains resources that create EC2 instances, scaling groups, DNS entries
and how many nodes are provisioned etc. By using modules, it allows us
to easily create new environments that are all in-sync and scale easily.

**Practical example:** If we change `node_version`, it will trigger a rolling
update across that node cluster, gradually replacing all nodes with the
later version automatically.

This pattern of module inclusion is the common theme through our entire
codebase, with resources only being defined in the parent repo only if
they're typically shared with multiple resources.