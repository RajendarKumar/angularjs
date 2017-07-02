/**
 * registering module
 */
var app = angular.module("myApp", []);

/**
 * registering controller with module
 */
app.controller("myCtrl", function($scope){
	$scope.name = "Kumar";
});

/**
 * registering directive with module
 * 
 * You can invoke a directive by using:
 *		E : Element name
 *		A : Attribute
 *		C : Class
 *		M : Comment
 * Default AE are enabled.
 */
app.directive("custDirective",function(){
	return {
		restrict : 'AEC',
		 replace : true,
		template : "<p>Made by a directive AEC! </p>"
	};
});

app.directive("commentDirective", function() {
    return {
        restrict : "M",
        replace : true,
        template : "<h1>Made by a directive!</h1>" // it is necessary that comment directive must have a valid HTML tag in template value
    };
});

app.controller("rptCtrl",function($scope){
	$scope.names =[{"fName":"Raj","lName" : "Singh"},{"fName":"Rakesh","lName":"Kumar"},{"fName":"Rahul","lName":"Sharma"}];
});