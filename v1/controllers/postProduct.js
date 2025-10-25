const adapters = require('../adapters');

async function postProduct(req, res) {
  await adapters.postProduct(req.body);
  res.code(201).send({
    message: 'Product created successfully',
  });
}

module.exports = { postProduct };
