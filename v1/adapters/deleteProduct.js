const { product } = require('../../repositories');

async function deleteProduct(id) {
  return product.deleteOne({ _id: id });
}

module.exports = { deleteProduct };
