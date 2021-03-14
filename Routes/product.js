const express = require('express');
const { ObjectID } = require('mongodb');
const router = express.Router();

const Product = require('../models/Product');

router.get('/:id', async (req, res) => {
  const productID = req.params.id;

  try {
    if (!productID) res.status(400).json({ status: 400, message: 'Missing required field: productID' });

    const product = await Product.findById(productID);

    res.status(200).json(product);
  } catch (error) {
    if (error.constructor.name == 'CastError') {
      res.status(400).json({ status: 404, message: 'No product found with that ID' });
    } else {
      res.status(400).json('Internal error');
    }
  }
});

router.get('/cartThumbnail/:id', async (req, res) => {
  const productID = req.params.id;

  try {
    if (!productID) res.status(400).json({ status: 400, message: 'Missing required field: productID' });

    const newId = new ObjectID(productID);

    const product = await Product.aggregate([
      {
        $match: {
          _id: newId,
        },
      },
      {
        $project: {
          _id: 1,
          'thumbnails.cartThumbnail': 1,
          frequency: 1,
        },
      },
    ]);

    res.status(200).json(product[0]);
  } catch (error) {
    if (error.constructor.name == 'CastError') {
      res.status(400).json({ status: 404, message: 'No product found with that ID' });
    } else {
      res.status(400).json({ status: 400, message: 'Internal Error' });
    }
  }
});

module.exports = router;
