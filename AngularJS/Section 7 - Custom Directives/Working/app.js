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
            templateUrl:"routing/facebook.html",
            controller:"myController"
    })
        .when("/twitter",{
            templateUrl:"routing/twitter.html",
            controller:"secondController"
        
    })
        .when("/twitter/:number",{
            templateUrl:"routing/twitter.html",
            controller:"secondController"
    })
});

myApp.controller("myController",["$scope","$log","myCustomService",function($scope,$log,myCustomService){
    $scope.name = myCustomService.name;
    
    $scope.$watch("name",function(){
       myCustomService.name = $scope.name; 
    });

    $scope.bank={
        name:"Bank of Jupiter",   
        motto:"We are broke",
        message:"Show me the money!",
        address:"786 Plymoth St",
        city:"Dark Moon",
        state:"Alpha Beta Gamma",
        zip:"67581"
};
    
    $scope.bankPlanet = [{
        name:"Bank of Mercury",   
        motto:"Why We Bank?",
        message:"They keep us focused on what matters most. The answer is clear: our customers.",
        address:"786 Main St",
        city:"Madivala",
        state:"Tupperware",
        zip:"110"
    },
    {
        name:"Bank of Venus",   
        motto:"The V in the Venus is us.",
        message:"Customer is always right.",
        address:"654 Martian Rock",
        city:"Waterhole",
        state:"Bedrock",
        zip:"799"
    },
    {
        name:"Bank of Earth",   
        motto:"We are the bank the dinosaurs used.",
        message:"Make Millions!",
        address:"098 Taco Street",
        city:"Hot Sauce",
        state:"Burrito",
        zip:"09867"
    }];
        
    $scope.ohWhatFun = function(bank){
        return bank.address + ', ' + bank.city + ', ' + bank.state + ', ' + bank.zip;
    };
    
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