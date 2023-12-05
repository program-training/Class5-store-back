// import recipeTypes, {
//   recipesTypeQueries,
// } from "../recipes/typeDef/recipeTypes";
// import bookTypes, { booksTypeQueries } from "../books/typeDefs/booksTypes";
// import booksTypes from "../books/typeDefs/booksTypes";
import productTypes from "../products_/typeDefs/productsTypes";
import { productsTypeQueries } from "../products_/typeDefs/productsTypes";

const typeDefs = `#graphql   
    ${productTypes}
 
  
  type Query{
    ${productsTypeQueries}
  } 
`;

export default typeDefs;
