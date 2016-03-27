var express = require('express');
var router = express.Router();

var identifier = require('../modules/identifier');
// router.use(identifier); // middleware
router.use('/data', identifier);

/* GET home page. */
router.get('/', function (req, res, next) {

  req.somedata = 'some information ... ';
  console.log('app is: ', req.app);
  next();
},function(req, res) {
  console.log(req.identifier);
  console.log(req.somedata);
  res.render('index', { title: 'Express', name: 'David' });
});

router.get(['/hello', '/hi', '/hol(a|b)'], function (req, res) {

  console.log(req.cookies);

  res.cookie('identifier', 'asdf90afnlasd');
  res.json({
    message: 'array of paths ... '
  });

});

module.exports = router;
