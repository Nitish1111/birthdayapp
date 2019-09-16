var express = require('express')
var router = express.Router();
var employee = require('../controller/employeeController');

//router.post('/insertEmployee',employee.insertEmployee);
router.get('/getEmployeeList',employee.getEmployeeList)


module.exports = router;
