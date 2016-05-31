module.exports = {
  entry: './entry.js',
  output: 'bundle.js',
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      { test: /\.less$/, loader: 'style!css!less' },
      { test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/, loader: 'file-loader'},
      {
        test: /.*\.(gif|png|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      { test: /\.(jpg)$/, loader: 'url?limit=25000' }
    ],
  }
};
