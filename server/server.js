import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import StaticRouter from 'react-router/StaticRouter';
import App from '../src/app';
import template from '../templates/index-html'

const app = express();

app.use('/assets',express.static('dist'));

app.get('*', function (req, res) {
  const context = {};
  const AppServerRender = ReactDOMServer.renderToString(
    <StaticRouter location={ req.url } context={context} >
      <App/>
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, { Location: context.url} );
  }
  else {
    const html = template(AppServerRender,'App render!!');
    res.send(html);
  }

});


app.listen(8081, function () {
  console.log('Server app listening on port 8080!');
  console.info('url: http://localhost:8080');
});
