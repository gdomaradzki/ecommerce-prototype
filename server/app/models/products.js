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

  brand: {
    type: String,
    required: true
  },

  price: [{}]
}, { collection: 'products' });

mongoose.model('Product', schema)
