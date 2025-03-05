import { RecipeParams } from "@services/recipe-service"

import { useFiltersParams } from "@shared/hooks"

export const useRecipeFilters = () => {
  const { filters, onChangeParam } = useFiltersParams<RecipeParams>([
    "query",
    "page",
    "pageSize",
    "category",
  ])

  return {
    filters: {
      ...filters,
      page: filters.page ?? "1",
      pageSize: filters.pageSize ?? "8",
    },
    onChangeParam,
  }
}
