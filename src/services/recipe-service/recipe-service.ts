import { publicApi } from "@services/api"

import { CategoryListResponse, RecipeListResponse } from "./recipe-service.types"

export class RecipeService {
  static getRecipeList = (query?: string) => {
    return publicApi.get<RecipeListResponse>(`/search.php?s=${query ?? ""}`)
  }

  static getRecipe = (id: number) => {
    return publicApi.get<RecipeListResponse>(`lookup.php?i=${id}`)
  }

  static getCategoryList = () => {
    return publicApi.get<CategoryListResponse>("/categories.php")
  }
}
