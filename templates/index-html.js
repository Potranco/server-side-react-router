export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
      <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="app">
          ${body}
        </div>
        <script src="/assets/main.js"></script>
      </body>
      </html>
  `;
};
