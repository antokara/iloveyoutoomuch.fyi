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
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: []
    }
  });
