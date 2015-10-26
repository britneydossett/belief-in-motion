'use strict';

describe('Controller: ProductDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('beliefInMotionApp'));

  var ProductDetailCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductDetailCtrl = $controller('ProductDetailCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
