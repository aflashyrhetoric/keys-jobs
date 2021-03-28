# Keys: Jobs

This file is not a development server and does not contain logic for the API. If you're looking for the keys backend, look at keys-go.

This file contains jobs that help to process the data that is used for keys.

## Link to the architecture diagram:
https://lucid.app/lucidchart/04dd7712-5c91-4ea5-896f-835a2ff992d4/edit?page=0_0#

## Jobs in this repository:

- Fetch AirTable Base recommendations and cache to Redis
- Fetch scraped product data from Zyte and cache to Redis

# How To Run 

```
yarn install
yarn run dev
```