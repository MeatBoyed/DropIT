const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const limit = 5;
    const page = req.query.page;
    const offset = limit * (page - 1);

    const returnProducts = [];

    const products = await Product.find({}).skip(offset).limit(limit).sort({ price: 1 });
    if (products) {
      products.forEach((product) => {
        returnProducts.push({
          id: product._id,
          title: product.title,
          price: product.price,
          vendor: product.vendor,
          mainThumbnail: product.thumbnails[0].mainThumbnail,
        });
      });
    } else {
      throw Error('No Products');
    }

    res.status(200).json(returnProducts);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

module.exports = router;
