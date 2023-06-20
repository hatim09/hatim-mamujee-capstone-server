const attractionsData = require('../seed-data/attractions');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('attractions')
  .del()
  .then(function () {
    return knex('attractions').insert(attractionsData);
  })
};
