var addQiankunPrefix = require("./addQiankunPrefix");
var updateColor = require("./updateColor");
function updateColorQ(options) {
    var baseHandle = options.handleCss;
    var handleCss = function (elStyle) {
        addQiankunPrefix(elStyle, options.getAppName);
        if (baseHandle) {
            baseHandle(elStyle);
        }
    }
    return updateColor({
        // 增加cache配置不清除cssCode应对节点卸载的情况
        cache: true,
        ...options,
        handleCss
    });
}
module.exports = updateColorQ;