const express = require('express');
const router = express.Router();

const ClientProfile = require('../models/ClientProfile');

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

    res.status(200).json(clientProfile);
  } catch (error) {
    res.status(400);
  }
});

module.exports = router;
