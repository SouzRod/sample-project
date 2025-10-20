import * as adapters from "../adapters/index.js";

export const getProducts = async (req, res) => {
  const products = await adapters.getProducts();
  res.code(200).send(products);
};
