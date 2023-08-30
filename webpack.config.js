const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // Entry
  entry : {
    index: './src/index.js',
  },

  devtool: 'inline-source-map',

  devServer: {
    static: './dist',
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack learn',
    }),
  ],

  // Output
  output: {
    // filename: 'main.js',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  optimization : {
    moduleIds: 'deterministic',
    runtimeChunk : "single",
    splitChunks : {
      cacheGroups : {
        vendor : {
          test : /[\\/]node_modules[\\/]/,
          name : 'vendors',
          chunks : 'all',
        }
      }
    }
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },

  // Modules
  module: {
    rules: [
      // Style file
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Image file
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     
  
    ],
  },
  
}