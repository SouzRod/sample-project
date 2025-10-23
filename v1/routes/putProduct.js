const { putProduct } = require('../controllers');

module.exports = {
  url: '/v1/product',
  method: 'PUT',
  handler: putProduct,
  schema: {
    description: 'Update a product by ID',
    tags: ['Products'],
    query: {
      type: 'object',
      properties: {
        id: { type: 'string' }
      }
    },
    body: {
      type: 'object',
      properties: {
        brand: { type: 'string' },
        model: { type: 'string' },
        price: { type: 'number' }
      },
      required: ['brand', 'model', 'price']
    }
  }
};
