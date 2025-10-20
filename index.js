import Fastify from 'fastify';
import swaggerUi from '@fastify/swagger-ui';
import swagger from '@fastify/swagger';
import cors from '@fastify/cors';
import routes from './v1/routes/index.js';
import config from './config/index.js';

const fastify = Fastify({ logger: true });

fastify.register(swagger, {
  swagger: {
    info: {
      title: config.app.name,
      version: '1.0.0',
    },
  },
});

fastify.register(swaggerUi, { routePrefix: `${config.stripPrefix.path}/docs` });

fastify.register(cors, { origin: (_, cb) => cb(null, true) });

fastify.register(routes, { prefix: config.stripPrefix.path });

fastify.listen({ port: config.app.port }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`App running on http://127.0.0.1:${fastify.server.address().port}`);
});
