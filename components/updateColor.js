var client = require("../client");
var getAntdSerials = require('./getAntdSerials');
function updateColor(options) {
    var { seriesColors, colors, handleCss, ...others } = options;
    var colorAry = [];
    (seriesColors || []).map(function (color) {
        colorAry = colorAry.concat(getAntdSerials(color));
    });
    colorAry = colorAry.concat(colors || []);
    if (colorAry.length) {
        var options = {
            cssUrl: 'css/theme-colors-[contenthash:8].css',
            newColors: colorAry,
            ...others
        };
        var promise = client.changer.changeColor(options).then(elStyle => {
            if (handleCss) {
                handleCss(elStyle);
            }
            return elStyle;
        });
        return promise;
    } else {
        return Promise.resolve();
    }
}
module.exports = updateColor;