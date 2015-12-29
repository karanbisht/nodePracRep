angular.module('nodeYoamanApp')
  .controller('checkoutCtrl',["$scope","$http","$location","$stateParams",function($scope,$http,$location,$stateParams){
	$scope.checkOutArray = [];
	$scope.userID = $stateParams.id;

	console.log("User ID",$scope.userID);
	console.log("Welcome Checkout");

	$http({"method":"GET","url":'/api/transaction/get/'+$scope.userID,data:null}).success(function(res){			
			console.log("success");
			console.log(res.status);

			if(res.status===200){
				$scope.checkOutArray = res.data;		
			}else{
				$scope.checkOutArray = [];
				console.log("err",err);
			}			
			console.log($scope.checkOutArray);
	}).error(function(err){
			console.log("err",err);
	});	

	$scope.checkout = function(checkData){

	}

	$scope.remove = function(removeData){
		
	}
}]);