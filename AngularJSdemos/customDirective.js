//1. Create a module
var myApp = angular
                .module("myModule",[])
                .controller("myController",function($scope){
                  $scope.msg = "Message from Controller"
                })
                .controller("myController1",function($scope){
                    $scope.msg = "Message from Controller1"
                });

//Custom Directive
myApp.directive('myInfoMsg', function(){
    return {
        // template:"<h2>This is a message</h2>"
        // template:"<h2>{{msg}}</h2>"
        templateUrl : "my-info-msg.html"
    }
})

