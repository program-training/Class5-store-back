import ProductInterface from "../interfaces/productInterface";

export type CheckQuantity = {
  productId: number;
  requiredQuantity: number;
};

export type NotInStock = {
  product: ProductInterface;
  requiredQuantity: number;
};
