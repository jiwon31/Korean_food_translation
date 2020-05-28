var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main');
});

router.get('/index', function(req, res, next) {
  res.render('index');
})

router.post('/index', function(req, res, next) {
  //언어 받아오기
});


module.exports = router;
