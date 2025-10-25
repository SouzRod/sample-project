const { product } = require('../../repositories');

async function getProduct(id) {
  return product.findOne({ _id: id });
}

module.exports = { getProduct };
