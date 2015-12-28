var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = {
	productID : Number,
	productName : String,
	Price : Number
};

var ProductSchema = new Schema(schema);

module.exports = mongoose.model("products", ProductSchema);
