const knex = require('knex')(require('../knexfile'));
const bcrypt = require('bcrypt');


const signup = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const existingUser = await knex('users').where({ username }).first();
      if (existingUser) {
        return res.status(400).json({ error: 'Username is already taken' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      await knex('users').insert({ username, password: hashedPassword });
  
      return res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {

      const user = await knex('users').where({ username }).first();
      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

    //   const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  
      return res.json({ message: 'Login successful', username: user.username });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  module.exports = {
    // authenticate,
    signup,
    login,
  };