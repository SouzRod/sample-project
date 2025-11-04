const fastify = require('fastify');
const swaggerUi = require('@fastify/swagger-ui');
const swagger = require('@fastify/swagger');
const cors = require('@fastify/cors');
const routes = require('./v1/routes');
const config = require('./config');

const app = fastify({ logger: true });

app.register(swagger, {
  swagger: {
    info: {
      title: config.app.name,
      version: '1.0.0',
    },
  },
});

app.register(swaggerUi, { routePrefix: `${config.stripPrefix.path}/docs` });

app.register(cors, { origin: (_, cb) => cb(null, true) });

app.register(routes, { prefix: config.stripPrefix.path });

app.listen({ port: config.app.port }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  console.log(`App running on http://127.0.0.1:${app.server.address().port}`);
});
