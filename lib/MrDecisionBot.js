var keywordList = [
    { keyword: new RegExp('해말어'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('해말아'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('하냐마냐'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('할까말까'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('해야돼말아야돼'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('해야하냐말아야하냐'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('해야되냐말아야되냐'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('해야돼?'), behavior: 'pickOne', parameter: ['해야지', '하지마', '해야돼', '안 해도 돼', '해야돼', '하지 말든지'] },
    { keyword: new RegExp('해야해?'), behavior: 'pickOne', parameter: ['해야지', '하지마', '해야돼', '안 해도 돼', '해야돼', '하지 말든지'] },
    { keyword: new RegExp('해야됨?'), behavior: 'pickOne', parameter: ['해야지', '하지마', '해야돼', '안 해도 돼', '해야돼', '하지 말든지'] },
    { keyword: new RegExp('해야함?'), behavior: 'pickOne', parameter: ['해야지', '하지마', '해야돼', '안 해도 돼', '해야돼', '하지 말든지'] },
    { keyword: new RegExp('해야되나?'), behavior: 'pickOne', parameter: ['해야지', '하지마', '해야돼', '안 해도 돼', '해야돼', '하지 말든지'] },
    { keyword: new RegExp('해야하나?'), behavior: 'pickOne', parameter: ['해야지', '하지마', '해야돼', '안 해도 돼', '해야돼', '하지 말든지'] },
    { keyword: new RegExp('해야되냐?'), behavior: 'pickOne', parameter: ['해야지', '하지마', '해야돼', '안 해도 돼', '해야돼', '하지 말든지'] },
    { keyword: new RegExp('해야하냐?'), behavior: 'pickOne', parameter: ['해야지', '하지마', '해야돼', '안 해도 돼', '해야돼', '하지 말든지'] },
    { keyword: new RegExp('해야겠지?'), behavior: 'pickOne', parameter: ['해야지', '하지마', '해야돼', '안 해도 돼', '해야돼', '하지 말든지'] }
];

var behaviors = {
    pickOne: function(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
};

var checkKeywordAndGetResponse = function(text) {
    if (text === undefined) return null;
    for (var i = 0; i < keywordList.length; i++) {
        var match = text.replace(/\s/g, '').match(keywordList[i].keyword);
        if (match === null) continue;
        return behaviors[keywordList[i].behavior](keywordList[i].parameter);
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
    }
};

module.exports = mrDecisionBot;