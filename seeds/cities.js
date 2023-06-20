const citiesData = require('../seed-data/cities');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('cities')
  .del()
  .then(function () {
    return knex('cities').insert(citiesData);
  })
};
