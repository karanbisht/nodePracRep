var express = require('express');
var product = require("./product.controller.js");

var router = express.Router();

router.get('/home',product.getdata);
module.exports = router;
