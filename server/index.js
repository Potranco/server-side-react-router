'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _StaticRouter = require('react-router-dom/StaticRouter');

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

var _app = require('../src/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_app2.default);
var app = (0, _express2.default)();

app.use('/assets', _express2.default.static('dist'));

app.get('/', function (req, res) {
  var context = {};
  var AppServerRender = _server2.default.renderToString(_react2.default.createElement(
    _StaticRouter2.default,
    { location: req.url, context: context },
    _react2.default.createElement(_app2.default, null)
  ));

  if (context.url) {
    res.writeHead(301, { Location: context.url });
  } else {
    var html = '\n    <html>\n    <head>\n      <title>Server</title>\n    </head>\n    <body>\n      <h1>hola mundo</h1>\n      <div id="serverside">\n        ' + AppServerRender + '\n      </div>\n      <div id="app">Render in client</div>\n      <script src="/assets/main.js"></script>\n    </body>\n    </html>\n  ';
    res.send(html);
  }
});

app.listen(8090, function () {
  console.log('Server app listening on port 8080!');
  console.info('url: http://localhost:8080');
});
