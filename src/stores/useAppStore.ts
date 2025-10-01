import { create } from "zustand";
import { createRecipesSlice, type RecipeSliceType } from "./recipeSlice";

export const useAppStore = create<RecipeSliceType>((...a) => ({
  ...createRecipesSlice(...a),
}));
