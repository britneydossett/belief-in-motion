'use strict';

var express = require('express');
var controller = require('./product.controller');

var router = express.Router();

router.get('/',         controller.getAll);
router.get('/:id',      controller.getProduct);
router.post('/',        controller.createProduct);
router.put('/:id',      controller.updateProduct);
router.patch('/:id',    controller.updateProduct);
router.delete('/:id',   controller.removeProduct);

module.exports = router;
