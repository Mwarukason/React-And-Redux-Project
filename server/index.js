import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot:true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true //eliminate noise from webpack
}));
app.use(webpackHotMiddleware(compiler));
//erro function
app.get('/*', (req, res) => {
  //send file using path package showing path directory and importing path
  res.sendFile(path.join(__dirname, './index.html'));
});

//listen to port 3000 and tel use we are running on localhost
app.listen(3000, () => console.log('running on localhost:3000'));
