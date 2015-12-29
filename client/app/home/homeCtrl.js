angular.module('nodeYoamanApp')
  .controller('homeCtrl',["$scope","$http","$location","$stateParams",function($scope,$http,$location,$stateParams){
	$scope.productArray = [];
	$scope.userID = $stateParams.id;

	console.log("User ID",$scope.userID);
	console.log("Welcome Home");

	$http({"method":"GET","url":'/api/product/home',data:null}).success(function(res){
			
			console.log("success");
			console.log(res.status);
			if(res.status===200){
				$scope.productArray = res.data;		
			}else{
				$scope.productArray = [];
				console.log("err",err);
			}
			console.log($scope.productArray);

	}).error(function(err){
			console.log("err",err);
	});
	
	$scope.signOut = function(){
		$location.path("/login");
	}

	$scope.addToCart = function(dataVal){
			console.log("click on Add addToCart");
			dataVal.date=new Date();
			dataVal.userId=$scope.userID;
			dataVal.isCheckedOut = false;
			console.log(dataVal);
	   	$http({"method":"POST","url":'/api/transaction/add',data:dataVal}).success(function(res){			
			console.log("success");
			console.log(res.status);
			if(res.status===200){
				alert("Product addToCart");		
			}else{
				//alert("Product addToCart");
			}
		}).error(function(err){
			console.log("err",err);
		});
	}

}]);