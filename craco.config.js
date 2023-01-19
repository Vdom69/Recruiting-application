const HtmlWebpackPlugin = require('html-webpack-plugin');

function createAdditionalPage(name, env, paths) {
    return new HtmlWebpackPlugin({
        inject: true,
        chunks: [name],
        template: paths.appPublic + '/' + name + '.html',
        filename: name + '.html',
        minify: env === 'production' && {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        },
    })
}

module.exports = {
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            let config = {
                ...webpackConfig,
                entry: {
                    main: paths.appIndexJs,
                    content: './src/chrome/content.js',
                },
                output: {
                    ...webpackConfig.output,
                    filename: 'static/js/[name].js',
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                }
            };
            // config.plugins.push(createAdditionalPage('popup', env, paths));
            return config
        },
    }
}