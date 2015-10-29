'use strict';

angular.module('beliefInMotionApp')
.controller('ProductDetailCtrl', function($stateParams, productService) {

  var id = $stateParams.productId;
  var that = this;

  productService.findItemById(id).then(function(json) {
    that.product = json.data.product;
    console.log('Product Detail:', that.product);
  });
});
