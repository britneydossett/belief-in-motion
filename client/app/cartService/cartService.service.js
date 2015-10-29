'use strict';

angular.module('beliefInMotionApp')
.service('cartService', function($http, Auth) {

   var that = this;

  that.getCart = function() {
    var userId = Auth.getCurrentUser()._id;
      return $http.get('/api/users/' + userId + '/cart/');
  };

  that.addProduct = function(product) {
    var userId = Auth.getCurrentUser()._id;
    if (userId) {
      return $http.post('/api/users/' + userId + '/cart/' + product._id);
    }
    else {
      return $http.get('/signup');
    }
  };

  that.removeProduct = function(productId) {
    var userId = Auth.getCurrentUser()._id;
    console.log('cart product: ', productId);
    return $http.delete('/api/users/' + userId + '/cart/' + productId);
  };

  that.getCost = function(cartItem) {
      return cartItem.qty * cartItem.item.price;
  };

  that.getTotal = function(cart) {
    var total = _.reduce(cart, function(sum, cartProduct) {
      return sum + that.getCost(cartProduct);
    }, 0);
    return total;
  };

  that.clearCart = function() {
    var userId = Auth.getCurrentUser()._id;
    return $http.delete('/api/users/' + userId + '/cart/');
  };
});
