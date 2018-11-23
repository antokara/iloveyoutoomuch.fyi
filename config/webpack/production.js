// webpack
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./common.js');

// plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplatePlugin = require('html-webpack-template');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = env =>
  merge(common(env), {
    mode: 'production',
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: env && env.NODE_ENV ? env.NODE_ENV : 'production',
        DEBUG: false
      }),
      new CleanWebpackPlugin([path.resolve(__dirname, '../../dist')], {
        exclude: ['icons'],
        root: path.resolve(__dirname, '../../')
      }),
      new HtmlWebpackPlugin({
        title: 'Stephanie & Antonios Wedding',
        minify: {
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          removeComments: true,
          sortClassName: true,
          useShortDoctype: true,
          collapseWhitespace: true
        },
        inject: false,
        template: HtmlWebpackTemplatePlugin,
        mobile: true,
        lang: 'en-US',
        appMountId: 'root'
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: '../reports/webpackBundleAnalyzer.html',
        openAnalyzer: false
      })
    ]
  });
