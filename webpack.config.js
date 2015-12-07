module.exports = {
  context: __dirname,
  entry: "./frontend/minesweeper.jsx",
  output: {
    path: "./frontend",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      }
    ]
  }
};
