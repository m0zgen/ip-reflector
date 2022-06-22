# IP Reflector

Node.js microservice for reflect data from open IP API cervices.

## Usage

Clone proect and run:
```
npm instrall
```

Run server:
```
node app.js
```

Server will be available on:
```
http://127.0.0.1:8000
```

## Requesting

Curl:
```
curl http://127.0.0.1:8000/reflect/?ip=1.1.1.1 
```

Example response:
```
{"status":"success","country":"Australia","countryCode":"AU","region":"QLD","regionName":"Queensland","city":"South Brisbane","zip":"4101","lat":-27.4766,"lon":153.0166,"timezone":"Australia/Brisbane","isp":"Cloudflare, Inc","org":"APNIC and Cloudflare DNS Resolver project","as":"AS13335 Cloudflare, Inc.","query":"1.1.1.1"}
```

## Licence
* [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.txt)
