# Plan

## Product Completeness
- [ ] Mapping UPC codes to SKUs
- [ ] Mapping products to UPC codes

That should result in something like this, where _UPC Codes_ map to _Product Data_ containing various skus

```js
{
  13a3fJAe9: {
    brand: "Ducky",
    full_title: "Ducky x Varmilo Some Keyboard"
    sku_mechanicalkeyboards: "OAWJEFOAJoi3j2oij"
    sku_othervendor: "OAWJEFOAJoi3j2oij"
  }
}
```

This will make it possible to build an API that takes the product data, and lets us set a primary key on it so we can fill out missing data.