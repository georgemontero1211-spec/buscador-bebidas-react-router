import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinkAPIResponse,
  DrinksAPIResponseSchema,
  RecipeDrinkSchema,
  SearchFiltersSchema,
} from "../utils/schemas/recipe-schema";

export type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};

//types creados desde la validacion de zod
export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFiltersSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponseSchema>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
export type RecipeDrink = z.infer<typeof RecipeDrinkSchema>;
