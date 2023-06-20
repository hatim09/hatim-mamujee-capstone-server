const knex = require('knex')(require('../knexfile'));

const findAllAttractions = (_req, res) => {
    knex('attractions')
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(400).send(`Error retrieving Attractions: ${err}`)
      );
  };

  const findAttractionsByCity = (req, res) => {
    const { cityId } = req.params;
    knex('attractions')
    .select('*')
    .where({city_id: cityId})
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(400).send(`Error retrieving Attractions: ${err}`)
      );
  };
  
  module.exports = {
    findAllAttractions,
    findAttractionsByCity
  }