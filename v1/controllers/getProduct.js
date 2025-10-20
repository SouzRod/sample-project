import * as adapters from "../adapters/index.js";

export const getProduct = async (req, res) => {
  const product = await adapters.getProduct(req.query.id);
  res.code(200).send(product);
};
