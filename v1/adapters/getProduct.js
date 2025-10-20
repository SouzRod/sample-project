import { product } from '../../repositories/index.js';

export const getProduct = async (id) => {
  return product.findOne({ _id: id });
};
