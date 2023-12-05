import ProductInterface from "../../products/interfaces/productInterface";

export type CheckQuantity = {
  productId: number;
  requiredQuantity: number;
};

export type NotInStock = {
  product: ProductInterface;
  requiredQuantity: number;
};
