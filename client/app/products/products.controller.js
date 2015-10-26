'use strict';

angular.module('beliefInMotionApp')
.controller('ProductsCtrl', function($state, productService, cartService) {

  this.searchText = '';
  this.cart = cartService.cart;
  var that = this;

  productService.getProducts().then(function(json) {
    that.products = json.data;
  });

  this.addProduct = function(product) {
    cartService.addProduct(product);
  };

  this.removeProduct = function(product) {
    cartService.removeProduct(product);
  };

  this.getCost = function(product) {
    return cartService.getCost(product);
  };

  this.getTotal = function() {
    return cartService.getTotal();
  };

  this.clearCart = function() {
    return cartService.clearCart();
  };

  this.goProduct = function (product) {
    console.log('goProduct: ' + product._id);
    $state.go( 'productDetail', { productId : product._id } );
  };
});
