'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  category: String,
  name: String,
  description: String,
  price: Number
});

module.exports = mongoose.model('Product', ProductSchema);
