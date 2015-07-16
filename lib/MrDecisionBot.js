var explicitCommands = [
    { command: '^김결정!', behavior: 'customPick' }
];

var keywordList = [
    { keyword: '해말어', behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지 마', '해', '하지 마'] },
    { keyword: '해말아', behavior: 'pickOne', parameter: ['해', '말어', '하자', '말자', '해라', '하지 마', '해', '하지 마'] },

    { keyword: /(\S+)냐.*마냐/, behavior: 'pickOne', parameter: ['$', '말어', '$자', '말자', '$라', '$지 마', '$', '$지 마'] },
    { keyword: /(\S+)까.*말까/, behavior: 'pickOne', parameter: ['$', '말어', '$자', '말자', '$라', '$지 마', '$', '$지 마'] },
    { keyword: /(\S+)야\s?돼.*말아야\s?돼/, behavior: 'pickOne', parameter: ['$', '말어', '$자', '말자', '$라', '$지 마', '$', '$지 마'] },
    { keyword: /(\S+)야\s?하냐.*말아야\s?하냐/, behavior: 'pickOne', parameter: ['$', '말어', '$자', '말자', '$라', '$지 마', '$', '$지 마'] },
    { keyword: /(\S+)야\s?되냐.*말아야\s?되냐/, behavior: 'pickOne', parameter: ['$', '말어', '$자', '말자', '$라', '$지 마', '$', '$지 마'] },
    { keyword: /(\S+)야\s?돼\?/, behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: /(\S+)야\s?해\?/, behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: /(\S+)야\s?됨\?/, behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: /(\S+)야\s?함\?/, behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: /(\S+)야\s?되나\?/, behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: /(\S+)야\s?하나\?/, behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: /(\S+)야\s?되냐\?/, behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: /(\S+)야\s?하냐\?/, behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: /(\S+)야겠지\?/, behavior: 'pickOne', parameter: ['$야지', '$지 마', '$야 돼', '안 $도 돼', '$야 돼', '$지 말든지'] },
    { keyword: /(\S+)도\s?되나\?/, behavior: 'pickOne', parameter: ['돼', '안 돼', '$도 돼', '$면 안 되지', '$든지', 'ㄴㄴ'] }
];

var irregularTable = [
    /* 하다 */
    /* $냐 */ { pattern: /하$/, fix: '해' },
    /* $냐 */ { pattern: /하라$/, fix: '해라' },
    /* $까 */ { pattern: /할$/, fix: '해' },
    /* $까 */ { pattern: /할자$/, fix: '하자' },
    /* $까 */ { pattern: /할라$/, fix: '해라' },
    /* $까 */ { pattern: /할지 마$/, fix: '하지 마' },
    /* $야돼 */ { pattern: /해자$/, fix: '하자' },
    /* $야돼 */ { pattern: /해지 마$/, fix: '하지 마' },
    /* $야돼 */ { pattern: /해지 말든지$/, fix: '하지 말든지' },
    /* $야겠지 */ { pattern: /해면 안 되지$/, fix: '하면 안 되지' },
    /* $도 */ { pattern: /해든지$/, fix: '하든지' },

    /* 먹다 */
    /* $냐 */{ pattern: /먹$/, fix: '먹어' },
    /* $냐 */{ pattern: /먹라$/, fix: '먹어라' },
    /* $까 */{ pattern: /먹을$/, fix: '먹어' },
    /* $까 */{ pattern: /먹을자$/, fix: '먹자' },
    /* $까 */{ pattern: /먹을라$/, fix: '먹어라' },
    /* $까 */{ pattern: /먹을지 마$/, fix: '먹지 마' },
    /* $야돼 */{ pattern: /먹어자$/, fix: '먹자' },
    /* $야돼 */{ pattern: /먹어지 마$/, fix: '먹지 마' },
    /* $야돼 */{ pattern: /먹어지 말든지$/, fix: '먹지 말든지' },
    /* $야겠지 */{ pattern: /먹어면 안 되지$/, fix: '먹으면 안 되지' },
    /* $도 */{ pattern: /먹어든지$/, fix: '먹든지' },

    /* 타다 */
    /* $까 */{ pattern: /탈$/, fix: '타' },
    /* $까 */{ pattern: /탈자$/, fix: '타자' },
    /* $까 */{ pattern: /탈라$/, fix: '타라' },
    /* $까 */{ pattern: /탈지 마$/, fix: '타지 마' },

    /* 태우다 */
    /* $냐 */{ pattern: /태우$/, fix: '태워' },
    /* $냐 */{ pattern: /태우라$/, fix: '태워라' },
    /* $까 */{ pattern: /태울$/, fix: '태워' },
    /* $까 */{ pattern: /태울자$/, fix: '태우자' },
    /* $까 */{ pattern: /태울라$/, fix: '태워라' },
    /* $까 */{ pattern: /태울지 마$/, fix: '태우지 마' },
    /* $야돼 */{ pattern: /태워자$/, fix: '태우자' },
    /* $야돼 */{ pattern: /태워지 마$/, fix: '태우지 마' },
    /* $야돼 */{ pattern: /태워지 말든지$/, fix: '태우지 말든지' },
    /* $야겠지 */{ pattern: /태워면 안 되지$/, fix: '태우면 안 되지' },
    /* $도 */{ pattern: /태워든지$/, fix: '태우든지' }
];

var handleIrregulars = function(text) {
    for (var i = 0; i < irregularTable.length; i++) {
        var regex = new RegExp(irregularTable[i].pattern);
        if (text.match(regex) === null) continue;
        return text.replace(regex, irregularTable[i].fix);
    }
    return text;
};

var behaviors = {
    pickOne: function(matchResult, list) {
        var response = list[Math.floor(Math.random() * list.length)].replace('$', matchResult[1]);
        return handleIrregulars(response)
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
        var match = text.trim().match(new RegExp(keywordList[i].keyword));
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