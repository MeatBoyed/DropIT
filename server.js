const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const products = require('./Middleware/productRoutes');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.urlencoded());

const db = require('./apiKeys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo'));

app.use('/api/products', products);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
