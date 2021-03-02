const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    vendor: {
      type: String,
      required: true,
    },
    thumbnails: [
      {
        mainThumbnail: {
          type: String,
          required: true,
        },
        cartThumbnail: {
          type: String,
          required: true,
        },
      },
    ],
    viwerImages: [
      {
        type: String,
        required: true,
      },
    ],
    frequency: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
