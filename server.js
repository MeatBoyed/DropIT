const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const products = require('./routes/products');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyparser.json());

const db = require('./apiKeys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo'))
  .catch((error) => console.log(error));

app.use('/api/products', products);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
