var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        "./src/app.js"
    ],
    output: {
        path: __dirname + '/',
        filename: "bundle.js"
    },
    module: {
        loaders:[
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=1000000'
            },
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets:['es2015','react']
                }
            }
        ]
    },
    resolve: {
        alias: {
            'jquery': path.join( __dirname, 'node_modules/jquery/dist/jquery' ),
        }
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery",
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
        })
    ]

};