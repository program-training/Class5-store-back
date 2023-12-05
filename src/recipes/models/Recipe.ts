import { Schema, model } from "mongoose";

const string = {
  type: String,
  require: true,
  trim: true,
  lowercase: true,
  minLength: 2,
};

const IngredientSchema = new Schema({
  name: string,
  measure: string,
});

const RecipeSchema = new Schema({
  title: string,
  ingredients: {
    type: [IngredientSchema],
    require: true,
  },
  instructions: [string],
});

const Recipe = model("recipe", RecipeSchema);

export default Recipe;
