'use strict';

/* Controllers */
// Becareful with the commas and semicolons!

angular.module('myApp.controllers', [])
 .controller('LandingPageController', ['', function(){
 	
 }])
 .controller('WaitlistController', ['$scope', '$firebase', function($scope,$firebase){
 	//var parties Reference here
 	var partiesRef = new Firebase('https://appointments-sdb.firebaseio.com/');
 	//Then, we can use the firebase service we've just injected to create a 
 	//firebase object that holds off the data at this url
 	//so we will replace the scope.parties witht the firebase live data
 	//it takes the partiesRef
 	$scope.parties = $firebase(partiesRef);

 	// $scope.testVar = 'Serg'
 	
 	//In here this scope will list all the diff parties added with the form
 	// $scope.parties = [];
 	//Now, will replace the array above with live data from firebase
 	//put the variable reference first as the first line though!

 	//Next, we want to have an object in our scope, where it represents the 
 	//data in our form
 	//An object w/3 properties: name, phone and size
 	$scope.newParty = {name:'', phone:'', size:''};//test this in the template(change to party var)

 	//create function to
 	$scope.saveParty = function() {
 		//Take the party object and put it into the parties array
 		//1st grab the parties array and push the party object into it
 		// $scope.parties.push($scope.party);

 		//Now, with firebase, we have to "add" instead of "push" data
 		//so we replace push with the $add method that's generated on line17
 		$scope.parties.$add($scope.newParty);
 		//Then reset party to show a blank form fields
 		$scope.newParty = {name:'', phone:'', size:''};
 	};

 }]);
 