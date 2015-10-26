'use strict';

var Product = require('./product.model');

// Get list of products
exports.getAll = function(req, res) {
  Product.find(function(error, products) {
    if(error) res.json({message: 'Could not find a product'});

    res.json({products: products});
  });
};

// Get a single product
exports.getProduct = function(req, res) {
  var id = req.params.id;

  Product.findById({_id: id}, function(error, product) {
    if(error) res.json({message: 'Could not find product b/c:' + error});

    res.json({product: product});
  });
};

// Creates a new product in the DB.
exports.createProduct = function(req, res) {
  console.log('in POST');
  console.log('body:',req.body);

  var product = new Product(req.body);

  product.save(function(error) {
    if(error) res.json({messsage: 'Could not ceate product b/c:' + error});

    res.json({product: product});
  });
};

// Updates an existing product in the DB.
exports.updateProduct = function(req, res) {
  var id = req.params.id;

  Product.findById({_id: id}, function(error, product) {
    if(error) res.json({message: 'Could not find product b/c:' + error});

    if(req.body.category) product.category = req.body.category;
    if(req.body.name) product.name = req.body.name;
    if(req.body.description) product.description = req.body.description;
    if(req.body.price) product.price = req.body.price;

    product.save(function(error) {
      if(error) res.json({messsage: 'Could not update product b/c:' + error});

      res.json({message: 'Product successfully updated', product: product});
    });
  });
};

// Deletes a product from the DB.
exports.removeProduct = function(req, res) {
  var id = req.params.id;

  Product.remove({_id: id}, function(error) {
    if(error) res.json({message: 'Could not delete product b/c:' + error});

    res.json({message: 'Product successfully deleted'});
  });
};

// function handleError(res, err) {
//   return res.status(500).send(err);
// }
