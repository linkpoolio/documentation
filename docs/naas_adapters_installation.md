---
id: naas_adapters_installation
title: NaaS Adapter Installation
sidebar_label: Installation
---

NaaS External Adapters installation requires the specification of environment variables.

You may specify environment variables accordingly to the documentation per the [Official Chainlink External Adapter Monorepo (NodeJS)](https://github.com/smartcontractkit/external-adapters-js).

In addition, you may specify environment variables specific to the external adapter itself, as follows:

- **Open Adapters**: Please see the Adapter specific README in the [Official Chainlink External Adapter Monorepo (NodeJS)](https://github.com/smartcontractkit/external-adapters-js).
- **Generic Adapters**: [See below](#ii-generic-adapter-environment-variables)

## I. Defaults

_Note: Defaults are applicable for both open and generic adapters_

By default, External Adapters will present the following environment variables and values. You may add, edit or remove environment variables according to your External Adapter needs:

|               Name                | Default Value |
| :-------------------------------: | :-----------: |
| `EXPERIMENTAL_RATE_LIMIT_ENABLED` |    `true`     |
|          `CACHE_ENABLED`          |    `true`     |
|     `CACHE_KEY_IGNORED_PROPS`     |   `'meta'`    |
|   `EXPERIMENTAL_WARMUP_ENABLED`   |    `true`     |
|       `RATE_LIMIT_API_TIER`       |    `free`     |
|           `CACHE_TYPE`            |   `'local'`   |
|            `LOG_LEVEL`            |   `'debug'`   |
|         `CACHE_KEY_GROUP`         | `$imageName`  |
|          `CACHE_MIN_AGE`          |    `60000`    |

## II. Generic Adapter - Environment Variables

Environment Variables are the method in which Generic Adapters are configured and installed. At minimum, adapters require a `GENERIC_BASE_URL`. Additionally, if the API being connected to requires authentication, Adapters support a variety of authentication mechanisms via configuration of environment variables, starting with `GENERIC_AUTH_TYPE`.

| Required? |        Name         |                                                                                                     Description                                                                                                      |                                Options                                | Defaults to |
| :-------: | :-----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------: | :---------: |
|           |  `GENERIC_PREFIX`   |   By default, environment variables are prefixed with `GENERIC_`. Setting `GENERIC_PREFIX` overrides the default prefix. For example, `GENERIC_PREFIX = 'CUSTOM'` will set the default prefix to `CUSTOM_GENERIC_`   |                                                                       |             |
|    ✅     | `GENERIC_BASE_URL`  |                                                                                Base URL of the api (i.e., `https://api.example.com`)                                                                                 |                                                                       |             |
|           | `GENERIC_AUTH_TYPE` | The authorization type of the API. Additional environment variables may involved/required depending on its value See [Environment Variables Per Authorization Type](#b-environment-variables-per-authorization-type) | See [Supported Authorization Types](#a-supported-authorization-types) |  `no_auth`  |

### A. Supported Authorization Types

|       Name       |     Value      |                                          Description                                          |
| :--------------: | :------------: | :-------------------------------------------------------------------------------------------: |
|     API Key      |   `api_key`    | Either sets the authorization header: `<Key> <Value>`, or the query parameter `<key>=<value>` |
|    Basic Auth    |  `basic_auth`  |         Sets the authorization header: `Basic <Base64 encoded username and password>`         |
|   Bearer Token   | `bearer_token` |                    Sets the authorization header: `Bearer <Your API key>`                     |
|      Custom      |    `custom`    |                  Allows to set any request header, query parameter, and body                  |
| No authorization |   `no_auth`    |                   Does not set any request header, query parameter or body                    |

### B. Environment Variables Per Authorization Type

If authorization is required, additional environment variables will be required contextual to the authorization type, as follows:

#### 1. API Key

| Required? |                Name                 |                                                              Description                                                              |        Options        | Defaults to |
| :-------: | :---------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :-------------------: | :---------: |
|    ✅     |   `GENERIC_AUTH_CREDENTIALS_KEY`    |                                                           The API key name                                                            |                       |             |
|    ✅     |  `GENERIC_AUTH_CREDENTIALS_VALUE`   |                                                           The API key value                                                           |                       |             |
|    ✅     | `GENERIC_AUTH_CREDENTIALS_LOCATION` | The location of the key-value pair. `headers` sets it in the request headers, whilst `params` sets it in the request query parameters | `headers` or `params` |             |

#### 2. Basic Auth

| Required? |                Name                 |       Description        | Options | Defaults to |
| :-------: | :---------------------------------: | :----------------------: | :-----: | :---------: |
|    ✅     | `GENERIC_AUTH_CREDENTIALS_USERNAME` | The API `username` value |         |             |
|    ✅     | `GENERIC_AUTH_CREDENTIALS_PASSWORD` | The API `password` value |         |             |

#### 3. Bearer Token

| Required? |               Name               |         Description          | Options | Defaults to |
| :-------: | :------------------------------: | :--------------------------: | :-----: | :---------: |
|    ✅     | `GENERIC_AUTH_CREDENTIALS_TOKEN` | The API authentication token |         |             |

#### 4. Custom

| Required? |          Name          |                                                             Description                                                             | Options | Defaults to |
| :-------: | :--------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :-----: | :---------: |
|           | `GENERIC_AUTH_HEADERS` |    The API authentication headers in a JSON object as string. Expected format is `{ "header1": "value1", "header2": "value2" }`     |         |    `{}`     |
|           | `GENERIC_AUTH_PARAMS`  | The API authentication query parameters in a JSON object as string. Expected format is `{ "param1": "value1", "param2": "value2" }` |         |    `{}`     |
|           |  `GENERIC_AUTH_DATA`   |        The API authentication body in a JSON object as string. Expected format is `{ "data1": <value1>, "data2": <value2> }`        |         |    `{}`     |

#### 5. No Authorization

N/A
