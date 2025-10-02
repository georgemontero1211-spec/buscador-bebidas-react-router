import type { SearchFilter } from "../types";
import { getFetch } from "../utils";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponseSchema,
} from "../utils/recipe-schema";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  const data = await getFetch(url, CategoriesAPIResponseSchema);

  return data;
}

export async function getRecipes(filters: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filters.ingredient}&c=${filters.category}`;
  const data = await getFetch(url, DrinksAPIResponseSchema);

  return data;
}
