const productTypes = `
  type Product {
    id: ID
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
    id: ID
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
    product: ProductInput
    requiredQuantity: Int
    sumProductInCart: Int
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
