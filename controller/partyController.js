//var driverData = require('./driverdoa');
var partyDAO = require('../DAO/partyDAO');


exports.getPartyList = function (req, res) {

    partyDAO.getPartyList(function (err, result) {

        if (err) throw err
        //res.write(result);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        //   /  res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).send(result);
        res.end();

    })
}



exports.createParty = function (req, res) {

    partyDAO.createParty(req.body,function (err, result) {
        if (err) throw err
        //res.write(result);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        //   /  res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).send(true);
        res.end();
    });

}


