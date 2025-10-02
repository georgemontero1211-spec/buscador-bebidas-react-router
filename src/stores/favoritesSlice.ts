import type { StateCreator } from "zustand";
import type { RecipeDrink } from "../types";
import { type RecipeSliceType } from "./recipeSlice";
import type { NotificationSliceType } from "./notificationSlice";

export type FavoriteSliceType = {
  favorites: RecipeDrink[];
  handleClickFavorite: (recipe: RecipeDrink) => void;
  favoriteExists: (id: RecipeDrink["idDrink"]) => boolean;
  loadFromLocalStorage: () => void;
};

export const createFavoriteSlice: StateCreator<
  FavoriteSliceType & RecipeSliceType & NotificationSliceType,
  [],
  [],
  FavoriteSliceType
> = (set, get) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (
      get().favorites.some((favorite) => favorite.idDrink === recipe.idDrink)
    ) {
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      }));
      get().showNotification({ text: "Se elimino de favoritos", error: false });
    } else {
      set({ favorites: [...get().favorites, recipe] });
      get().showNotification({ text: "Se agrego a favoritos", error: false });
    }
    /**Vamos a consumir una funcion de otro slice(recipeSlice) desde este slice (favoritesSlice)
     * Esto nos puede servir cuando queramos cosumir variables o funciones de otro slice
     * Por ejemplo: Quiero consumir la funcion closeModal del recipeSlice
     */
    get().closeModal();
    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
  favoriteExists: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },
  loadFromLocalStorage: () => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      set({ favorites: JSON.parse(storedFavorites) });
    }
  },
});
