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
    context: path.join(__dirname, paths.src),
    entry: {
        'bundle': './index.js',
        'bundle.min': './index.js'
    },

    output: {
        path: path.join(__dirname, paths.dist),
        filename: '[name].js',
        sourceMapFilename: './map/[file].map'
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            compressor: {
                warnings: false
            }
        })
    ]
}
