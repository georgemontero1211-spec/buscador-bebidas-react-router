import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponseSchema,
  SearchFiltersSchema,
} from "../utils/recipe-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFiltersSchema>;
export type Recipes = z.infer<typeof DrinksAPIResponseSchema>;
