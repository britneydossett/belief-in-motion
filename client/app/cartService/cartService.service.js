'use strict';

angular.module('beliefInMotionApp')
.service('cartService', function() {

  var that = this;

  that.cart = [];

  function findItemById(products, id) {
    return _.find(products, function(product) {
      return product._id === id;
    });
  }

  that.addProduct = function(product) {
    var found = findItemById(that.cart, product._id);
    if (found) {
      found.qty += product.qty;
    }
    else {
      that.cart.push(angular.copy(product));
    }
  };

  that.removeProduct = function(product) {
    var index = that.cart.indexOf(product);
    that.cart.splice(index, 1);
  };

  that.getCost = function(item) {
    return product.qty * product.price;
  };

  that.getTotal = function() {
    return _.reduce(that.cart, function(sum, product) {
      return sum + that.getCost(product);
    }, 0);
  };

  that.clearCart = function() {
    that.cart.length = 0;
  };
});
