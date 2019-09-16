var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.getPartyList = function (callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("getParty DAO");
        var dbo = db.db("Employee");
        //Find the first document in the customers collection:
        dbo.collection("Party").find({}, { projection: { _id: 0, partyId: 1, members: 1 } }).toArray(function (err, result) {
            if (err) {
                throw err;
                callback(err);
            }

            console.log(result);
            db.close();
            callback(err, result);
        })
    });

}


exports.createParty = function (req, callback) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("createParty DAO");
        var dbo = db.db("Employee");
        var obj = req;
        console.log(obj);
        dbo.collection("Party").insertOne(obj, function (err, result) {
            if (err) callback(err);

            console.log("Inserted " + obj.partyId);
            db.close();
            callback(err, result);
        })

    })
}
