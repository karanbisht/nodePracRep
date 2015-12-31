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

module.exports.checkout =function(req,res){
	Transaction.update({'userId':req.body.userId,'id':req.body.id},{'isCheckedOut':true,'date':new Date()},function(err,docs){
		if(err){
			return res.json({status:500,data:err});
		} 
		return res.json({status:200,data:docs});	
	})
}

module.exports.deleteProd =function(req,res){
	Transaction.findOneAndRemove({'userId':req.body.userId,'id':req.body.id},function(err,docs){
		if(err){
			return res.json({status:500,data:err});
		} 
		return res.json({status:200,data:docs});	
	})
}

module.exports.funHistory =function(req,res){
Transaction.find({'userId':req.params.userId,'isCheckedOut':true},function(err,docs){
		if(err){
			return res.json({status:500,data:err});
		} 
		return res.json({status:200,data:docs});	
	})
}