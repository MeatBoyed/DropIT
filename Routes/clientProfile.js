const express = require('express');
const router = express.Router();

const ClientProfile = require('../models/ClientProfile');
const Product = require('../models/Product');

const limit = 5;

router.get('/', async (req, res) => {
  const title = req.query.title;
  try {
    if (!title || title == '') res.status(400).json({ status: 400, message: 'Missing required field: Title or Tile == 0' });

    const clientProfile = await ClientProfile.aggregate([
      {
        $match: {
          title: title,
        },
      },
      {
        $project: {
          _id: 0,
          title: 1,
          location: 1,
          description: 1,
          socialMedia: 1,
          images: 1,
        },
      },
    ]);

    if (!clientProfile) return res.status(404).json({ status: 404, message: "Client Profile not found"})

    res.status(200).json(clientProfile);
  } catch (error) {

    if (error.constructor.name == 'CastError') {
      res.status(404).json({ status: 404, message: 'No product found with that ID' });
    } else {
      res.status(500).json({ status: 500, message: 'Internal Error' });
    }
  }
});

router.get('/products', async (req, res) => {
  const vendor = req.query.vendor;
  const page = req.query.page;

  try {
    if (!vendor || !page || page == '0') res.status(400).json({ status: 400, message: 'Missing required fields' });

    const offset = limit * (page - 1);

    const products = await Product.aggregate([
      {
        $match: {
          vendor: vendor,
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

    if (!clientProfile) return res.status(404).json({ status: 404, message: "Client Profile not found"})

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Internal Error' });
  }
});

module.exports = router;
