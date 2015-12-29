var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = {
	productID : String,
	productName : String,
	Price : Number,
	date : String,
	userId : String,
	isCheckedOut : Boolean
};

var transactionSchema = new Schema(schema);

module.exports = mongoose.model("Transactions", transactionSchema);