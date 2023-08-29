const path = require('path');

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry : {
    index: './src/index.js',
    print: './src/print.js',
  },
  output: {
    // filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
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