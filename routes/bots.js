var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Telegram bots' });
});

// MrDecisionBot (김결정)
router.post('/AAFSs16hJE5pqJ4nS78US0WjSUr_d97Uy1M', function(req, res, next) {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
