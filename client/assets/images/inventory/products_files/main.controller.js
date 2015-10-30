'use strict';

angular.module('beliefInMotionApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.Products = [];

    $http.get('/api/products').success(function(Products) {
      $scope.Products = Products;
      socket.syncUpdates('thing', $scope.Products);
    });

    $scope.addProduct = function() {
      if($scope.newProduct === '') {
        return;
      }
      $http.post('/api/products', { name: $scope.Product });
      $scope.newProduct = '';
    };

    $scope.removeProduct = function(product) {
      $http.delete('/api/products/' + product._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('product');
    });
});
