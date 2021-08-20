//1. Create a module
var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;
    $scope.d = 4;

    $scope.updateC = function () {
      $scope.c = $scope.a * 4;
    };

    $scope.$watchGroup(['a','b'], function(newValue, oldValue){
        if (newValue != oldValue)
            $scope.c = $scope.a * $scope.b;
    });

    $scope.$watch("c", function (newValue, oldValue) {
      if (newValue != oldValue) {
        console.log("Updated C to: " + newValue);
      }
    });
    
    // $scope.$watch("b", function (newValue, oldValue) {
    //   if (newValue != oldValue) {
    //     $scope.c = $scope.b
    //   }
    // });
    // $scope.$watch("a", function (newValue, oldValue) {
    //   if (newValue != oldValue) {
    //     $scope.b = $scope.a * 4
    //   }
    // });
  });
