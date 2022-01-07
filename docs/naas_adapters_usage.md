---
id: naas_adapters_usage
title: NaaS Adapters Usage
sidebar_label: Usage
---

Generic Adapters allow access to both unauthenticated and authenticated APIs. Please see [Generic Adapter Environment Variables](/docs/naas_adapters_installation#ii-generic-adapter-environment-variables) for more information about installation of a Generic Adapter.

## Usage

Upon installation, the Generic Adapter acts as a middleware API for consumption by Chainlink jobs. This middleware API has one and only one endpoint, the `generic-request` (default) endpoint. 

### Input Parameters

| Required? |    Name    |     Description     |                   Options                    |    Defaults to    |
| :-------: | :--------: | :-----------------: | :------------------------------------------: | :---------------: |
|           | `endpoint` | The endpoint to use | [generic-request](#generic-request-endpoint) | `generic-request` |

---

## Generic Request Endpoint

This endpoint provisions access to the `GENERIC_BASE_URL` specified as environment variable upon installation. User may specify a `url` which is appended to the base url for requests. In this fashion, one generic adapter may be leveraged for multiple different endpoints to a given API base url.

### Input Params

More information regarding each parameter can be found in the [Axios Request Config Docs](https://axios-http.com/docs/req_config)

| Required? |   Name    |                                                    Description                                                     |                               Options                               | Defaults to |
| :-------: | :-------: | :----------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------: | :---------: |
|           | `method`  |                                                 The request method                                                 | `get`, `head`, `post`, `put`, `delete`, `options`, `trace`, `patch` |    `'get'`    |
|           |   `url`   |                       The relative URL appended to the base URL (in `GENERIC_BASE_URL`)                       |                                                                     |     `'/'`     |
|           | `headers` |                         The custom headers to be sent with the request (as a JSON object)                          |                                                                     |    `{}`     |
|           | `params`  |                        The query parameters to be sent with the request (as a JSON object)                         |                                                                     |    `{}`     |
|           |  `data`   | The data to be sent as the request body (as a JSON object). Only applicable to `PUT`, `POST`, `DELETE` and `PATCH` |                                                                     |    `{}`     |
