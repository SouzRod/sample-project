const { postProduct } = require('../controllers');

module.exports = {
  url: '/v1/product',
  method: 'POST',
  handler: postProduct,
  schema: {
    description: 'Create a new product',
    tags: ['Products'],
    body: {
      type: 'object',
      properties: {
        brand: { type: 'string' },
        model: { type: 'string' },
        price: { type: 'number' },
      },
    }
  }
};
