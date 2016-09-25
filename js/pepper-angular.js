/* Pepper application  controller */
angular.module('Pepper', [])
   .controller('PepperCtrl', function($scope, $http) {
       /* Initialize ingredients */
       $scope.base = "...";
       $scope.vegetables = "...";
       $scope.meat = "...";
       
       /* Onclick function */
       $scope.pepperGetIngredients = function(){
	   
	   /* Perform an HTTP GET to retrieve all ingredients */
	   $http({
	       method: 'GET',
	       url: 'http://localhost:1234'
	   }).then(function successCallback(response) {
	       	       
	       /* Read response */
	       $scope.base = response.data.base.name;
	       $scope.vegetables = response.data.vegetables.name;
	       $scope.meat = response.data.meat.name;
	       
	   }, function errorCallback(response) {
	       console.log("Pepper : An error ocurred during request");
	   });
       }
   }
);