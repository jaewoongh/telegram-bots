var keywordList = [
    { keyword: '할까말까',      behavior: 'pick-one',        responseList: ['', '', '', ''] }
];

var mrDecisionBot = {
    handleUpdate: function(update) {
        if (update.message === null) return;
        console.log(update.message.match(/할까말까/));
    }
};

module.exports = mrDecisionBot;