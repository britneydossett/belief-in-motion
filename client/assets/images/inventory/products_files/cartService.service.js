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

  that.removeProduct = function(cartItem) {
    var userId = Auth.getCurrentUser()._id;
    console.log('cartItem: ', cartItem);
    return $http.delete('/api/users/' + userId + '/cart/' + cartItem.item._id);
  };

  that.getCost = function(cartItem) {
    console.log('getCost function: ', cartItem);
      return cartItem.qty * cartItem.price;
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
