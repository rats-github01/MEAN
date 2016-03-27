var express = require('express');
var router = express.Router();

var identifier = require('../modules/identifier');
// router.use(identifier); // middleware
router.use('/data', identifier);

/* GET home page. */
router.get('/', function (req, res, next) {
  req.somedata = 'some information ... ';
  next();
},function(req, res) {
  console.log(req.identifier);
  console.log(req.somedata);
  res.render('index', { title: 'Express', name: 'David' });
});

module.exports = router;
