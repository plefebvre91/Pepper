angular.module('HelloWorldApp', [])
   .controller('HelloWorldController', function($scope, $http) {
       $scope.base = "";
       $scope.vegetables = "";
       $scope.meat = "";
       
       $scope.count = 0;
       $scope.change = function(){
	   // Simple GET request example:
	   $scope.base = "";
	   $scope.vegetables = "";
	   $scope.meat = "";
	   
	   
	   //	   $http.get('/someUrl', config).then(successCallback, errorCallback);
	   $http({
	       method: 'GET',
	       url: 'http://localhost:1234'
	   }).then(function successCallback(response) {
	       
	       console.log(response);
	       console.log(response.data);
	       /*var json = JSON.parse(response);*/
	       $scope.base = response.data.base.name;
	       $scope.vegetables = response.data.vegetables.name;
	       $scope.meat = response.data.meat.name;
	       
	       
	       /*for (var i=0; i<base.length; i++) {
		 $scope.base += base[i].name + " ";
	       }

	       for (var i=0; i<vegetables.length; i++) {
		   $scope.vegetables += vegetables[i].name+ " ";
	       }		   
	       for (var i=0; i<meat.length; i++) {
		   $scope.meat += meat[i].name + " ";
	       }*/

	   }, function errorCallback(response) {
	       $scope.greeting = "error";
	       // called asynchronously if an error occurs

	       // or server returns response with an error status.
	   });

	   $scope.count++;
//	   $scope.greeting = "Chlowé " + $scope.count + " bizous :)";
       }
   }

	       
);
