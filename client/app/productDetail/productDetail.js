'use strict';

angular.module('beliefInMotionApp')
.config(function ($stateProvider) {
  $stateProvider
  .state('productDetail', {
      url: '/products/:productId',
      templateUrl: 'app/productDetail/productDetail.html',
      controller: 'ProductDetailCtrl as ctrl',
      onEnter: function() {
        console.log('Entering productDetail');
      },
      onExit: function() {
        console.log('Leaving productDetail');
      }
    });
});
