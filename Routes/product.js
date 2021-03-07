const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.get('/:id', async (req, res) => {
  const productID = req.params.id;
  console.log(productID);

  try {
    if (!productID) res.status(400).json({ status: 400, message: 'Missing required field: productID' });

    const product = await Product.findById(productID);

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json('Internal error');
  }
});

module.exports = router;
