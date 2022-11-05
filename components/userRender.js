// umi app.ts的运行时render
// 在入口处理下，用于挂载的系统需要不用的主题色的情况
// updateColorFunc用于传入updateColorQ函数
var updateColor = require("./updateColor");
function userRender(getColorOptions, updateColorFunc) {
    updateColorFunc = updateColorFunc || updateColor;
    return function (oldRender) {
        var options = getColorOptions();
        if (options) {
            updateColorFunc(options).finally(oldRender);
        } else {
            oldRender();
        }
    }
}
module.exports = userRender;