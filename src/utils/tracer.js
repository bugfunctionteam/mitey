const tracer = require('dd-trace');

tracer
  .init({
    logInjection: true,
    plugins: true,
  })
  .use('http', {})
  .use('express', {
    headers: ['user-agent', 'x-req-id'],
    hooks: {
      request: (span, req, res) => {
        if (!span || !req || !res) {
          return;
        }

        let route;
        if (res.locals.route) {
          route = res.locals.route;
        } else if (req.path.startsWith('/static/')) {
          route = '/static/';
        } else if (req.path.startsWith('/_next/')) {
          route = '/_next/';
        } else {
          route = req.path;
        }

        span.setTag('resource.name', `${req.method} ${route}`);
      },
    },
  });

