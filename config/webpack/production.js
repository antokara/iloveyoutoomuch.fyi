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
        lang: 'en-US',
        appMountId: 'root',
        googleAnalytics: {
          trackingId: process.env.GA_TRACKING_ID,
          pageViewOnLoad: true
        },
        meta: [
          {
            name: 'viewport',
            content:
              'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          },
          {
            property: 'og:title',
            content: 'Stephanie & Antonios Wedding'
          },
          {
            property: 'og:description',
            content: 'Save the date, RSVP & Information'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:locale',
            content: 'en_US'
          },
          {
            property: 'og:image',
            content:
              'http://images.takeshape.io/53e75ca3-0cfa-43ca-810f-2a6e6c39ecb3/dev/192fda5f-a96f-46f0-8bae-cff8851507a2/DSC00558.jpg?fit=crop&w=1080&h=1080&fp-x=0&fp-y=1'
          },
          {
            property: 'og:image:secure_url',
            content:
              'https://images.takeshape.io/53e75ca3-0cfa-43ca-810f-2a6e6c39ecb3/dev/192fda5f-a96f-46f0-8bae-cff8851507a2/DSC00558.jpg?fit=crop&w=1080&h=1080&fp-x=0&fp-y=1'
          },
          {
            property: 'og:image:width',
            content: '1080'
          },
          {
            property: 'og:image:height',
            content: '1080'
          }
        ]
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: '../reports/webpackBundleAnalyzer.html',
        openAnalyzer: false
      })
    ]
  });
