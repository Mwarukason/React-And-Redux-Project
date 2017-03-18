import path from 'path'

export default {
  devtools: 'eval-source-map',
  //client js file and out middleware doesnt care and save at memory
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/'
  },
  module: {
    loaders:[
      {
      test: /\.js$/,
      include: path.join(__dirname, 'client'),
      loaders: [ 'babel' ]
     }
  ]
},
resolve: {
  extensions: ['', '.js']
 }
}
