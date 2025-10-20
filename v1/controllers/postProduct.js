import * as adapters from "../adapters/index.js";

export const postProduct = async (req, res) => {
  await adapters.postProduct(req.body);
  res.code(201).send({
    message: "Product created successfully",
  });
};