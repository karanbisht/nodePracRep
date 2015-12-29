var express = require('express');

var transaction = require("./transaction.controller.js");
var router = express.Router();

router.post('/add',transaction.add);
router.get('/get/:userId',transaction.get);

module.exports = router;