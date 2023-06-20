const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const PORT = process.env.PORT || 5050;

app.use(cors());
const bucketlistRoutes = require('./routes/bucketlist-routes');
const citiesRoutes = require('./routes/cities-routes');
const attractionsRoutes = require('./routes/attractions-routes');
app.use(express.json());

app.use('/bucketlist', bucketlistRoutes);
app.use('/cities', citiesRoutes);
app.use('/attractions', attractionsRoutes);


app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
  });


