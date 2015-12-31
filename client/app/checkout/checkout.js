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
		console.log(checkData);
		$http({"method":"POST","url":'/api/transaction/checkout',data:checkData}).success(function(res){			
			console.log("success");
			console.log(res.status);
			if(res.status===200){
				var index = $scope.checkOutArray.indexOf(checkData);
     			$scope.checkOutArray.splice(index,1);
			}else{
			}			
		}).error(function(err){
			console.log("err",err);
		});

	}


	$scope.remove = function(removeData){
			$http({"method":"POST","url":'/api/transaction/deleteProd',data:removeData}).success(function(res){			
			console.log("success");
			console.log(res.status);
			if(res.status===200){
				var index = $scope.checkOutArray.indexOf(removeData);
     			$scope.checkOutArray.splice(index,1);
			}else{
			}			
		}).error(function(err){
			console.log("err",err);
		});
	}
}]);