var express = require('express')
var router = express.Router();
var employee = require('../controller/employeeController');

router.post('/insertEmployee',employee.insertEmployee);


module.exports = router;
