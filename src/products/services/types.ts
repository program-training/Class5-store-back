import ProductInterface from "../interfaces/productInterface";

export type CheckQuantity = {
  productId: number;
  amount: number;
  ordered: number;
};

export type NotInStock = {
  product: ProductInterface;
  amountMissing: number;
  ordered: number;
};
