const express = require('express');
const app = express();
const expresshandlebars = require('express-handlebars');
const helmet = require('helmet');

if(process.env.NODE_ENV === 'local') {
  console.log('Starting Local Webpack Server...');

  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  /**
   * Webpack Config
   */
  const config = require('./webpack.config');
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
  }));

  app.use(webpackHotMiddleware(compiler));
}

const port = process.env.PORT || 8080;

app.use(require('morgan')('combined', {

}));


app.use('/public', express.static('public'));
app.use('/semantic', express.static('semantic/dist'));
app.engine('handlebars', expresshandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('index', {isLocal: process.env.NODE_ENV === 'local'});
});

app.get('/story', function (req, res) {
  res.render('story', {isLocal: process.env.NODE_ENV === 'local'});
});

app.listen(port, function () {
  console.log(`Listening on port ${port}...`);
});