var express = require('express');
var router = express.Router();
var textArray = require('./textDetect');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("실행중");
  textArray();
  res.render('index', { array: 'textArray' });
});


module.exports = router;
