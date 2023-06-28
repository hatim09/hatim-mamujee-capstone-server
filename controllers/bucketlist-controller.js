const knex = require("knex")(require("../knexfile"));

const add = (req, res) => {
    knex('bucketlist')
      .insert(req.body)
      .then((result) => {
        return knex('bucketlist').where({ id: result[0] });
      })
      .then((createdItem) => {
        res.status(201).send(createdItem);
      })
      .catch((err) =>
        res.status(500).json(`Error adding to bucketlist: ${err}`)
      );
  };
  
  const findAllBucketlist = (_req, res) => {
    knex('bucketlist')
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) =>
        res.status(400).send(`Error retrieving Bucket list information: ${err}`)
      );
  }

  const deleteItem = async (req, res) => {
    const { id } = req.params;
    
    try {
      await knex('bucketlist').where({ id }).del();
      res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const deleteAll = async (_req, res) => {
    try {
      await knex('bucketlist').del();
      await knex.raw('ALTER TABLE bucketlist AUTO_INCREMENT = 1');
      res.sendStatus(204);
    } catch (error) {
      console.error('Error deleting bucketlist data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports = {
    add,
    findAllBucketlist,
    deleteItem,
    deleteAll,
  }