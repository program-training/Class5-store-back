export type ProductInterface = {
  id: number;
  name: string;
  salePrice: string;
  quantity: number;
  description: string;
  category: string;
  discountPercentage: number;
  imageUrl: string;
  imageAlt: string;
};

export type CheckQuantity = {
  productId: number;
  requiredQuantity: number;
};

export type NotInStock = {
  product: ProductInterface;
  requiredQuantity: number;
};
