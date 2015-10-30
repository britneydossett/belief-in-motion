'use strict';

angular.module('beliefInMotionApp')
.controller('ProductsCtrl', function($state, Auth, productService, cartService) {

  var that = this;

  that.searchText = '';
  that.total = 0;

  that.isLoggedIn = Auth.isLoggedIn;

  that.getInventory = function() {
    productService.getProducts().then(function(json) {
      that.inventory = json.data.products;
      console.log(that.inventory);
    });
  };

  if (Auth.isLoggedIn()) {
    cartService.getCart().then(function(json) {
      that.cart = json.data;
      console.log('that.cart: ', JSON.stringify(that.cart));
      that.total = cartService.getTotal(that.cart);
    });
  }

  that.getInventory();

  that.addProduct = function(product) {
    if (Auth.isLoggedIn()) {
      console.log('addProduct:', product);
      cartService.addProduct(product).then(function(json) {
        that.cart = json.data;
        console.log('addProduct: new cart = ', JSON.stringify(that.cart));
        that.total = cartService.getTotal(that.cart);
      }, function(err) {
        console.log('ERROR: addProduct post: ' + JSON.stringify(err));
      });
    }
    else {
      $state.go('signup');
    }
  };

  that.removeProduct = function(cartItem) {
    cartService.removeProduct(cartItem).then(function(json) {
      that.cart = json.data;
      that.total = cartService.getTotal(that.cart);
    }, function(err) {
      console.log('ERROR: removeProduct delete: ' + JSON.stringify(err));
    });
  };

  that.getCost = function(cartItem) {
    return cartService.getCost(cartItem);
  };

  that.clearCart = function() {
    return cartService.clearCart().then(function(json) {
      that.cart = json.data;
      that.total = cartService.getTotal(that.cart);
    }, function(err) {
      console.log('clearCart delete ERROR: ' + JSON.stringify(err));
    });
  };

  that.goProduct = function (product) {
    console.log('goProduct: ', product._id);
    $state.go( 'productDetail', { productId : product._id } );
  };

});
