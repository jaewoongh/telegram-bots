var keywordList = [
    { keyword: '해말어', behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지 마', '해', '하지 마'] },
    { keyword: '해말아', behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지 마', '해', '하지 마'] },

    { keyword: '([^\s]+)냐.*마냐', behavior: 'pickOne', parameter: ['$', '말어', '$자', '말자', '$라', '$지 마', '$', '$지 마'] },
    { keyword: '([^\s]+)까.*말까', behavior: 'pickOne', parameter: ['$', '말어', '$자', '말자', '$라', '$지 마', '$', '$지 마'] },
    { keyword: '([^\s]+)야\s?돼.*말아야\s?돼', behavior: 'pickOne', parameter: ['$', '말어', '$자', '말자', '$라', '$지 마', '$', '$지 마'] },
    { keyword: '([^\s]+)야\s?하냐.*말아야\s?하냐', behavior: 'pickOne', parameter: ['$', '말어', '$자', '말자', '$라', '$지 마', '$', '$지 마'] },
    { keyword: '([^\s]+)야\s?되냐.*말아야\s?되냐', behavior: 'pickOne', parameter: ['$', '말어', '$자', '말자', '$라', '$지 마', '$', '$지 마'] },
    { keyword: '([^\s]+)야\s?돼\?', behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: '([^\s]+)야\s?해\?', behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: '([^\s]+)야\s?됨\?', behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: '([^\s]+)야\s?함\?', behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: '([^\s]+)야\s?되나\?', behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: '([^\s]+)야\s?하나\?', behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: '([^\s]+)야\s?되냐\?', behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: '([^\s]+)야\s?하냐\?', behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: '([^\s]+)야겠지\?', behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: '([^\s]+)도\s?되나\?', behavior: 'pickOne', parameter: ['돼', '안 돼', '$도 돼', '$면 안 되지', '$든지', 'ㄴㄴ'] }
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