var express = require('express');
var app = express();
//var employee = require('./controller/employeeController');
var admin = require('./routes/adminRoutes');
var party = require('./routes/partyRoutes');
var employee = require('./routes/employeeRoutes');

var bodyparser = require('body-parser');
app.use(express.static(__dirname));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/admin', admin);
app.use('/party', party);

app.use('/employee', employee);

app.listen(3000, function () { console.log('started') })