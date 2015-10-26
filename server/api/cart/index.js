'use strict';

var express = require('express');
var controller = require('./cart.controller');

var router = express.Router();

router.get   ('/:userid/cart/',           controller.get);
router.post  ('/:userid/cart/:productid', controller.addProduct);
router.delete('/:userid/cart/:productid', controller.removeProduct);
router.delete('/:userid/cart/',           controller.removeAllProducts);

module.exports = router;
