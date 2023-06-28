/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("bucketlist", (table)  => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().notNullable();
        table.string("city").notNullable();
        table.string("attraction_name").notNullable();
        table.string("attraction_description").notNullable();
        table.string("attraction_image").notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

        table.foreign("user_id").references("id").inTable("users");
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("bucketlist");
};
