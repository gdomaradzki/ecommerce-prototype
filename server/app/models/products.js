const mongoose = require('mongoose');
const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: false
  },

  description: {
    type: String,
    required: true
  },

  inCart: {
    type: Boolean,
    required: true
  },

  stock: {
    type: Number,
    required: true
  },

  type: {
    type: String,
    required: true
  },

  productSize: {
    type: String,
    required: true
  },

  brand: {
    type: String,
    required: true
  },

  newProduct: {
    type: Boolean,
    required: true
  },

  promo: {
    type: Boolean,
    required: true
  },

  price: {
    price: Number,
    offer: Number
  }
}, { collection: 'products' });

mongoose.model('Product', schema)
