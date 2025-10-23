const { product } = require('../../repositories');

const getProducts = async () => {
  return product.findMany({});
};

module.exports = { getProducts };
