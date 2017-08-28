const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const WebpackNodeServerPlugin = require('webpack-node-server-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeModules = {};

// const LessPluginAutoprefix = require("less-plugin-autoprefix");
// const LessPluginVariablesOutput = require("less-plugin-variables-output");
// const LessPluginFunctions = require("less-plugin-functions");
// const LessPluginLists = require("less-plugin-lists");
// const LessPluginUtil = require("less-plugin-util");

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

// module.exports = {
//   entry: './src/main.js',
//   target: 'node',
//   output: {
//     path: path.join(__dirname, 'build'),
//     filename: 'backend.js'
//   },
//   externals: nodeModules,
//   plugins: [
//     new webpack.IgnorePlugin(/\.(css|less)$/),
//     new webpack.BannerPlugin('require("source-map-support").install();',
//                              { raw: true, entryOnly: false })
//   ],
//   devtool: 'sourcemap'
// }
// module.exports = [{
//     target: 'node',
//     entry: './server/app.js',
//     output: {
//         path: path.join(__dirname, 'build'),
//         // path: path.resolve(__dirname),
//         filename: 'server.js'
//     },
//     externals: nodeModules,
//     devtool: 'sourcemap'
// },

module.exports = [{
    target: 'node',
    entry: './src/server.js',
    output: {
        path: path.join(__dirname, 'build'),
        // path: path.resolve(__dirname),
        filename: 'server.js'
    },
    externals: nodeModules,
    devtool: 'sourcemap',
    plugins: [
        new WebpackNodeServerPlugin()
    ]
},
{
    entry: './src/client.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'app.bundle.js',
        publicPath: "/bin/"
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ],
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ["es2015"],
                plugins: ["transform-decorators-legacy", "transform-class-properties"]
            }
        },
        {
            test: /\.less$/,
            exclude: '/node_modules/',
            use: ExtractTextPlugin.extract({
                fallback: [{
                    loader: 'style-loader',
                }],
                use: [{
                    loader: 'css-loader',
                }, {
                    loader: 'less-loader',
                    options: {
                        // plugins: [
                        //     // new LessPluginAutoprefix({browsers: ['last 5 versions']}),
                        //     // // new LessPluginVariablesOutput({filename: 'variables.json'}),
                        //     // new LessPluginFunctions(),
                        //     // new LessPluginLists()
                        //     // new LessPluginUtil()
                        // ]
                    }
                }],
            }),
        }]
    },
    devServer: {
        contentBase: "./src",
        historyApiFallback: true
    }
}];
