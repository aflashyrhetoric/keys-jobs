exports.up = function (knex) {
  return knex.schema.createTable("vendors", table => {
    table.increments("id")
    table.string("upc")
    table.string("vendor_name")
    table.string("product_url")
    table.string("vendor_specific_id")
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("vendors")
}
