const knex = require("knex")(require("../knexfile"));

const add = (_req, res) => {
    knex('bucketlist')
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(400).send(`Error adding to bucketlist: ${err}`)
      );
  };
  
  module.exports = {
    add
  }