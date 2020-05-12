module.exports = {
  entry: __dirname + '/client/src/App.jsx',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/public',
  },
};
