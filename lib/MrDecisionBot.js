var keywordList = [
    { keyword: '해말어', behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지 마', '해', '하지 마'] },
    { keyword: '해말아', behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지 마', '해', '하지 마'] },
    { keyword: '하냐마냐', behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지 마', '해', '하지 마'] },
    { keyword: '할까말까', behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지 마', '해', '하지 마'] },
    { keyword: '해야돼말아야돼', behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지 마', '해', '하지 마'] },
    { keyword: '해야하냐말아야하냐', behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지 마', '해', '하지 마'] },
    { keyword: '해야되냐말아야되냐', behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지 마', '해', '하지 마'] },
    { keyword: '해야돼?', behavior: 'pickOne', parameter: ['해야지', '하지 마', '해야 돼', '안 해도 돼', '해야 돼', '하지 말든지'] },
    { keyword: '해야해?', behavior: 'pickOne', parameter: ['해야지', '하지 마', '해야 돼', '안 해도 돼', '해야 돼', '하지 말든지'] },
    { keyword: '해야됨?', behavior: 'pickOne', parameter: ['해야지', '하지 마', '해야 돼', '안 해도 돼', '해야 돼', '하지 말든지'] },
    { keyword: '해야함?', behavior: 'pickOne', parameter: ['해야지', '하지 마', '해야 돼', '안 해도 돼', '해야 돼', '하지 말든지'] },
    { keyword: '해야되나?', behavior: 'pickOne', parameter: ['해야지', '하지 마', '해야 돼', '안 해도 돼', '해야 돼', '하지 말든지'] },
    { keyword: '해야하나?', behavior: 'pickOne', parameter: ['해야지', '하지 마', '해야 돼', '안 해도 돼', '해야 돼', '하지 말든지'] },
    { keyword: '해야되냐?', behavior: 'pickOne', parameter: ['해야지', '하지 마', '해야 돼', '안 해도 돼', '해야 돼', '하지 말든지'] },
    { keyword: '해야하냐?', behavior: 'pickOne', parameter: ['해야지', '하지 마', '해야 돼', '안 해도 돼', '해야 돼', '하지 말든지'] },
    { keyword: '해야겠지?', behavior: 'pickOne', parameter: ['해야지', '하지 마', '해야 돼', '안 해도 돼', '해야 돼', '하지 말든지'] },
    { keyword: '해도되나?', behavior: 'pickOne', parameter: ['돼', '안 돼', '해도 돼', '하면 안 되지', '하든지', 'ㄴㄴ'] }
];

var explicitCommands = [
    { command: '^김결정!', behavior: 'customPick' }
];

var behaviors = {
    pickOne: function(matchResult, list) {
        return list[Math.floor(Math.random() * list.length)];
    },

    customPick: function(matchResult) {
        var optionText = matchResult.input.slice(matchResult[0].length + matchResult.index);
        var options = optionText.split(',');
        if (options.length <= 1) {
            options = optionText.split(' ');
        }
        return options[Math.floor(Math.random() * options.length)].trim();
    }
};

var checkKeywordAndGetResponse = function(text) {
    if (text === undefined) return null;

    // Check explicit commands first
    for (var i = 0; i < explicitCommands.length; i++) {
        var match = text.trim().match(new RegExp(explicitCommands[i].command));
        if (match === null) continue;
        return behaviors[explicitCommands[i].behavior](match, explicitCommands[i].parameter);
    }

    // Check keywords
    for (var i = 0; i < keywordList.length; i++) {
        var match = text.replace(/\s/g, '').match(new RegExp(keywordList[i].keyword));
        if (match === null) continue;
        return behaviors[keywordList[i].behavior](match, keywordList[i].parameter);
    }
    return null;
};

var mrDecisionBot = {
    botToken: '68087998:AAFSs16hJE5pqJ4nS78US0WjSUr_d97Uy1M',
    botToken_short: 'AAFSs16hJE5pqJ4nS78US0WjSUr_d97Uy1M',

    process: function(update) {
        if (update.message === null) return null;
        var message = update.message.text;
        return checkKeywordAndGetResponse(message);
    },

    helpMessage: '김결정이다.\n말이 많진 않지만 결정적인 순간에 한마디 하는 성격이다.\n꼭 내가 결정해야겠는 일이 있으면 "김결정! 이거 저거" 이런 식으로 물어보도록.\n예컨대 "김결정! 부먹 찍먹 상관없음 탕수육안좋아함" 이런 식으로.'
};

module.exports = mrDecisionBot;