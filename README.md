# Keys: Jobs

This file is not a development server and does not contain logic for the API. If you're looking for the keys backend, look at keys-go.

This file contains jobs that help to process the data that is used for keys.

## Link to the architecture diagram:
https://lucid.app/lucidchart/04dd7712-5c91-4ea5-896f-835a2ff992d4/edit?page=0_0#

## Jobs in this repository:

- Fetch AirTable Base recommendations and cache to Redis
- Fetch scraped product data from Zyte and cache to Redis

## Endpoints

Hitting endpoints with GET requests will trigger the jobs on the server.

<!-- TODO - Require POST requests with some auth LOL -->

The current endpoints are:

- /refresh_product_data
- /refresh_airtable_data

## Connect to Redis

1. First install the Redli client from IBM: https://github.com/IBM-Cloud/redli/releases. If you're on a Mac, you'll likely need to download their darwin release, then `chmod +x` it and move it to `/usr/local/bin` (or wherever you want in your PATH)
2. Run the following: redli --tls -h {REDIS_HOST} -a {REDIS_PASSWORD} -p 25061
3. You can now run commands in the interactive CLI

# How To Run 

```
yarn install
yarn run dev
```

## Resources
- DigitalOcean Managed DB: https://cloud.digitalocean.com/databases/keys-redis-cluster-nyc1?i=c9f171