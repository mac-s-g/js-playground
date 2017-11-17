const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const build_objects = require('./build-objects')
const wds_port = 3300;

const PATHS = {
  src: path.join(__dirname, '..', 'src'),
  build: path.join(__dirname, '..', 'dist'),
};

const config = {
  devServer: {
    host: '0.0.0.0',
    port: wds_port,
    hot: true,
    inline: true,
    contentBase: PATHS.build
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devtool: 'eval-source-map',
  resolve: {
    extensions: [".js", ".json", ".css", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        include: [PATHS.src]
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [{
          loader: 'url-loader?limit=100000'
        }]
      }
    ]
  }
};

module.exports = build_objects.map((app) => {
  let app_config = Object.assign({}, config, {
    plugins: config.plugins.slice().concat([
      new HtmlWebpackPlugin({
        title: app,
        filename: path.join(PATHS.build, app, 'index.html'),
        template: path.join(PATHS.src, app, 'html', 'index.html')
      })
    ]),
    entry: path.join(PATHS.src, app, 'js', 'entry.js'),
    output: {
      path: path.join(PATHS.build, app),
      filename: 'main.js'
    }
  });

  //default to index at app root
  if (app == 'index') {
    app_config.plugins.push(
      new HtmlWebpackPlugin({
        title: app,
        filename: path.join(PATHS.build, 'index.html'),
        template: path.join(PATHS.src, app, 'html', 'app-index.html')
      })
    );
  }

  return app_config
})
