app.controller("SimpleDemoController", function($scope) {

    $scope.models = {
        selected: null,
        lists: {"Montag": [], "Dienstag": [], "Mittwoch": [], "Donnerstag": [], "Freitag": [], "Samstag": [], "Sonntag": []}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.Montag.push({label: "Montag" + i});
        $scope.models.lists.Dienstag.push({label: "Dienstag" + i});
         $scope.models.lists.Mittwoch.push({label: "Mittwoch" + i});
          $scope.models.lists.Donnerstag.push({label: "Donnerstag" + i});
           $scope.models.lists.Freitag.push({label: "Freitag" + i});
            $scope.models.lists.Samstag.push({label: "Samstag" + i});
             $scope.models.lists.Sonntag.push({label: "Sonntag" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});
