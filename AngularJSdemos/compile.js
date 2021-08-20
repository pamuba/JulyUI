//1. Create a module
var myApp = angular
                .module("myModule",[])
                .controller("myController",function($scope){
                   
                });

myApp.directive('message', function($interpolate){
    return{
        compile:function(tElement, tAttributes){
            console.log(tAttributes.text + " - In Compile")
            tElement.css("border", "1px solid black")

            //pre link , post link are returned to the compile phase
            return {
                pre:function($scope, iElement, iAttributes){
                    console.log(iAttributes.text+ ' - In Pre')
                },
                post:function(scope, iElement, iAttributes){
                    console.log(iAttributes.text+ ' - In Post')
                    if(iAttributes.text === "3"){
                        iElement.css("border", "1px solid red")
                    }
                    iElement.on('click', scope.btnClick)
                }
            }
        },
        controller: function($scope, $element, $attrs){
            var v = $interpolate($attrs.text)($scope)
            // console.log($attrs.text + " - In Controller")
            console.log(v + " - In Controller")
            $scope.btnClick = function(){
                alert(v)
            }
        }
    }
})

