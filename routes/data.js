// /data
var router = require('express').Router();

var people = [{ "_id" : "56f807b4a4e46fa4708e4721", "name" : "BP Mishra", "email" : "bpmishra.mail@gmail.com", "__v" : 0 },
    { "_id" : "56f8080d08ad5bc770e4a80e", "name" : "Brendan Lynch", "email" : "brendan_lynch@golivelabs.io", "__v" : 0 },
    { "_id" : "56f80d214f24dbec702c29ad", "name" : "Kelly Garrett", "email" : "kg@golivelabs.io", "__v" : 0 },
    { "_id" : "56f80db4b3c641f870a718c5", "name" : "Tony", "email" : "tony@gmail.com", "__v" : 0 }];

router.get('/', function (req, res) {
    res.json({
        message: 'Hi from my first restful service ... '
    });
});

router.get('/people', function (req, res) {
    res.json({
        message: 'Hi from my first restful service ... ',
        people: people
    });
});

module.exports = router;