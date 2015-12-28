angular.module('nodeYoamanApp')
  .controller('loginCtrl',["$scope","$http","$location",function($scope,$http,$location){
	$scope.login={};

	$scope.loginBtn = function(){
		console.log("Login button clicked", $scope.login);
		$http({"method":"post","url":'/api/user/login',data:$scope.login}).success(function(res){
			console.log("res",res);
			if(res.message==="Successfully Login"){
				$location.path("/home");
			}else{
				alert(res.message);
			}
		}).error(function(err){
			console.log("err",err);
		})
	}

	$scope.moveToAddUserPage = function(){
		console.log("click on addMore");
		$location.path("/addUser");
	}

}]);