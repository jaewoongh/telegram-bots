var keywordList = [
    { keyword: '할까말까',      behavior: 'pick-one',        responseList: ['', '', '', ''] }
];

var mrDecisionBot = {
    handleUpdate: function(update) {
        if (update.message === null) return;
        var message = update.message;
        console.log(message);
        console.log(message.match(/할까말까/));
    }
};

module.exports = mrDecisionBot;