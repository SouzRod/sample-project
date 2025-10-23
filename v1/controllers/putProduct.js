const adapters = require('../adapters');

const putProduct = async (req, res) => {
  const product = await adapters.putProduct(req.query.id, req.body);
  res.code(200).send(product);
};

module.exports = { putProduct };
