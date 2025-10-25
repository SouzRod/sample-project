const { product } = require('../../repositories');

async function getProducts() {
  return product.findMany({});
}

module.exports = { getProducts };
