const webpack = require('webpack'),
    path = require('path'),
    paths = {
        src: 'src',
        dist: 'public',
        config: {
            eslint: './.eslintrc'
        }
    };

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.js'] ,

    output: {
        path: path.join(__dirname, paths.dist),
        filename: 'bundle.js'
    },

    devtool: 'cheap-module-source-map',

    eslint: {
        configFile: paths.config.eslint,
        formatter: require('eslint-friendly-formatter')
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: path.join(__dirname, paths.dist),
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ['react-hot-loader/babel']
                }
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
