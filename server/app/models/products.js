const mongoose = require('mongoose');
const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
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

  newPromo: {
    type: Boolean,
    required: true
  },

  price: [{}]
}, { collection: 'products' });

mongoose.model('Product', schema)
