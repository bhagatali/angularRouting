var myApp = angular.module("myApp",[]);

//Using the $scope service along with other services such as $log and $filter

/* -- This version of definig the controller will break minification -- */
//myApp.controller("myController",function ($log, $scope, $filter){

/* -- This is the preferred method --  */
/* -- The function that is required for controller will always be the last parameter
   --  in the array. The order of the variables in the array have to match the order
   --  of the services used as paramters to the function. */
   
myApp.controller("myController",["$log","$scope","$filter",function ($log, $scope, $filter){
	$log.debug("This is a debug message for my code");

	$scope.name = "Ali";
	$scope.formattedName = $filter('uppercase')($scope.name);

	$log.log("Hola senor " + $scope.name);
	$log.info("FYI " + $scope.name);
	$log.warn("Heed my WARNING " + $scope.formattedName);
	$log.error("OMG! " + $scope.formattedName + ", now you have an error.");
}]);