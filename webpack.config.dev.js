import path from 'path'
import webpack from 'webpack';

export default {

  //client js file and out middleware doesnt care and save at memory
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: '/',
    publicPath:'/'
  },
  plugins:[
    new webpack.NoerrorsPlugin(), //clean error in nice way
    new webpack.optmize.OccurenceOrderPlugin()
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders:[
      {
      test: /\.js$/,
      include: path.join(__dirname, 'client'),
      loaders: [ 'react-hot', 'babel' ]
     }
  ]
},
resolve: {
  extensions: ['', '.js']
 }
}
