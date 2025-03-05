import { keepPreviousData, useQuery } from "@tanstack/react-query"

import { useDebounce } from "@shared/hooks"

import { RecipeService } from "../recipe-service"

export const recipeListQueryCacheKey = "recipe_list"

export const useRecipeListQuery = (query?: string) => {
  const searchQuery = useDebounce(query, 200)

  return useQuery({
    queryKey: [recipeListQueryCacheKey, searchQuery],
    queryFn: () => RecipeService.getRecipeList(searchQuery),
    placeholderData: keepPreviousData,
    select: response => {
      return response.data.meals
    },
  })
}
