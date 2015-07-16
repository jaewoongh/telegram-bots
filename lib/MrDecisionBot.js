var keywordList = [
    { keyword: new RegExp('해말어'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('하냐마냐'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('할래말래'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('할까말까'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('할지말지'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('해야돼말아야돼'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('해야할지말아야할지'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('해야되냐말아야되냐'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('해야하는지말아야하는지'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('해야되는지말아야되는지'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('해야하는건지말아야하는건지'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] },
    { keyword: new RegExp('해야되는건지말아야되는건지'), behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지마', '해', '하지마'] }
];

var behaviors = {
    pickOne: function(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
};

var checkKeywordAndGetResponse = function(text) {
    for (var i = 0; i < keywordList.length; i++) {
        var match = text.replace(/\s/g).match(keywordList[i].keyword);
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