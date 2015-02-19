angular.module('app.controllers', []).controller('loginController', function($scope) {
	'use strict';
	$scope.submitSuccess=true;// Why does this show the form?

	$scope.$watch('name', function(){ //this goes to the name ng-model and runs the function
		if(angular.isUndefined($scope.name)||$scope.name===''){//why the empty ''?
			$scope.class1='errorClass';
		}else{
			$scope.class1='none';
		}console.log('name');
	});

	$scope.$watch('email', function(){
		if(angular.isUndefined($scope.email)||$scope.email===''){
			$scope.class2='errorClass';
		}else{
			for(var i=0; i<$scope.email.length; i++){
				if($scope.email.indexOf('@')===-1){//this looks for an @ symbol in an email address
					$scope.class2 = 'errorClass';
				}else{
					$scope.class2='none';
				}
			}
		}console.log('email');
	});
	$scope.$watch('website',function(){
		if(angular.isUndefined($scope.website)||$scope.website===''){
			$scope.class3='errorClass';
		}else{
			if($scope.website.substring(0,7)==='http://'){
				$scope.class3='none';
			}else{
				$scope.class3='errorClass';
			}
		}
		console.log('website');
	});
	$scope.$watch('message',function(){
		if(angular.isUndefined($scope.message)||$scope.message===''){
			$scope.class4='errorClass';
		}else{
			$scope.class4='none';
		}console.log('message');
	});

	$scope.submit=function(){
		console.log('errorArray');
		var submitPass=0;
		var errorArray = [
		'Name cannot be left empty',
		'Email cannot be left empty',
		'Email must contain an "@"',
		'Website cannot be left empty',
		'Website must start with http://',
		'Message cannot be left empty'
		];
		if(angular.isUndefined($scope.name)||$scope.name===''){
			$scope.error1=errorArray[0];
		}else{
			$scope.error1=undefined;
			submitPass++;
		}
		if(angular.isUndefined($scope.email)||$scope.email===''){
			$scope.error2=errorArray[1];
		}else{for (var i =0; i<$scope.email.length; i++){
			if($scope.email.indexOf('@')=== -1){
				$scope.error2 = errorArray[2];
			}else{
				$scope.error2 = '';
				submitPass++;
			}
		}

	}	console.log('error1');

	if (angular.isUndefined($scope.message)||$scope.message===''){
		$scope.error4=errorArray[5];
	}else{
		$scope.error4='';
		submitPass++;
	}
	if(submitPass===4){
		$scope.submitSuccess = false;
		}
	};
});

// 	$scope.change = function() {
// 		$scope.errorClass = "errorClass";
// 	}

// 	$scope.submit = function() {
// 		'use strict';
// 		var submitPass = 0;

// 		var errorArray = [
// 			'Name cannot be left empty',
// 			'Email cannot be left empty',
// 			'Email must contain an "@"',
// 			'Website cannot be left empty',
// 			'Website must start with http://',
// 			'Message cannot be left empty'
// 		];

// 		$scope.$watch($scope.name, function() {
// 			console.log("name has changed!");
// 		})

// 		if(angular.isUndefined($scope.name) || $scope.name === "") {
// 			$scope.error1 = errorArray[0];
// 		} else {
// 			$scope.error1 = undefined;
// 			submitPass++;
// 		}
// 		if(angular.isUndefined($scope.email) || $scope.email === "") {
// 			$scope.error2 = errorArray[1];
// 		} 
// 		else {
// 			for(var i=0; i < $scope.email.length; i++) {
// 				if($scope.email.indexOf('@') === -1) {
// 					$scope.error2 = errorArray[2];
// 				} else {
// 					$scope.error2 = "";
// 					submitPass++;
// 				}
// 			}
// 		}
// 		if(angular.isUndefined($scope.website) || $scope.website === "") {
// 			$scope.error3 = errorArray[3];
// 		} else {
// 			if($scope.website.substring(0,7) === "http://") {
// 				$scope.error3 = "";
// 				submitPass++;
// 			} else {
// 				$scope.error3 = errorArray[4];
// 			}
// 		}
// 		if(angular.isUndefined($scope.message) || $scope.message === "") {
// 			$scope.error4 = errorArray[5];
// 		} else {
// 			$scope.error4 = "";
// 			submitPass++;
// 		}

// 		if(submitPass === 4) {
// 			$scope.submitSuccess = false;
// 		}
// 	}

// });


