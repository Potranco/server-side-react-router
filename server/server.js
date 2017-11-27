import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import App from '../src/app';

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
    const html = `
      <html>
      <head>
        <title>Server</title>
      </head>
      <body>
        <h1>hola mundo</h1>
        <div id="app">
          ${AppServerRender}
        </div>
        <div id="app">Render in client</div>
        <script src="/assets/main.js"></script>
      </body>
      </html>
    `;
    res.send(html);
  }

});


app.listen(8080, function () {
  console.log('Server app listening on port 8080!');
  console.info('url: http://localhost:8080');
});
