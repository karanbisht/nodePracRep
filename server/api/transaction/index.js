var express = require('express');

var transaction = require("./transaction.controller.js");
var router = express.Router();

router.post('/add',transaction.add);
router.get('/get/:userId',transaction.get);
router.post('/checkout',transaction.checkout);
router.post('/deleteProd',transaction.deleteProd);
router.get('/history/:userId',transaction.funHistory);


module.exports = router;