import ProductInterface from "../interfaces/productInterface";

export type CheckQuantity = {
  productId: number;
  amount: number;
};

export type NotInStock = {
  product: ProductInterface;
  amountMissing: number;
};
