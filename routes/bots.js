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
  res.render('index', {
    title: 'Telegram Bots',
    botname: '김결정 (MrDecisionBot)',
    description: '결정은 내가 한다!',
    botkey: '68087998:AAFSs16hJE5pqJ4nS78US0WjSUr_d97Uy1M',
    botkey_short: 'AAFSs16hJE5pqJ4nS78US0WjSUr_d97Uy1M' });
});
router.post('/AAFSs16hJE5pqJ4nS78US0WjSUr_d97Uy1M', function(req, res) {
  console.log('New!', req.body);
  res.send(req.body);
});

module.exports = router;
