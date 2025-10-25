const adapters = require('../adapters');

async function getProducts(req, res) {
  const products = await adapters.getProducts();
  res.code(200).send(products);
}

module.exports = { getProducts };
