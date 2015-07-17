var express = require('express');
var router = express.Router();
var tokens = require('../lib/tokens.js');

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
      chat_id: chatId,
      text: text
    }
  };
  request(options, function(err, res, body) {
    if (err) console.error(err);
    else if (res.statusCode !== 200) console.log('Request failed', body);
  });
};

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Telegram bots', description: 'Only accessible via proper api call.' });
});

// MrDecisionBot (김결정)
var mrDecisionBot = require('../lib/MrDecisionBot');
router.get(['/', tokens['MrDecisionBot'].url].join(''), function(req, res) {
  res.render('botpage', {
    title: '김결정 (@MrDecisionBot)',
    description: '결정은 내가 한다!',
    bottoken: tokens['MrDecisionBot'].full,
    bottoken_short: tokens['MrDecisionBot'].url });
});
router.post(['/', tokens['MrDecisionBot'].url].join(''), function(req, res) {
  if (req.body.message.text === '/help') {
    var chatId = req.body.message.chat.id;
    sendMessage(tokens['MrDecisionBot'].full, chatId, mrDecisionBot.helpMessage);
  } else {
    var response = mrDecisionBot.process(req.body);
    if (response !== null) {
      var chatId = req.body.message.chat.id;
      sendMessage(tokens['MrDecisionBot'].full, chatId, response);
    }
  }
  res.send(req.body);
});

module.exports = router;
