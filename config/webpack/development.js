// webpack
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./common.js');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplatePlugin = require('html-webpack-template');

module.exports = env =>
  merge(common(env), {
    mode: 'development',
    // @see https://webpack.js.org/configuration/dev-server
    devServer: {
      contentBase: path.join(__dirname, '../../dist'),
      compress: true,
      port: 9000,
      https: false,
      open: false,
      historyApiFallback: true,
      hot: true,
      host: '0.0.0.0',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      disableHostCheck: true
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: env && env.NODE_ENV ? env.NODE_ENV : 'development',
        DEBUG: false
      }),
      new HtmlWebpackPlugin({
        title: 'Stephanie & Antonios Wedding',
        minify: false,
        inject: false,
        headHtmlSnippet: '<!-- jss-insertion-point -->',
        template: HtmlWebpackTemplatePlugin,
        lang: 'en-US',
        appMountId: 'root',
        baseHref: '/',
        meta: [
          {
            name: 'viewport',
            content:
              'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          }
        ]
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: []
    }
  });
