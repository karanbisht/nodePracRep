var Product = require('./product.model.js');

module.exports.getdata = function(req,res){
	Product.find(function(err,docs){
		if(err){
			return res.json({status:500,data:err});
		}
		return res.json({status:200,data:docs});
	})
}