// 项目用的sandbox模式，处理没有被自动加上prefix的情况
var { process } = require("qiankun/es/sandbox/patchers/css");
// 单个挂载的情况
function defaultGetAppName() {
    var ele = document.querySelector("div[data-qiankun]");
    if (ele) {
        return ele.dataset.qiankun;
    } else {
        return "";
    }
}
function addQiankunPrefix(elStyle, getAppName) {
    if (elStyle && !elStyle.prefixed && window.__POWERED_BY_QIANKUN__) {
        getAppName = getAppName || defaultGetAppName;
        elStyle.prefixed = true;
        process(document.createElement("div"), elStyle, getAppName());
    }
}
module.exports = addQiankunPrefix;