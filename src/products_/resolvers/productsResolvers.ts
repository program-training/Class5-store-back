import {
  cancelProductsInStock,
  checkProductsInStock,
  getProduct,
  getProducts,
  productCreated,
} from "../services/productsServices";

export const productsQueries = {
  getProducts,
  getProduct,
};
export const productsMutations = {
  checkProductsInStock,
  cancelProductsInStock,
};

export const productsSubscriptions = {
  productCreated,
};
