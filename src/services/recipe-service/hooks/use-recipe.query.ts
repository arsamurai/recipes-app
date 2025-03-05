import { useQuery } from "@tanstack/react-query"

import { RecipeService } from "../recipe-service"
import { recipeListQueryCacheKey } from "./use-recipe-list.query"

export const useRecipeQuery = (id: number) => {
  return useQuery({
    queryKey: [recipeListQueryCacheKey, id],
    queryFn: () => RecipeService.getRecipe(id),
    select: response => {
      return response.data.meals
    },
  })
}
