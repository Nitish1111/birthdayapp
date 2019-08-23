//var driverData = require('./driverdoa');
var employeeDAO = require('./employeeDAO');
 exports.getEmployeeList = function(req,res){
    
    employeeDAO.getEmployeeData(function(err,result){

        if (err) throw err
        //res.write(result);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); 
    //   /  res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).send(result);
        res.end();

    })
















    // employeeDAO.getEmployeeData(req,res,function(){
    //     res.write("<div>HelloWorld</div>");
    //     res.status(200).send();
    //     res.end();
    //  })
    
 }

 
 exports.getMessage = function(req,res){
    console.log(req.body);
    driverData.getDriverData(function(){
        res.status(200).send(req.body);
        res.end();
    });
    
 }