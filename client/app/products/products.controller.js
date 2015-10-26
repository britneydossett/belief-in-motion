'use strict';

angular.module('beliefInMotionApp')
.controller('ProductsCtrl', function($state, productService, cartService) {

  this.searchText = '';
  this.products = productService.inventory;
  this.cart = cartService.cart;

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
