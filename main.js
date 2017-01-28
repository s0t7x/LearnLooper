var app = angular.module("app", ["ngRoute", "dndLists"])
    .config(function($routeProvider) {
        $routeProvider
            .when('/simple', {
                templateUrl: './views/simple/simple-frame.html',
                controller: 'SimpleDemoController'
            })
            .otherwise({redirectTo: '/simple'});
    })

    .directive('navigation', function($rootScope, $location) {
        return {
            template: '<li ng-repeat="option in options" ng-class="{active: isActive(option)}">' +
                      '    <a ng-href="{{option.href}}">{{option.label}}</a>' +
                      '</li>',
            link: function (scope, element, attr) {
                scope.options = [
                    {label: "Simple Test", href: "#/simple"}
                ];

                scope.isActive = function(option) {
                    return option.href.indexOf(scope.location) === 1;
                };

                $rootScope.$on("$locationChangeSuccess", function(event, next, current) {
                    scope.location = $location.path();
                });
            }
        };
    });
