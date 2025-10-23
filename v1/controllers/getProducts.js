const adapters = require('../adapters');

const getProducts = async (req, res) => {
  const products = await adapters.getProducts();
  res.code(200).send(products);
};

module.exports = { getProducts };
