import Recipe from "../models/Recipe";

export const getRecipes = async () => {
  try {
    const recipes = await Recipe.find({});
    return recipes;
  } catch (error) {
    console.log(error);
    return null;
  }
};

interface GetRecipeInterface {
  id: string;
}

export const getRecipe = async (_: any, { id }: GetRecipeInterface) => {
  try {
    const recipes = await Recipe.findById(id);
    return recipes;
  } catch (error) {
    console.log(error);
    return null;
  }
};
