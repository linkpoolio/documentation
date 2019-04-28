---
id: rapid_api_weather_ropsten
title: Rapid API (Weather) (Ropsten)
sidebar_label: Rapid API (Weather)
---

This example uses Rapid API and the OpenWeather API to fetch temperature, wind speeds and humidity levels for any
location.

## API Documenation
RapidAPI: https://rapidapi.com/community/api/open-weather-map

OpenWeather: https://openweathermap.org/current

## Example Contract Source Code
[GitHub](https://github.com/linkpoolio/example-chainlinks/blob/master/contracts/RapidAPIWeatherConsumer.sol)

## Chainlink Details
**Oracle Address:** 0x83F00b902cbf06E316C95F51cbEeD9D2572a349a

**Job ID:** 73f03227e40e493f99abbc83e9b9da41

## Running the Adaptor
This adaptor is built in [bridges](https://github.com/jleeh/bridges):

[Bridge URL](https://s3.linkpool.io/bridges/rapidapi.json), example usage:
```
bridges -b https://s3.linkpool.io/bridges/rapidapi.json
```

## Example (Requesting weather information)
Contract address: https://ropsten.etherscan.io/address/0x819BC3e6a8effdB86ec7F8f95607B86947143618

Clone https://github.com/linkpoolio/example-chainlinks and run one of the below.

Metric temperature:
```
npm run exec scripts/rapidapiweather/request.js -- metricTemp "London,uk" --network ropsten
npm run exec scripts/rapidapiweather/get.js -- metricTemp "London,uk" --network ropsten
```

Humidity:
```
npm run exec scripts/rapidapiweather/request.js -- humidity "London,uk" --network ropsten
npm run exec scripts/rapidapiweather/get.js -- humidity "London,uk" --network ropsten
```

Wind speeds:
```
npm run exec scripts/rapidapiweather/request.js -- windSpeeds "London,uk" --network ropsten
npm run exec scripts/rapidapiweather/get.js -- windSpeeds "London,uk" --network ropsten
```