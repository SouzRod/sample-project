const { product } = require('../../repositories');

const deleteProduct = async (id) => {
  return product.deleteOne({ _id: id });
};

module.exports = { deleteProduct };
