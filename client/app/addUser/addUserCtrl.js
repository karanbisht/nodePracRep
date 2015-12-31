angular.module('nodeYoamanApp')
  .controller('addUserCtrl',["$scope","$http","$location",function($scope,$http,$location){
	$scope.addUser={};
	$scope.addMoreBtn = function(){
		console.log("clicked on addMore");
		console.log($scope.addUser);
		console.log($scope.addUser.name);
		

	  if($scope.addUser.name === undefined){
	  		alert("Please enter name");
	  }else if($scope.addUser.email === undefined){	
			alert("Please enter email");
      }else if($scope.addUser.password === undefined){	
			alert("Please enter password");		
	  }else{	
		$http({"method":"post","url":'/api/user/addUser',data:$scope.addUser}).success(function(res){
			console.log("res",res);
			if(res.status==="success"){
				alert("User Created Successfully");
				$location.path("/login");
			}else{
				console.log(res.message);
				alert("Email already exist in system.");
			}
		}).error(function(err){
			console.log("err",err);
		})
	  }	
	}
}]);