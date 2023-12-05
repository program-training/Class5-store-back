const recipeTypes = `
type Ingredient {
    name: String
    measure: String
}

type Recipe {
    _id: ID
    title: String!
    ingredients: [Ingredient]
    instructions: [String]
}
`;

export const recipesTypeQueries = `
getRecipes: [Recipe]
getRecipe (id: ID!): Recipe
`;

export default recipeTypes;
