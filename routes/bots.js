var express = require('express');
var router = express.Router();

var request = require('request');
var sendMessage = function(botToken, chatId, text) {
  var url = ['https://api.telegram.org/bot', botToken, '/sendMessage'].join('');
  var headers = {
    'User-Agent': 'Super Agent/0.0.1',
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  var options = {
    url: url,
    method: 'POST',
    headers: headers,
    form: {
      chatId: chatId,
      text: text
    }
  };
  request(options, function(err, res, body) {
    if (!err && res.statusCode == 200) {

    }
  });
};

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Telegram bots', description: 'Only accessible via proper api call.' });
});

router.get('/test', function(req, res) {
  console.log(req);
  res.send(req);
});

// MrDecisionBot (김결정)
var mrDecisionBot = require('../lib/MrDecisionBot');
router.get('/AAFSs16hJE5pqJ4nS78US0WjSUr_d97Uy1M', function(req, res) {
  res.render('index', {
    title: 'Telegram Bots',
    botname: '김결정 (MrDecisionBot)',
    description: '결정은 내가 한다!',
    bottoken: mrDecisionBot.botToken,
    bottoken_short: mrDecisionBot.botToken_short });
});
router.post('/AAFSs16hJE5pqJ4nS78US0WjSUr_d97Uy1M', function(req, res) {
  var response = mrDecisionBot.handleUpdate(req.body);
  if (response !== null) {
    var chatId = req.body.message.chat.id;
    sendMessage(mrDecisionBot.botToken, chatId, response);
  }
  res.send(req.body);
});

module.exports = router;
