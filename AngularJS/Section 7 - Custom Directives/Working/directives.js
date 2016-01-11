//using @ in the isolated scope means "text" binding and it is 1-way binding

myApp.directive('searchResultText',function(){
   return{
       //restrict:"AE",
       //restrict:"CM",
       //restrict:"AC",
       //restrict:"A",
       restrict:"AECM",
       templateUrl:"directives/searchResult.html",
       replace:true,
       scope:{
           bankName:"@",
           bankMotto:"@",
           bankMessage:"@"
       }
   } 
});

/* using = in the isolated scope means "object" binding i.e. object is passed on and it is 2-way
   binding. By 2-way binding it means, the value changed in the child directive will reflect back in 
   the scope of the parent controller that is passing the object */

// using & is to pass a function to the isolated scope.

myApp.directive('searchResultObject',function(){
   return{
       restrict:"A",
       templateUrl:"directives/searchResultObject.html",
       replace:true,
       scope:{
           bankObject:"=",
           formattedAddressFunction:"&"
       }
   } 
});