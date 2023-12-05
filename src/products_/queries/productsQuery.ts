import {
  checkProductsInStock,
  getProduct,
  getProducts,
} from "../resolvers/productsResolver";

export const productsQueries = {
  getProducts,
  getProduct,
};
export const productsMutations = {
  checkProductsInStock,
};
