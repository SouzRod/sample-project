const adapters = require('../adapters');

const getProduct = async (req, res) => {
  const product = await adapters.getProduct(req.query.id);
  res.code(200).send(product);
};

module.exports = { getProduct };
