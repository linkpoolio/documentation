---
id: naas_adapters_environment_variables
title: NaaS Adapter Environment Variables
sidebar_label: Environment Variables
---

NaaS External Adapters support configuration of environment variables on instantiation, commensurate with documentation per the [Official Chainlink External Adapter Monorepo (NodeJS)](https://github.com/smartcontractkit/external-adapters-js). 

## Defaults

By default, External Adapters will present the following environment variables and values. You may add, edit or remove environment variables according to your External Adapter needs:

- `EXPERIMENTAL_RATE_LIMIT_ENABLED`: `true`
- `CACHE_ENABLED`: `true`
- `CACHE_KEY_IGNORED_PROPS`: `meta`
- `EXPERIMENTAL_WARMUP_ENABLED`: `true`
- `RATE_LIMIT_API_TIER`: `free`
- `CACHE_TYPE`: `local`
- `LOG_LEVEL`: `debug`
- `CACHE_KEY_GROUP`: `$imageName`
- `CACHE_MIN_AGE`: `60000`

## Generic Adapters

TBD