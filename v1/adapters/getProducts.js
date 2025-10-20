import { product } from "../../repositories/index.js";

export const getProducts = async () => {
  return product.findMany({});
}