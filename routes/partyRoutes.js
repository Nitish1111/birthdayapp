var express = require('express')
var router = express.Router();
var party = require('../controller/partyController');


router.post('/createParty',party.createParty);
router.get('/getPartyList',party.getPartyList);

module.exports = router;