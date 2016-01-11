var myApp = angular.module("myApp",["ngRoute"]);

myApp.service("myCustomService",function(){
    var self = this;
    
    this.name = "Rolling Stones";
    this.nameLength =  function(){
        return self.name.length;
    }    
});

myApp.config(function($routeProvider){
    
    $routeProvider
        .when("/facebook",{
            templateUrl:"pages/facebook.html",
            controller:"myController"
    })
        .when("/twitter",{
            templateUrl:"pages/twitter.html",
            controller:"secondController"
        
    })
        .when("/twitter/:number",{
            templateUrl:"pages/twitter.html",
            controller:"secondController"
    })
});

myApp.controller("myController",["$scope","$log","myCustomService",function($scope,$log,myCustomService){
    $scope.name = myCustomService.name;
    
    $scope.$watch("name",function(){
       myCustomService.name = $scope.name; 
    });
    
    $log.log(myCustomService.name);
    $log.log(myCustomService.nameLength());
}]);

myApp.controller("secondController",["$scope","$log","$routeParams","myCustomService",function($scope,$log,$routeParams,myCustomService){
    $scope.name = "Minal";
    $scope.num = $routeParams.number || 1;
    
    $scope.name = myCustomService.name;
    
    $log.log(myCustomService.name);
    $log.log(myCustomService.nameLength());
}]);