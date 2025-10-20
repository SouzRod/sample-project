import { getProducts } from "../controllers/index.js";

export default {
  url: '/v1/products',
  method: 'GET',
  handler: getProducts,
  schema: {
    description: 'Get all products',
    tags: ['Products'],
  }
};