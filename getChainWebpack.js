// 提供给umi用的chainWebpack配置
var ThemeColorReplacer = require("./src/index");
var getAntdSerials = require('./components/getAntdSerials');
var changeSelector = require("./components/antdChangeSelector");
function getChainWebpack(options) {
    return function chainWebpack(config, webpackConf) {
        var { seriesColors, matchColors, ...others } = options;
        var colorAry = [];
        (seriesColors || []).map(function (color) {
            colorAry = colorAry.concat(getAntdSerials(color));
        });
        config.plugin('webpack-theme-color-replacer')
            .use(ThemeColorReplacer, [{
                fileName: 'css/theme-colors-[contenthash:8].css',
                // 读取主题色
                matchColors: colorAry.concat(matchColors||[]),
                injectCss: true,
                changeSelector,
                ...others
            }]);
    }
}
module.exports = getChainWebpack;