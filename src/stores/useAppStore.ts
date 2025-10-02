import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlice, type RecipeSliceType } from "./recipeSlice";
import { createFavoriteSlice, type FavoriteSliceType } from "./favoritesSlice";
import {
  createNotificationSlice,
  type NotificationSliceType,
} from "./notificationSlice";

export type AppStore = RecipeSliceType &
  FavoriteSliceType &
  NotificationSliceType;

export const useAppStore = create<AppStore>()(
  devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
  }))
);
