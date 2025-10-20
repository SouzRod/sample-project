import * as adapters from "../adapters/index.js";

export const deleteProduct = async (req, res) => {
  await adapters.deleteProduct(req.query.id);
  res.code(200).send({
    message: 'Product deleted successfully',
  });
};
