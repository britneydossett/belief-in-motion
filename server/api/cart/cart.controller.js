'use strict';

var _ = require('lodash');
var CartProduct = require('./cartproduct.model');
var Product = require('../product/product.model');
var User = require('../user/user.model');

function findProductInCart(user, productId) {
  return _.find(user.cart, function(cartProduct) {
    console.log('Comparing cart ctrl ' + productId + ' to ' + cartProduct.item._id);
    return cartProduct.item._id.equals(productId);
  });
}

// Get the cart from the DB.
exports.get = function(req, res) {
  console.log('get, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  User.findById(userId)
  .populate('cart.item')
  .exec(function(err, user) {
    // console.log('user: ' + user.name);
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }
    console.log('returning cart: ' + JSON.stringify(user.cart));
    res.json(200, user.cart);
  });
};

// Add a new item to the cart or update the qty and return the cart.
exports.addProduct = function(req, res) {
  console.log('addProduct, url = ' + req.url);
  var userId = req.params.userid.trim();
  var productId = req.params.productid.trim();
  console.log('userId: ' + userId + ', productId: ' + productId);

  User.findById(userId)
  .populate('cart.item')
  .exec(function(err, user) {
    // Check if item is already in cart
    var found = findProductInCart(user, productId);
    if (found) {
      console.log('Found product ' + found + ' in cart, therefore incrementing qty');
      found.qty = found.qty + 1;
      user.save(function() {
        return res.json(201, user.cart);
      });
    }
    else {
      Product.findById(productId, function(err, product) {
        if (err) { return handleError(res, err); }
        if (!product) { return res.send(404); }
        console.log('Adding product to cart: ' + product.name);
        user.cart.push( new CartProduct( { item: product, qty: 1 } ) );
        user.save(function() {
          return res.json(201, user.cart);
        });
      });
    }
  });
};

// Remove an item from the cart and return the cart.
exports.removeProduct = function(req, res) {
  console.log('removeProduct, url = ' + req.url);
  var userId = req.params.userid;
  var productId = req.params.productid;
  console.log('userId2: ' + userId + ', productId2: ' + productId);

  // Remove the item, get the updated cart, and return the cart
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    // Check if item is already in cart
    var found = findProductInCart(user, productId);
    if (found) {
      console.log('Removing product from cart');
      user.cart.pull(found.item._id);               // pull is a feature of MongooseArray!
    }
    else {
      return res.send(404);
    }
    user.save(function() {
      user.populate('cart.product', function(err, user) {
        return res.json(201, user.cart );
      });
    });
  });
};

// Remove all items from the cart in the DB.
exports.removeAllProducts = function(req, res) {
  console.log('removeAllProducts, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  // remove all items from cart and return the cart
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    user.cart = [];
    user.save(function() {
      user.populate('cart.products', function(err, user) {
        return res.send(204, user.cart);
      });
    });
  });
}

function handleError(res, err) {
  return res.send(500, err);
}
