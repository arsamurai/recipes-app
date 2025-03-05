import { createStore } from "zustand"
import { persist } from "zustand/middleware"

import { RecipeEntity } from "@entities/recipe"

export interface CartStore {
  recipes: RecipeEntity[]
  isRecipes: boolean
  addRecipe: (recipe: RecipeEntity) => void
  removeRecipe: (id: string) => void
}

export const cartStore = createStore<CartStore>()(
  persist(
    (set, get) => ({
      recipes: [],
      isRecipes: false,
      addRecipe: (recipe: RecipeEntity) => {
        const { recipes } = get()
        const isAlreadyInCart = recipes.some(r => r.idMeal === recipe.idMeal)

        if (!isAlreadyInCart) {
          const newRecipes = [...recipes, recipe]
          set({ recipes: newRecipes, isRecipes: newRecipes.length > 0 })
        }
      },

      removeRecipe: (id: string) => {
        const { recipes } = get()
        const newRecipes = recipes.filter(r => r.idMeal !== id)

        set({ recipes: newRecipes, isRecipes: newRecipes.length > 0 })
      },
    }),
    {
      name: "cart-storage",
    },
  ),
)
