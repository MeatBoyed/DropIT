const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

const limit = 5;

// Home Page fetch route
router.get('/', async (req, res, next) => {
  const page = req.query.page;

  try {
    if (!page || page == '0') res.status(400).json({ status: 400, message: 'Missing required field: Page or Page == 0' });

    const offset = limit * (page - 1);

    const products = await Product.aggregate([
      {
        $skip: offset,
      },
      {
        $limit: limit,
      },
      {
        $project: {
          _id: 1,
          title: 1,
          price: 1,
          vendor: 1,
          'thumbnails.mainThumbnail': 1,
        },
      },
      {
        $sort: {
          price: -1,
          rating: -1,
        },
      },
    ]);

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ status: 400, message: 'Internal Error' });
  }
});

module.exports = router;
