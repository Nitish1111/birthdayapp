var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.getEmployeeData = function(callback){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("IN DAo");
        var dbo = db.db("Employee");
        //Find the first document in the customers collection:
        dbo.collection("EmployeeData").find({},{ projection: { _id: 0, name: 1, emp_id: 1 } }).toArray(function(err, result) {
            if (err){ 
              callback(err);}
  
            console.log(result);
            db.close();
            callback(err,result);
          }) 
      });
     
}

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("Employee");
//   //Find the first document in the customers collection:
//   dbo.collection("EmployeeData").find({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });
