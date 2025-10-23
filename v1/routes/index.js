const routes = require('./routes.js');

module.exports = (fastify, _, done) => {
  routes.forEach(route => fastify.route(route));
  done();
};
