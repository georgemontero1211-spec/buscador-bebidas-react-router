import type { StateCreator } from "zustand";
import { getCategories, getRecipes } from "../services/RecipeService";
import type { Categories, Recipes, SearchFilter } from "../types";

export type RecipeSliceType = {
  categories: Categories;
  recipes: Recipes;
  fetchCategories: () => Promise<void>;
  searchRecipes: (filter: SearchFilter) => Promise<void>;
};

export const createRecipesSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  recipes: {
    drinks: [],
  },
  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories });
  },
  searchRecipes: async (filter) => {
    const recipes = await getRecipes(filter);
    set({ recipes });
  },
});
