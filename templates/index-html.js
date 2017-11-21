function template({ body, title }){
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body>
          <h1>Server component</h1>
          <div id="root">${body}</div>
          <h1>Client component</h1>
          <div id="app">${body}</div>
          <script src="/assets/app.js"></script>
        </body>
      </html>
    `;
  };

module.export = template;
