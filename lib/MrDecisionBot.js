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

    /* 먹이다 */
    /* $냐 */{ pattern: /먹$/, fix: '먹여' },
    /* $냐 */{ pattern: /먹라$/, fix: '먹여라' },
    /* $까 */{ pattern: /먹일$/, fix: '먹여' },
    /* $까 */{ pattern: /먹일자$/, fix: '먹이자' },
    /* $까 */{ pattern: /먹일라$/, fix: '먹여라' },
    /* $까 */{ pattern: /먹일지 마$/, fix: '먹이지 마' },
    /* $야돼 */{ pattern: /먹여자$/, fix: '먹이자' },
    /* $야돼 */{ pattern: /먹여지 마$/, fix: '먹이지 마' },
    /* $야돼 */{ pattern: /먹여지 말든지$/, fix: '먹이지 말든지' },
    /* $야겠지 */{ pattern: /먹여면 안 되지$/, fix: '먹이면 안 되지' },
    /* $도 */{ pattern: /먹여든지$/, fix: '먹이든지' },

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
    /* $도 */{ pattern: /태워든지$/, fix: '태우든지' },

    /* 가다 */
    /* $까 */ { pattern: /갈$/, fix: '가' },
    /* $까 */ { pattern: /갈자$/, fix: '가자' },
    /* $까 */ { pattern: /갈라$/, fix: '가라' },
    /* $까 */ { pattern: /갈지 마$/, fix: '가지 마' },

    /* 있다 */
    /* $냐 */ { pattern: /있$/, fix: '있어' },
    /* $냐 */ { pattern: /있라$/, fix: '있어라' },
    /* $까 */ { pattern: /있을$/, fix: '있어' },
    /* $까 */ { pattern: /있을자$/, fix: '있자' },
    /* $까 */ { pattern: /있을라$/, fix: '있어라' },
    /* $까 */ { pattern: /있을지 마$/, fix: '있지 마' },
    /* $야돼 */ { pattern: /있어자$/, fix: '있자' },
    /* $야돼 */ { pattern: /있어지 마$/, fix: '있지 마' },
    /* $야돼 */ { pattern: /있어지 말든지$/, fix: '있지 말든지' },
    /* $야겠지 */ { pattern: /있어면 안 되지$/, fix: '있으면 안 되지' },
    /* $도 */ { pattern: /있어든지$/, fix: '있든지' },

    /* 없다 */
    /* $냐 */ { pattern: /없$/, fix: '없어' },
    /* $냐 */ { pattern: /없라$/, fix: '없어라' },
    /* $까 */ { pattern: /없을$/, fix: '없어' },
    /* $까 */ { pattern: /없을자$/, fix: '없자' },
    /* $까 */ { pattern: /없을라$/, fix: '없어라' },
    /* $까 */ { pattern: /없을지 마$/, fix: '없지 마' },
    /* $야돼 */ { pattern: /없어자$/, fix: '없자' },
    /* $야돼 */ { pattern: /없어지 마$/, fix: '없지 마' },
    /* $야돼 */ { pattern: /없어지 말든지$/, fix: '없지 말든지' },
    /* $야겠지 */ { pattern: /없어면 안 되지$/, fix: '없으면 안 되지' },
    /* $도 */ { pattern: /없어든지$/, fix: '없든지' },

    /* 살다 */
    /* $냐 */ { pattern: /사$/, fix: '살아' },
    /* $냐 */ { pattern: /사라$/, fix: '살아라' },
    /* $까 */ { pattern: /살$/, fix: '살아' },
    /* $까 */ { pattern: /살자$/, fix: '살자' },
    /* $까 */ { pattern: /살라$/, fix: '살아라' },
    /* $까 */ { pattern: /살지 마$/, fix: '살지 마' },
    /* $야돼 */ { pattern: /살아자$/, fix: '살자' },
    /* $야돼 */ { pattern: /살아지 마$/, fix: '살지 마' },
    /* $야돼 */ { pattern: /살아지 말든지$/, fix: '살지 말든지' },
    /* $야겠지 */ { pattern: /살아면 안 되지$/, fix: '살면 안 되지' },
    /* $도 */ { pattern: /살아든지$/, fix: '살든지' },

    /* 살리다 */
    /* $냐 */ { pattern: /살리$/, fix: '살려' },
    /* $냐 */ { pattern: /살리라$/, fix: '살려라' },
    /* $까 */ { pattern: /살릴$/, fix: '살려' },
    /* $까 */ { pattern: /살릴자$/, fix: '살리자' },
    /* $까 */ { pattern: /살릴라$/, fix: '살려라' },
    /* $까 */ { pattern: /살릴지 마$/, fix: '살리지 마' },
    /* $야돼 */ { pattern: /살려자$/, fix: '살리자' },
    /* $야돼 */ { pattern: /살려지 마$/, fix: '살리지 마' },
    /* $야돼 */ { pattern: /살려지 말든지$/, fix: '살리지 말든지' },
    /* $야겠지 */ { pattern: /살려면 안 되지$/, fix: '살리면 안 되지' },
    /* $도 */ { pattern: /살려든지$/, fix: '살리든지' },

    /* 죽다 */
    /* $냐 */ { pattern: /죽$/, fix: '죽어' },
    /* $냐 */ { pattern: /죽라$/, fix: '죽어라' },
    /* $까 */ { pattern: /죽을$/, fix: '죽어' },
    /* $까 */ { pattern: /죽을자$/, fix: '죽자' },
    /* $까 */ { pattern: /죽을라$/, fix: '죽어라' },
    /* $까 */ { pattern: /죽을지 마$/, fix: '죽지 마' },
    /* $야돼 */ { pattern: /죽어자$/, fix: '죽자' },
    /* $야돼 */ { pattern: /죽어지 마$/, fix: '죽지 마' },
    /* $야돼 */ { pattern: /죽어지 말든지$/, fix: '죽지 말든지' },
    /* $야겠지 */ { pattern: /죽어면 안 되지$/, fix: '죽으면 안 되지' },
    /* $도 */ { pattern: /죽어든지$/, fix: '죽든지' },

    /* 죽이다 */
    /* $냐 */ { pattern: /죽이$/, fix: '죽여' },
    /* $냐 */ { pattern: /죽이라$/, fix: '죽여라' },
    /* $까 */ { pattern: /죽일$/, fix: '죽여' },
    /* $까 */ { pattern: /죽일자$/, fix: '죽이자' },
    /* $까 */ { pattern: /죽일라$/, fix: '죽여라' },
    /* $까 */ { pattern: /죽일지 마$/, fix: '죽이지 마' },
    /* $야돼 */ { pattern: /죽여자$/, fix: '죽이자' },
    /* $야돼 */ { pattern: /죽여지 마$/, fix: '죽이지 마' },
    /* $야돼 */ { pattern: /죽여지 말든지$/, fix: '죽이지 말든지' },
    /* $야겠지 */ { pattern: /죽여면 안 되지$/, fix: '죽이면 안 되지' },
    /* $도 */ { pattern: /죽여든지$/, fix: '죽이든지' },

    /* 배우다 */
    /* $냐 */ { pattern: /배우$/, fix: '배워' },
    /* $냐 */ { pattern: /배우라$/, fix: '배워라' },
    /* $까 */ { pattern: /배울$/, fix: '배워' },
    /* $까 */ { pattern: /배울자$/, fix: '배우자' },
    /* $까 */ { pattern: /배울라$/, fix: '배워라' },
    /* $까 */ { pattern: /배울지 마$/, fix: '배우지 마' },
    /* $야돼 */ { pattern: /배워자$/, fix: '배우자' },
    /* $야돼 */ { pattern: /배워지 마$/, fix: '배우지 마' },
    /* $야돼 */ { pattern: /배워지 말든지$/, fix: '배우지 말든지' },
    /* $야겠지 */ { pattern: /배워면 안 되지$/, fix: '배우면 안 되지' },
    /* $도 */ { pattern: /배워든지$/, fix: '배우든지' },

    /* 사다 */
    /* $냐 */ { pattern: /사우$/, fix: '사' },
    /* $냐 */ { pattern: /사우라$/, fix: '사라' },
    /* $까 */ { pattern: /살$/, fix: '사' },
    /* $까 */ { pattern: /살자$/, fix: '사자' },
    /* $까 */ { pattern: /살라$/, fix: '사라' },
    /* $까 */ { pattern: /살지 마$/, fix: '사지 마' },

    /* 팔다 */
    /* $냐 */ { pattern: /파$/, fix: '팔아' },
    /* $냐 */ { pattern: /파라$/, fix: '팔아라' },
    /* $까 */ { pattern: /팔$/, fix: '팔아' },
    /* $까 */ { pattern: /팔라$/, fix: '배아라' },
    /* $야돼 */ { pattern: /팔아자$/, fix: '팔자' },
    /* $야돼 */ { pattern: /팔아지 마$/, fix: '팔지 마' },
    /* $야돼 */ { pattern: /팔아지 말든지$/, fix: '팔지 말든지' },
    /* $야겠지 */ { pattern: /팔아면 안 되지$/, fix: '팔면 안 되지' },
    /* $도 */ { pattern: /팔아든지$/, fix: '팔든지' },

    /* 때리다 */
    /* $냐 */ { pattern: /때리$/, fix: '때려' },
    /* $냐 */ { pattern: /때리라$/, fix: '때려라' },
    /* $까 */ { pattern: /때릴$/, fix: '때려' },
    /* $까 */ { pattern: /때릴자$/, fix: '때리자' },
    /* $까 */ { pattern: /때릴라$/, fix: '때려라' },
    /* $까 */ { pattern: /때릴지 마$/, fix: '때리지 마' },
    /* $야돼 */ { pattern: /때려자$/, fix: '때리자' },
    /* $야돼 */ { pattern: /때려지 마$/, fix: '때리지 마' },
    /* $야돼 */ { pattern: /때려지 말든지$/, fix: '때리지 말든지' },
    /* $야겠지 */ { pattern: /때려면 안 되지$/, fix: '때리면 안 되지' },
    /* $도 */ { pattern: /때려든지$/, fix: '때리든지' }
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