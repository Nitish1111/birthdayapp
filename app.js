var express = require('express');
var app = express();
var employee = require('./employeeController');

var bodyparser = require('body-parser');
app.use(express.static(__dirname));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



app.get('/getEmployeeList',employee.getEmployeeList)

app.listen(3000, function(){console.log('started')})