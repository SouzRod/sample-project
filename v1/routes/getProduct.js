import { getProduct } from "../controllers/index.js";

export default {
  url: '/v1/product',
  method: 'GET',
  handler: getProduct,
  schema: {
    description: 'Get a product by ID',
    tags: ['Products'],
    query: {
      type: 'object',
      properties: {
        id: { type: 'string' }
      }
    }
  }
};