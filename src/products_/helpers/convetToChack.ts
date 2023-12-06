import ProductInterface from "../../products/interfaces/productInterface";

export type productToCheck = {
  product: ProductInterface;
  requiredQuantity: number;
  sumProductInCart: number;
};

export const convertToCheck = (cart: productToCheck[]) => {
  const converted = [
    {
      productId: cart[0].product.id,
      requiredQuantity: cart[0].requiredQuantity,
    },
  ];

  return converted;
};
