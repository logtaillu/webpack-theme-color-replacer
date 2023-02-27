// umi app.ts的运行时render
// 在入口处理下，用于挂载的系统需要不用的主题色的情况
// updateColorFunc用于传入updateColorQ函数
// checkExist：检测root元素是否存在，防止报错
var updateColor = require("./updateColor");
function userRender(getColorOptions, updateColorFunc, checkExist) {
    updateColorFunc = updateColorFunc || updateColor;
    checkExist = checkExist || function () { return true };
    return function (oldRender) {
        var options = getColorOptions();
        if (options) {
            if (checkExist()) {
                updateColorFunc(options).finally(() => {
                    if (checkExist()) {
                        oldRender();
                    }
                });
            }
        } else {
            oldRender();
        }
    }
}
module.exports = userRender;