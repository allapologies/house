/* eslint-disable */

const webpack = require('webpack')
const path = require('path')

module.exports = function (config) {
    'use strict'

    const testFiles = [
        './tests/*.spec.jsx',
        './tests/*.spec.js',
        './src/**/tests/*.spec.jsx',
        './src/**/tests/*.spec.js'
    ]

    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        autoWatchBatchDelay: 300,

        files: testFiles,

        preprocessors: {
            './tests/*.spec.jsx': ['webpack'],
            './tests/*.spec.js': ['webpack'],
            './src/**/tests/*.spec.jsx': ['webpack'],
            './src/**/tests/*.spec.js': ['webpack']
        },

        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        exclude: [/node_modules/, /\.spec\.jsx?$/],
                        loaders: ['babel-loader?plugins=istanbul']
                    },
                    {
                        test: /\.jsx?$/,
                        include: [
                            /node_modules[\\\/]sbtsbol-.*(?!([\\\/]node_modules))/
                        ],
                        loaders: ['babel-loader']
                    },
                    {
                        test: /\.spec\.jsx?$/,
                        exclude: /node_modules/,
                        loaders: ['babel-loader']
                    },
                    {
                        test: /\.css$/,
                        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&camelCase&localIdentName=[hash:base64:5]']
                    },
                    {
                        test: /\.(?:jpg|png|gif)$/,
                        loaders: ['file-loader?name=img/[name]--[hash:base64:5].[ext]']
                    },
                    {
                        test: /\.json$/,
                        loaders: ['json-loader']
                    }
                ]
            },

            resolve: {
                extensions: ['', '.jsx', '.js', '.json']
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                })
            ]
        },

        webpackMiddleware: {
            noInfo: true
        },

        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-jasmine-diff-reporter'
        ]
    })
}
