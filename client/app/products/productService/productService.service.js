'use strict';

angular.module('beliefInMotionApp')
  .service('cartService', function () {
    var that = this;

    that.findItemById = function(id) {
    return $http.get('/api/products/' + id);
  };

  that.getItems = function() {
    return $http.get('/api/products');
  };
  });
