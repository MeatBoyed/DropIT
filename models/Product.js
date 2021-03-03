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
    description: {
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
    category: [
      {
        type: String,
        required: true,
      },
    ],
    views: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    frequency: {
      type: Number,
      required: true,
    },
  },
  { collection: 'Products', timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
