var express = require('express');
var app = express();
var employee = require('./employeeController');
var admin = require('./adminRoutes');

var bodyparser = require('body-parser');
app.use(express.static(__dirname));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.use('/admin',admin);

app.get('/getEmployeeList',employee.getEmployeeList)

app.listen(3000, function(){console.log('started')})