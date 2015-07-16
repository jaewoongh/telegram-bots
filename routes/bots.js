var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Telegram bots', description: 'Only accessible via proper api call.' });
});

router.get('/test', function(req, res) {
  console.log(req);
  res.send(req);
});

// MrDecisionBot (김결정)
router.get('/AAFSs16hJE5pqJ4nS78US0WjSUr_d97Uy1M', function(req, res) {
  if (req.secure) {
    res.render('index', { title: '김결정 (MrDecisionBot)', description: 'Secure!\nOnly accessible via proper api call.' });
  } else {
    res.render('index', { title: '김결정 (MrDecisionBot)', description: 'Only accessible via proper api call.' });
  }
});
router.post('/AAFSs16hJE5pqJ4nS78US0WjSUr_d97Uy1M', function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
