'use strict';

angular.module('beliefInMotionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html'
      });
  });
