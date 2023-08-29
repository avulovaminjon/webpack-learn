const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // Entry
  entry : {
    index: './src/index.js',
    print: './src/print.js',
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
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },

  optimization: {
    runtimeChunk: 'single',
  },

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