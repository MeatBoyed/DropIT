const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.get('/', (req, res) => {
  const product = new Product({
    title: 'Adult Drum Kit',
    price: 5000,
    vendor: 'Young Ones',
    thumbnails: [
      {
        mainThumbnail:
          'https://firebasestorage.googleapis.com/v0/b/drop-it-1700b.appspot.com/o/Item%20Main%20Thumbnail%2FMainImage4.png?alt=media&token=dfe0d22a-79eb-4372-934f-7ad2d543a8c5',
        cartThumbnail:
          'https://firebasestorage.googleapis.com/v0/b/drop-it-1700b.appspot.com/o/Item%20Cart%20Thumbnail%2FCartImage2.png?alt=media&token=8cdd4ada-9979-4650-8fae-17cff0f87a2c',
      },
    ],
    viwerImages: [
      'https://firebasestorage.googleapis.com/v0/b/drop-it-1700b.appspot.com/o/Item%20Viewer%20Thumbnail%2FViewerImage2.png?alt=media&token=0a14ecc2-8179-4f8b-85df-501be1d31a8e',
      'https://firebasestorage.googleapis.com/v0/b/drop-it-1700b.appspot.com/o/Item%20Viewer%20Thumbnail%2FViewerImage1.png?alt=media&token=b9a0773d-c053-48f1-8185-388ab9919662',
    ],
    frequency: 13,
    views: 1,
    rating: 5.0,
  });

  product
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
