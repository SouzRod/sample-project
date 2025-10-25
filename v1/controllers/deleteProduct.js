const adapters = require('../adapters');

async function deleteProduct(req, res) {
  await adapters.deleteProduct(req.query.id);
  res.code(200).send({
    message: 'Product deleted successfully',
  });
}

module.exports = { deleteProduct };
