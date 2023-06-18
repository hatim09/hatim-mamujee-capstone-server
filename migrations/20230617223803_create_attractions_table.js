/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("attractions", (table)  => {
        table.increments("id").primary();
        table.integer("city_id").unsigned().references("cities.id");
        table.string("attracion_city");
        table.string("attraction_name");
        table.string("attraction_description");
        table.string("attraction_image");
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("attractions");
};
