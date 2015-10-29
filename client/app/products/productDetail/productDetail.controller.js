'use strict';

angular.module('beliefInMotionApp')
.controller('ProductDetailCtrl', function($state, productService) {
  var id = $state.current.url;
  console.log(id);
  var that = this;

  productService.findItemById(id).then(function(json) {
    that.product = json.data.name;
    console.log(json.data.name);
  });
});
