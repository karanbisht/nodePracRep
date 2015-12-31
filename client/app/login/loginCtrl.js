angular.module('nodeYoamanApp')
  .controller('loginCtrl',["$scope","$http","$location",function($scope,$http,$location){
	$scope.login={};

	$scope.loginBtn = function(){
      console.log("Login button clicked", $scope.login);
	  if($scope.login.email === undefined){
	  		alert("Please enter email");
	  }else if($scope.login.password === undefined){	
			alert("Please enter password");
	  }else{	
		$http({"method":"post","url":'/api/user/login',data:$scope.login}).success(function(res){
			console.log("res",res);
			//console.log(res.data._id);
			if(res.message==="Successfully Login"){
				$location.path("/home/"+res.data._id);
				//window.location.href = '/home/'+res.data._id;
			}else{
				alert(res.message);
			}
		}).error(function(err){
			alert(err);
			console.log("err",err);
		})
	  }
	}

	$scope.moveToAddUserPage = function(){
		console.log("click on addMore");
		$location.path("/addUser");
	}
}]);