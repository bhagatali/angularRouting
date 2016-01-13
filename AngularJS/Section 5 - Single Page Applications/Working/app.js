
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider) {

    $routeProvider
        .when('/main',{
            templateUrl:'pages/main.html',
            controller:'myController'
        })
        .when('/second',{
            templateUrl:'pages/second.html',
            controller:'secondController'
        })
        .when('/second/:num',{
            templateUrl:'pages/second.html',
            controller:'secondController'
        })
});
   
myApp.controller('myController',['$scope',
								 '$filter',
								 '$timeout',
								 '$http',
                                 '$location',
                                 '$cacheFactory',
								 function ($scope, $filter, $timeout, 
                                           $http,$location,$cacheFactory){
	$scope.name = 'Ali';
	$scope.formattedName = $filter('uppercase')($scope.name);
    $scope.handle = '';
    $scope.characters = 5;
    
    console.log($location.path());
                                     
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    /* The watch list is a list that angular maintains to know when values of
    -- variables and functions have changed. The watch list is maintianed by 
    -- running a DIGEST LOOP. This digest loop checks for changes in old value
    -- and new value.*/

	/* The $watch method in the $scope allows us to get a track of the old and new value
	-- In this example below, I am watching the handle variable and logging the old
	-- and the new values.*/
    $scope.$watch('handle',function(newValue,oldValue){
    	console.info('Changed!');
    	console.log("Old: " + oldValue);
    	console.log("New: " + newValue);
    });

    /* The function setTimeout is a regular javascript function and does not fall in the 
    -- scope of AngularJS. So in this method, even though we change the value of the 
    -- handle variable, angular does not know the value of the handle has changed because
    -- the digest cycle does not run on this. The digest loop does not run because it is 
    -- not in angulars scope. Over here, in this function, a new thread is started in 
    -- memory. */
    setTimeout(function(){
    	$scope.handle = 'minalmenghani';
    	console.log("Scope has changed! - But the scope was not part of Angular Digest Cycle. Use $apply.");
    },3000);

    /* To make the above function work with angular we can use $apply. The $apply function
    -- makes angular run the digest loop on this function. */
    setTimeout(function(){
    	$scope.$apply(function(){
	    	$scope.handle = 'bhagatali';
	    	console.log("$apply - Scope has changed!");
    	});
    },6000);

    /* Angular makes this easier still by giving us services like $timeout. Essentially the
    -- $timeout service would use the $apply to apply all changes and make the digest loop
    -- run.*/
    $timeout(function() {
    	$scope.handle = 'AngularJS';
    	console.log("$timeout - Scope has changed!");
    }, 9000);


    $http.get('http://172.25.8.233:8080/itp/api/customers/',{cache:true})
    	 .success(function(result){
    	 	$scope.customers = result;
    	 })
    	 .error(function(data,status){
    	 	console.log(data);
    	 });
}]);

myApp.controller('secondController',['$scope', '$routeParams',function($scope,$routeParams){

    $scope.name = 'Minal';
    $scope.num = $routeParams.num || 1;

}]);