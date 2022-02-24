---
id: naas_adapters_examples
title: NaaS Adapters Examples
sidebar_label: Examples
---

## I. Open Adapters

Follow the documentation for environment variables, request, and response formats for each Adapter in the [Official Chainlink External Adapter Monorepo (NodeJS)](https://github.com/smartcontractkit/external-adapters-js). For example purposes, see below example for one of the many adapters, Coingecko.

#### [Coingecko Example](https://github.com/smartcontractkit/external-adapters-js/tree/develop/packages/sources/coingecko)

##### Environment Variables

```bash
API_KEY="1234567890"
```

##### Request

```json
{
  "id": 1,
  "data": {
    "endpoint": "crypto",
    "base": "ETH",
    "quote": "USD"
  }
}
```

##### Response

```json
{
  "jobRunID": "1",
  "data": {
    "ethereum": {
      "usd": 157.24
    },
    "result": 157.24
  },
  "result": 157.24,
  "statusCode": 200
}
```

## II. Generic Adapters

#### 1. API Key

Performs a `GET` request on `https://api.local/v3/api-key` with API key authorization. In this example, the `Authorization` header is set to `MyKey 1234567890` in each request.

##### Environment Variables

```bash
GENERIC_BASE_URL="http://api.local/v3/"
GENERIC_AUTH_TYPE="api_key"
GENERIC_AUTH_CREDENTIALS_KEY="MyKey"
GENERIC_AUTH_CREDENTIALS_VALUE="1234567890"
GENERIC_AUTH_CREDENTIALS_LOCATION="headers"
```

##### Request

```json
{
  "id": 1,
  "data": {
    "url": "api-key"
  }
}
```

##### Response

```json
{
  "data": {
    "exampleProperty": "api_key"
  },
  "statusCode": 200
}
```

#### 2. Basic Auth

Performs a `GET` request on `https://api.local/v3/basic-auth` with basic authorization. In this example, the `Authorization` header is set to `Basic <Base64 encoded username and password>` in each request.

##### Environment Variables

```bash
GENERIC_BASE_URL="http://api.local/v3/"
GENERIC_AUTH_TYPE="basic_auth"
GENERIC_AUTH_CREDENTIALS_USERNAME="1234567890"
GENERIC_AUTH_CREDENTIALS_PASSWORD="1234567890"
```

##### Request

```json
{
  "id": 1,
  "data": {
    "url": "basic-auth"
  }
}
```

##### Response

```json
{
  "data": {
    "exampleProperty": "basic_auth"
  },
  "statusCode": 200
}
```

#### 3. Bearer Token

Performs a `GET` request on `https://api.local/v3/bearer-token` with bearer token authorization. In this example, the `Authorization` header is set to `Bearer 1234567890` in each request.

##### Environment Variables

```bash
GENERIC_BASE_URL="http://api.local/v3/"
GENERIC_AUTH_TYPE="bearer_token"
GENERIC_AUTH_CREDENTIALS_TOKEN="1234567890"
```

##### Request

```json
{
  "id": 1,
  "data": {
    "url": "bearer-token"
  }
}
```

##### Response

```json
{
  "data": {
    "exampleProperty": "bearer_token"
  },
  "statusCode": 200
}
```

#### 4. Custom

Performs a `GET` request on `https://api.local/v3/custom` with custom authorization. In this example, `client_id` and `client_secret` are supplied in the header of each request.

##### Environment Variables

```bash
GENERIC_BASE_URL="http://api.local/v3/"
GENERIC_AUTH_TYPE="custom"
GENERIC_AUTH_HEADERS={"client_id":"1234567890","client_secret":"1234567890"}
```

##### Request

```json
{
  "id": 1,
  "data": {
    "url": "custom"
  }
}
```

##### Response

```json
{
  "data": {
    "exampleProperty": "custom"
  },
  "statusCode": 200
}
```

#### 5. No Authorization

Performs a `GET` request on `https://api.local/v3/no-auth`.

##### Environment Variables

```bash
GENERIC_BASE_URL="http://api.local/v3/"
```

##### Request

```json
{
  "id": 1,
  "data": {
    "url": "no-auth"
  }
}
```

##### Response

```json
{
  "data": {
    "exampleProperty": "no_auth"
  },
  "statusCode": 200
}
```
