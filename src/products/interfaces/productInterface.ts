interface ProductInterface {
    _id: string;
    name: string;
    salePrice: number;
    quantity: number;
    description: string;
    category: string;
    discountPercentage: number;
    image: {
      url: string;
      alt: string;
    };
  }
  
  export default ProductInterface;
  