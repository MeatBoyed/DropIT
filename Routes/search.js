const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

const limit = 5;

// Search Route
router.get('/:query', async (req, res, next) => {
  const query = req.params.query;
  const page = req.query.page;

  console.log(typeof page);

  try {
    if (!query || !page || page == '0')
      res.status(400).json({ status: 400, message: 'Missing required field: Page or Page == 0' });

    const offset = limit * (page - 1);

    const products = await Product.aggregate([
      {
        $search: {
          index: 'homePageSearch',
          text: {
            query: query,
            path: ['title', 'vendor', 'description', 'category'],
            fuzzy: {
              maxEdits: 2,
              prefixLength: 3,
            },
          },
        },
      },
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
          category: 1,
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
    res.status(400).json('Internal error');
  }
});

module.exports = router;
