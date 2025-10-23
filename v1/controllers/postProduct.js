const adapters = require('../adapters');

const postProduct = async (req, res) => {
  await adapters.postProduct(req.body);
  res.code(201).send({
    message: 'Product created successfully',
  });
};

module.exports = { postProduct };
