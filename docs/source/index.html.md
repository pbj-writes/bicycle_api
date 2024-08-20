---
title: Bicycle Inventory API Reference

language_tabs: # must be one of https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers
  - shell
  - ruby
  - python
  - javascript

toc_footers:
  - <a href='https://github.com/slatedocs/slate'>Documentation Powered by Slate</a>

includes:
  - errors

search: true

code_clipboard: true

meta:
  - name: description
    content: Documentation for the Bicycle Inventory API
---

# Introduction

Welcome to the Bicycle Inventory API! You can use this API to access Bicycle Inventory endpoints, which can get information on all road bikes past or present in my database.

There are language bindings in Shell, Ruby, Python, and JavaScript! You can view code example and switch the programming language of the examples.

<aside class="notice">I have not deployed my API application for testing/playing, but it is real. Here is a demo:
<p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/s1RzBdgCRc0?si=UyfRadZu1ZL3rEUV&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></p>
<p>Also, check out the <a href="https://pbjwrites.info/portfolio/bicycle_inventory_api_app/">Bicycle API App description</a>.
</aside>

# Authentication
Not yet required.

# Bicycles

## List all bicycles

```ruby
require 'bicycle_inventory'

api = bicycle_inventory::APIClient.authorize!('bicycle_inventory_api_key')
api.bicycles.get
```

```python
import bicycle_inventory

api = bicycle_inventory.authorize('bicycle_inventory_api_key')
api.bicycles.get()
```

```shell
curl "http://pbjwrites.info/api/bicycles" \
  -H "Authorization: bicycle_inventory_api_key"
```

```javascript
const bicycle_inventory = require('bicycle_inventory');

let api = bicycle_inventory.authorize('bicycle_inventory_api_key');
let bicycles = api.bicycles.get();
```

> The above command returns JSON structured like this:

```json
{
    "total_bicycles": "4",
    "bicycles": [
        {
            "bicycle_id": 1,
            "make": "Specialized",
            "model": "Sequoia Sport",
            "groupset": "Shimano Sora",
            "frame_type": "aluminum",
            "frame_size": "60cm",
            "prime_color": "silver",
            "model_year": 2003,
            "crank_length": "175mm"
        },
        {
            "bicycle_id": 2,
            "make": "Cannondale",
            "model": "CAAD8",
            "groupset": "Shimano Tiagra",
            "frame_type": "aluminum",
            "frame_size": "58cm",
            "prime_color": "white",
            "model_year": 2014,
            "crank_length": "172.5mm"
        },
        {
            "bicycle_id": 3,
            "make": "Cannondale",
            "model": "CAAD13 Disc Rival AXS",
            "groupset": "Rival eTAP",
            "frame_type": "aluminum",
            "frame_size": "58cm",
            "prime_color": "purple",
            "model_year": 2021,
            "crank_length": "175mm"
        },
        {
            "bicycle_id": 4,
            "make": "Cannondale",
            "model": "Topstone 4",
            "groupset": "microSHIFT Advent 10",
            "frame_type": "aluminum",
            "frame_size": "large",
            "prime_color": "alpine",
            "model_year": 2021,
            "crank_length": "175mm"
        }
    ]
}
```

This endpoint retrieves all bicycles.

### HTTP Request

`GET http://pbjwrites.info/api/bicycles`

### Query Parameters


<aside class="success">
Remember — you will retrieve a list of all bikes - past or present.
</aside>

## Add a new bicycle

```ruby
require 'bicycle_inventory'

api = bicycle_inventory::APIClient.authorize!('bicycle_inventory_api_key')
api.bicycles.post(2)
```

```python
import bicycle_inventory

api = bicycle_inventory.authorize('bicycle_inventory_api_key')
api.bicycles.post(2)
```

```shell
curl "http://pbjwrites.info/api/bicycles/2" \
  -X POST \
  -H "Authorization: bicycle_inventory_api_key"
```

```javascript
const bicycle_inventory = require('bicycle_inventory');

let api = bicycle_inventory.authorize('bicycle_inventory_api_key');
let max = api.bicycles.POST(2);
```

> The above command returns JSON structured like this:

```json
{
  "Bicycle created successfully"
}
```

This endpoint adds a new bicycle.

### HTTP Request

`POST http://pbjwrites.info/bicycles/{bicycle_id}`

### URL Parameters

### Request Body Example
```json
{
    "make": "Cannondale",
    "model": "CAAD8",
    "groupset": "Shimano Tiagra",
    "frame_type": "aluminum",
    "frame_size": "58cm",
    "prime_color": "white",
    "model_year": 2014,
    "crank_length": "172.5mm"
},
```

## Update an existing bicycle

```ruby
require 'bicycle_inventory'

api = bicycle_inventory::APIClient.authorize!('bicycle_inventory_api_key')
api.bicycles.put(2)
```

```python
import bicycle_inventory

api = bicycle_inventory.authorize('bicycle_inventory_api_key')
api.bicycles.put(2)
```

```shell
curl "http://pbjwrites.info/api/bicycles/2" \
  -X PUT \
  -H "Authorization: bicycle_inventory_api_key"
```

```javascript
const bicycle_inventory = require('bicycle_inventory');

let api = bicycle_inventory.authorize('bicycle_inventory_api_key');
let max = api.bicycles.PUT(2);
```

> The above command returns JSON structured like this:

```json
{
  "Bicycle updated successfully"
}
```

This endpoint deletes a specific bicycle.

### HTTP Request

`PUT http://pbjwrites.info/bicycles/{bicycle_id}`

### URL Parameters

Parameter | Description
--------- | -----------
bicycle_id | The ID of the bicycle to update

### Request Body Example
```json
{
    "make": "Cannondale",
    "model": "SuperSix EVO Hi-MOD 1",
    "groupset": "SRAM RED AXS",
    "frame_type": "carbon",
    "frame_size": "58cm",
    "prime_color": "mercury",
    "model_year": 2024,
    "crank_length": "175mm"
}
```

## Delete a specific bicycle

```ruby
require 'bicycle_inventory'

api = bicycle_inventory::APIClient.authorize!('bicycle_inventory_api_key')
api.bicycles.delete(2)
```

```python
import bicycle_inventory

api = bicycle_inventory.authorize('bicycle_inventory_api_key')
api.bicycles.delete(2)
```

```shell
curl "http://pbjwrites.info/api/bicycles/2" \
  -X DELETE \
  -H "Authorization: bicycle_inventory_api_key"
```

```javascript
const bicycle_inventory = require('bicycle_inventory');

let api = bicycle_inventory.authorize('bicycle_inventory_api_key');
let max = api.bicycles.delete(2);
```

> The above command returns JSON structured like this:

```json
{
  "Bicycle deleted successfully"
}
```

This endpoint deletes a specific bicycle.

### HTTP Request

`DELETE http://pbjwrites.info/bicycles/{bicycle_id}`

### URL Parameters

Parameter | Description
--------- | -----------
bicycle_id | The ID of the bicycle to delete
