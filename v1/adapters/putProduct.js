const { product } = require('../../repositories');

async function putProduct(id, productData) {
  const updatedProduct = {
    brand: productData.brand,
    model: productData.model,
    price: productData.price,
  };
  return product.update({ _id: id }, updatedProduct);
}

module.exports = { putProduct };
