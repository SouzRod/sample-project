const repositories = require('../../repositories');

async function postProduct(product) {
  const newProduct = {
    brand: product.brand,
    model: product.model,
    price: product.price,
  };

  return repositories.product.insert(newProduct);
}

module.exports = { postProduct };
