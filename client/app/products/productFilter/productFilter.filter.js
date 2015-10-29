(function() {
 'use strict';

  angular.module('beliefInMotionApp')
  .filter('productFilter', function () {
    function isMatch(str, pattern) {
      if (pattern) {
        return str.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
      }
      else {
        return true;
      }
    }

    return function(inventory, searchText) {
      var products = {
          searchText: searchText,
          out: []
      };

      angular.forEach(inventory, function (product) {
        if (isMatch(product.category   , this.searchText) ||
            isMatch(product.name       , this.searchText) ||
            isMatch(product.description, this.searchText) ) {
          this.out.push(product);
        }
      }, products);
      return products.out;
    };
  });
})();
