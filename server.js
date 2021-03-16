const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const home = require('./Routes/home');
const search = require('./Routes/search');
const product = require('./Routes/product');
const clientProfile = require('./Routes/clientProfile');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const MONGOURI = process.env.MONGO_URI || "mongodb+srv://Adim-Dev:yqwhTgW3QlOrVDMX@grabble.erwzi.mongodb.net/Grabble?retryWrites=true&w=majority"

mongoose
  .connect(MONGOURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongo'));

app.use('', home);
app.use('/search', search);
app.use('/product', product);
app.use('/client-profile', clientProfile);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
