angular.module('nodeYoamanApp')
  .controller('homeCtrl',["$scope","$http","$location",function($scope,$http,$location){
	$scope.productArray = [];
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

	$scope.addToCart = function(data){
			console.log("click on Add addToCart");
			console.log(data);
	}

}]);