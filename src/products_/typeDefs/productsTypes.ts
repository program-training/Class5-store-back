const productTypes = `
  type Product {
    id: ID
    name: String
    salePrice: Int
    quantity: Int
    description: String
    category: String
    discountPercentage: Int
    imageUrl: String
    imageAlt: String
  }
`;

export const productsTypeQueries = `
  getProducts:[Product]
  getProduct(id:ID):Product

`;

export default productTypes;
