---
id: market_api_keys
title: Managing API Keys
sidebar_label: Managing API Keys
---

When creating API keys within the Market, it is important to note:
- No IAM support, all keys have full permission.
- Two key pairs can be active at any one time.
- Management of API keys is performed only within the API, a GUI within the profile will be built in the near future.

## Creating an API Key

- Login with your email and password, storing the returned cookie:
    ```shell script
    curl --fail -c market.cookie -X POST https://market.link/v1/user/login \
    -H 'Content-Type: application/json' \
    -d \
    '{
        "email": "",
        "password": ""
    }'
    ```
- If you have 2FA enabled, send your 2FA token to the api:
    ```shell script
    curl --fail -b market.cookie -X POST https://market.link/v1/user/login/twofactor \
    -H 'Content-Type: application/json' \
    -d \
    '{
        "token": ""
    }'
    ```
- Create a new key pair, storing the returned keys somewhere safe:
    ```shell script
    curl --fail -b market.cookie -X POST https://market.link/v1/keys/ \
    -H 'Content-Type: application/json'
    ```
- Delete the cookie: `rm -rf market.cookie`

## Authenticating with API Keys

To authenticate using the key pair, set headers `x-access-key-id` and `x-secret-key`:
```shell script
curl --fail -X GET https://market.link/v1/keys/ \
-H "x-access-key-id: ${access_key_id}"
-H "x-secret-key: ${secret_key}"
-H 'Content-Type: application/json'
```

## Deleting an API Key

```shell script
curl --fail -b market.cookie -X DELETE https://market.link/v1/keys/:accessKeyId \
-H 'Content-Type: application/json
```
