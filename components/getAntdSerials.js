// 获取antd系列色
var { generate } = require('@ant-design/colors');
var varyColor = require("../client/varyColor");
function getAntdSerials(color) {
    var colorPalettes = generate(color);
    var rgb = varyColor.toNum3(color.replace('#', '')).join(',')
    var shadow = varyColor.toNum3(color.replace('#', '')).join(' ')
    return colorPalettes.concat(rgb).concat(shadow);
}
module.exports = getAntdSerials;