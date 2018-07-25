//

const { resolve } = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'hyperhtml-html-views-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        type: 'javascript/esm',
        exclude: /node_modules/
      }
    ]
  },
  //
  serve: {
    add: (app, middleware, options) => {
      const ssr = require(resolve(process.cwd(), 'server'));
      const bodyRef = {};

      const indexHtmlTemplate = (hyper, { body }) => hyper.wire()`
        <body>${body}</body>
      `;
      // middleware _after_ the built-in webpack and content middleware.
      middleware.webpack().then(() => {
        middleware.content();

        // this example assumes router must be added last
        app.use(ssr({ hyperTemplate: indexHtmlTemplate }));
      });
    },
    dev: {
      stats: 'minimal'
    }
  }
};
