import { product } from '../../repositories/index.js';

export const deleteProduct = async (id) => {
  return product.deleteOne({ _id: id });
};
