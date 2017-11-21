import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MyComponent from '../dist/MyComponent.js';

const app = express();

app.use('/assets',express.static('dist'));

app.get('/', function (req, res) {
  let componente = ReactDOMServer.renderToString(<MyComponent version='Servidor'/>);
  const html = `
    <html>
    <head>
      <title>Server</title>
    </head>
    <body>
      <h1>hola mundo</h1>
      <div id="serverside">
        ${componente}
      </div>
      <div id="app">Render in client</div>
      <script src="/assets/app.js"></script>
    </body>
    </html>
  `;
  res.send(html);
});


app.listen(8080, function () {
  console.log('Server app listening on port 8080!');
  console.info('url: http://localhost:8080');
});
