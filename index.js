'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _MyComponent = require('./dist/MyComponent.js');

var _MyComponent2 = _interopRequireDefault(_MyComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/assets', _express2.default.static('dist'));

app.get('/', function (req, res) {
  var componente = _server2.default.renderToString(_react2.default.createElement(_MyComponent2.default, { version: 'Servidor' }));
  var html = '\n    <html>\n    <head>\n      <title>Server</title>\n    </head>\n    <body>\n      <h1>hola mundo</h1>\n      <div id="serverside">\n        ' + componente + '\n      </div>\n      <div id="app">Render in client</div>\n      <script src="/assets/app.js"></script>\n    </body>\n    </html>\n  ';
  res.send(html);
});

app.listen(3000, function () {
  console.log('Example server app listening on port 3000!');
});
