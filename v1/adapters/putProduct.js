import { product } from '../../repositories/index.js';

export const putProduct = async (id, productData) => {
  const updatedProduct = {
    brand: productData.brand,
    model: productData.model,
    price: productData.price,
  };
  return product.update({ _id: id }, updatedProduct);
};
