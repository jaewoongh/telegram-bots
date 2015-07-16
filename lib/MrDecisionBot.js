var keywordList = [
    { keyword: new RegExp('할까말까'),      behavior: 'pickOne',        parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] }
];

var behaviors = {
    pickOne: function(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
};

var checkKeywordAndGetResponse = function(text) {
    for (var i = 0; i < keywordList.length; i++) {
        var match = text.match(keywordList[i].keyword);
        if (match === null) continue;
        return behaviors[keywordList[i].behavior](keywordList[i].parameter);
    }
    return null;
};

var mrDecisionBot = {
    handleUpdate: function(update) {
        if (update.message === null) return;
        var message = update.message.text;
        console.log(message);
        console.log(checkKeywordAndGetResponse(message));
    }
};

module.exports = mrDecisionBot;