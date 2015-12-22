var User = require('./user.model.js');


module.exports.add = function(req,res){
  var data = req.body;
  User.create(data,function(err,obj){
		if(err){
			return res.json({"status":"error","message":err});
		}
 		return res.json({"status":"success","message":obj});	
  })	
}


module.exports.login = function(req,res){
  var data = req.body;
  User.findOne({"email":data.email},function(err,obj){
		if(err){
			return res.json({"status":"error","message":err});
		}
 	if(obj){ 
		if(data.password === obj.password){
			return res.json({"status":"success","message":"Successfully Login"});
		}else{
			return res.json({"status":"success","message":"Invalid password"});
		}
	}else{
		return res.json({"status":"success","message":"Invalid User"});	
	}

  })	
}