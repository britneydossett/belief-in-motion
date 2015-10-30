'use strict';

angular.module('beliefInMotionApp')
  .service('productService', function ($http) {
    var that = this;

    that.findItemById = function(id) {
      return $http.get('/api/products/' + id);
    };

    that.getProducts = function() {
      return $http.get('/api/products');
    };
  });

//that.inventory = [];
