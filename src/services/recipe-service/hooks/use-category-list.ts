import { useQuery } from "@tanstack/react-query"

import { RecipeService } from "../recipe-service"

const categoriesListQueryCacheKey = "categories_list"

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: [categoriesListQueryCacheKey],
    queryFn: () => RecipeService.getCategoryList(),
    select: response => {
      return response.data.categories
    },
  })
}
