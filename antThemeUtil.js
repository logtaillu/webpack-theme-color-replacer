// ant入口
var varyColor = require('./client/varyColor');
var userRender = require('./components/userRender');
var updateColor = require('./components/updateColor');
var getAntdSerials = require('./components/getAntdSerials');
var changeSelector = require('./components/antdChangeSelector');
module.exports = {
    varyColor,
    userRender: function (getColorOptions) {
        return userRender(getColorOptions, updateColor);
    },
    updateColor,
    changeSelector,
    getAntdSerials
}