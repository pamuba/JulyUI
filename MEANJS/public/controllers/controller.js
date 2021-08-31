function AppCtrl($scope, $http){
    console.log("Hello from Controller")

    $http.get('/contactlist').success(function(response){
        $scope.contactlist = response  
    })
}