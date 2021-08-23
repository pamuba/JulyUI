//1. Create a module
var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
      $scope.emps = [
          {empno:'10001', ename:"John"},
          {empno:'10002', ename:"Jill"},
          {empno:'10003', ename:"Jimmy"},
          {empno:'10004', ename:"Jake"},
      ]

      $scope.addEmp = function(){
          var newEmpno = 10000* $scope.emps.length + 1;
          var newEname = "ename"+newEmpno;

          $scope.emps.push({empno: newEmpno, ename:newEname})
      }
      $scope.modify3rdEmp = function(){
          $scope.emps[2].ename = "Test"
      }
      //collection level watcher
    //   $scope.$watch('emps', function(newValue, oldValue){
    //         console.log("No. of employees:"+$scope.emps.length)
    //   })



//     $scope.$watchCollection('emps', function(newValue, oldValue){
//         console.log("No. of employees:"+$scope.emps.length)
//    })

    //work on everything
    $scope.$watch('emps', function(newValue, oldValue){
        console.log("No. of employees:"+$scope.emps.length)
    }, true)

    /////////////////////////////////////////////////////////////////////////
    // $scope.o = {
    //     a:1,
    //     b:2,
    //     c:3
    // };

    // $scope.$watch('o', function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.o.c = $scope.o.a * $scope.o.b
    //     }
    // }, true)


    // $scope.$watchGroup(['o.a', 'o.b'], function(newValue, oldValue){
    //     if(newValue != oldValue){
    //         $scope.o.c = $scope.o.a * $scope.o.b
    //     }
    // })


  });
