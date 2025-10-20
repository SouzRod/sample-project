import * as adapters from "../adapters/index.js";

export const putProduct = async (req, res) => {
  const product = await adapters.putProduct(req.query.id, req.body);
  res.code(200).send(product);
};
