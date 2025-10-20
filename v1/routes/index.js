import routes from './routes.js';

export default (fastify, _, done) => {
  routes.forEach(route => fastify.route(route));
  done();
};
