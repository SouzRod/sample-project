const { product } = require('../../repositories');

const getProduct = async (id) => {
  return product.findOne({ _id: id });
};

module.exports = { getProduct };
