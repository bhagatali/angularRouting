var myApp = angular.module("myApp",["ngRoute"]);

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

myApp.controller("myController",["$scope",function($scope){
    $scope.name = "Ayaan";
}]);

myApp.controller("secondController",["$scope","$routeParams",function($scope,$routeParams){
    $scope.name = "Minal";
    $scope.num = $routeParams.number || 1;
}]);