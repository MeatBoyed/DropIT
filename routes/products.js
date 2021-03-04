const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const limit = 5;
    const page = req.query.page;
    const offset = limit * (page - 1);

    const products = await Product.find({}).skip(offset).limit(limit).sort({ rating: 1 });
    if (!products) throw Error('No Products');

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const productID = req.params.id;

    const product = await Product.findById(productID);

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
