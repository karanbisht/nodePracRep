   angular.module('nodeYoamanApp')
  .controller('historyCtrl',["$scope","$http","$location","$stateParams",function($scope,$http,$location,$stateParams){

    $scope.userID = $stateParams.id;
    $scope.checkedOutProducts = [];

    console.log("USER ID--",$scope.userID);
    
  	$http({"method":"GET","url":'/api/transaction/history/'+$scope.userID,data:null}).success(function(res){				
			console.log("success");
			console.log(res.status);

			if(res.status===200){
				$scope.checkedOutProducts = res.data;		
			}else{
				$scope.checkedOutProducts = [];
				console.log("err",err);
			}			
			console.log($scope.checkedOutProducts);
	}).error(function(err){
			console.log("err",err);
	});	


}]);
