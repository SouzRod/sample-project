const adapters = require('../adapters');

const deleteProduct = async (req, res) => {
  await adapters.deleteProduct(req.query.id);
  res.code(200).send({
    message: 'Product deleted successfully',
  });
};

module.exports = { deleteProduct };
