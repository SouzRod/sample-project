const { getProducts } = require('../controllers');

module.exports = {
  url: '/v1/products',
  method: 'GET',
  handler: getProducts,
  schema: {
    description: 'Get all products',
    tags: ['Products'],
  }
};
