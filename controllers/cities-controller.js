const knex = require('knex')(require('../knexfile'));

const findCities = (_req, res) => {
    knex('cities')
      .then((data) => {
        res.status(200).json(data);
        console.log(data);
      })
      .catch((err) =>
        res.status(400).send(`Error retrieving Cities: ${err}`)
      );
  };
  
  module.exports = {
    findCities
  }