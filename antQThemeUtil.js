// 使用updateColorQ的入口
var varyColor = require('./client/varyColor');
var userRender = require('./components/userRender');
var updateColorQ = require('./components/updateColorQ');
var getAntdSerials = require('./components/getAntdSerials');
var changeSelector = require('./components/antdChangeSelector');
module.exports = {
    varyColor,
    userRender: function (getColorOptions, checkExist) {
        return userRender(getColorOptions, updateColorQ, checkExist);
    },
    updateColor: updateColorQ,
    changeSelector,
    getAntdSerials
}