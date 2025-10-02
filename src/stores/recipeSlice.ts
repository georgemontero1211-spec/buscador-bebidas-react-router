import type { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeById,
  getRecipes,
} from "../services/RecipeService";
import type {
  Categories,
  Drink,
  Drinks,
  RecipeDrink,
  SearchFilter,
} from "../types";
import type { FavoriteSliceType } from "./favoritesSlice";

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: RecipeDrink;
  modal: boolean;
  fetchCategories: () => Promise<void>;
  searchRecipes: (filter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => void;
  closeModal: () => void;
};

export const createRecipesSlice: StateCreator<
  RecipeSliceType & FavoriteSliceType,
  [],
  [],
  RecipeSliceType
> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  selectedRecipe: {} as RecipeDrink,
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories });
  },
  searchRecipes: async (filter) => {
    const drinks = await getRecipes(filter);
    set({ drinks });
  },
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);
    set({ selectedRecipe: selectedRecipe.drinks[0], modal: true });
  },
  closeModal: () => set({ modal: false }),
});
