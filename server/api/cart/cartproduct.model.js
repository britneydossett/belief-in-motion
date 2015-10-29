'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartProductSchema = new Schema({
  item : {
    type : Schema.Types.ObjectId,
    ref: 'Product'
  },
  qty : Number
});

module.exports = mongoose.model('CartProduct', CartProductSchema);
