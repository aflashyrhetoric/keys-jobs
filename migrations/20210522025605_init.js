exports.up = function (knex) {
  return knex.schema.createTable("products", table => {
    table.increments("id")
    table.string("brand")
    table.string("upc")
    table.string("sku") // MechanicalKeyboards by default
    table.string("asins")
    table.string("full_title")
    table.string("product_name")
    table.text("product_description")
    table.string("url")
    table.string("img_path")
    table.string("size") // keyboardsize, not just "large"
    table.string("price") // full price
    table.string("frame_color")
    table.string("primary_led_color")
    table.string("hotswappable")
    table.string("interfaces")
    table.string("available_switch_variants")
    table.text("features")
    table.string("windows_compatible")
    table.string("mac_compatible")
    table.string("linux_compatible").nullable()
    table.string("dimensions").nullable()
    table.string("weight").nullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("products")
}
