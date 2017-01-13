'use strict';

var App = angular.module('app', ['ngRoute'])

  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!');

    $routeProvider
    .when('/', {
        templateUrl: '/views/test.html',
        controller: 'Overview',
        title: "Overview"
      })
      .when('/about-us', {
        templateUrl: '/views/about.html',
        controller: 'ViewCtrl',
        title: "about"
      })
      .otherwise( { redirectTo: '/' } );

    // $routeProvider.otherwise({redirectTo: '/view1'});
  }])
  ;


App.controller('Overview', function ViewCtrl($scope) {
    $scope.Weekdays = [
      "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday", "Sunday"
    ]
});

App.controller('View2Ctrl', function ViewCtrl($scope) {

});

App.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);