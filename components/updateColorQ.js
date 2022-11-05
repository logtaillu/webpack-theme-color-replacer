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
        ...options,
        handleCss
    });
}
module.exports = updateColorQ;