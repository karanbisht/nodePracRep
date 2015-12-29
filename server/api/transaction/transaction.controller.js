var Transaction = require('./transaction.model.js');

module.exports.add = function(req,res){
	delete req.body._id;	
	console.log(req.body);

	/*Transaction.find({'userId':req.params.userId,'isCheckedOut':false},function(err,docs){
		if(err){
			return res.json({status:500,data:err});
		} 
		return res.json({status:200,data:docs});
		console.log("Server Response---",data);	
	});*/

	Transaction.create(req.body,function(err,user){
		if(err){
			return res.json({status:500,data:err});
		}
		return res.json({status:200,data:user});
	});
}

module.exports.get = function(req,res){
	delete req.body._id;	
	console.log(req.body);

	Transaction.find({'userId':req.params.userId,'isCheckedOut':false},function(err,docs){
		if(err){
			return res.json({status:500,data:err});
		} 
		return res.json({status:200,data:docs});	
	})
}