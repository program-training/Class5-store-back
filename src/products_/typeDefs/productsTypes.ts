const productTypes = `#graphql
  type Product {
    id: Int
    name: String
    salePrice: String
    quantity: Int
    description: String
    category: String
    discountPercentage: Int
    imageUrl: String
    imageAlt: String

  }
 

  input CheckQuantity {
    productId: Int
    requiredQuantity: Int
  }
  input ProductInput {
    id: Int
    name: String
    salePrice: String
    quantity: Int
    description: String
    category: String
    discountPercentage: Int
    imageUrl: String
    imageAlt: String
  
  }
  input ProductToCheck {
    productId: Int
    requiredQuantity: Int
  }

  type InStock {
    productId: Int
    requiredQuantity: Int
  }
  type NotInStock {
    product: Product
    requiredQuantity: Int
  }
  type Response {
    inStock: [InStock]!
    notInStock: [NotInStock]!
  }
`;

export const productsTypeQueries = `
  getProducts: [Product]
  getProduct(id:ID): Product

`;

export const productsTypeMutation = `
  checkProductsInStock(cart:[ProductToCheck!]): Response
  cancelProductsInStock(cart:[CheckQuantity!]): String!

`;

export default productTypes;
