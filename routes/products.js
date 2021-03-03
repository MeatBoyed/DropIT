const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const items = await Product.find().limit(5);
    if (!items) throw Error('No items');

    res.status(200).json(items);
    console.log(items);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
