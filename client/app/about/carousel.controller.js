'use strict';

angular.module('beliefInMotionApp')
  .controller('CarouselCtrl', function ($scope, $http) {
      $scope.myInterval = 3000;
      $scope.noWrapSlides = false;
      var slides = $scope.slides = [
        {
          image: '/assets/images/romania1.jpg'
        },
        {
          image: '/assets/images/boy-spicket.jpg'
        },
        {
          image: '/assets/images/girl-smiling.jpg'
        },
        {
          image: '/assets/images/fall-romania1.jpg'
        }
      ];
});

