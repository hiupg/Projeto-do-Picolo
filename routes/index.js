var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/silvio', function(req, res){
  res.send('<h1>Silvo</h1>');
});

module.exports = router;
