const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

const limit = 5;

// Search Route
router.get('/:query', async (req, res, next) => {
  const query = req.params.query;
  const operation = req.query.operation;
  const page = req.query.page;

  try {
    if (!query || !operation || !page || page == '0')
      return res.status(400).json({ status: 400, message: 'Missing required fields: Operation || Page || Page == 0' });

    const offset = limit * (page - 1);
    let products;

    // Check operation type. 0 == Full text search, 1 == Filter
    if (operation == '0') {
      products = await Product.aggregate([
        {
          $search: {
            index: 'MockDataSearch',
            text: {
              query: query,
              path: ['title', 'vendor', 'description', 'categories'],
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
          },
        },
        {
          $sort: {
            price: -1,
            rating: -1,
          },
        },
      ]);
    } else if (operation == '1') {
      products = await Product.aggregate([
        {
          $match: {
            categories: query,
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
          },
        },
        {
          $sort: {
            price: -1,
            rating: -1,
          },
        },
      ]);
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json('Internal error');    
  }
});

module.exports = router;
