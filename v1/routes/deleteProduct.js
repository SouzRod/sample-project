const { deleteProduct } = require('../controllers');

module.exports = {
  url: '/v1/product',
  method: 'DELETE',
  handler: deleteProduct,
  schema: {
    description: 'Delete a product by ID',
    tags: ['Products'],
    query: {
      type: 'object',
      properties: {
        id: { type: 'string' }
      }
    }
  }
};