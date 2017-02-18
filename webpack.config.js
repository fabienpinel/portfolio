var webpack = require('webpack');
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
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                {
                    presets:['es2015','react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=1000000'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]

};