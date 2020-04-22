// 修改webpack默认配置，目的：按需引入antdesign
// 、、customize-cra包含很多api
const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');

const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

const rewiredMap = () => config => {
    // config为所有的webpack配置

    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false  // 生产环境关闭sourcemap关闭
    return config
}


module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addWebpackAlias({
        '@': resolve('src')
    }),
    rewiredMap()
);