import { RecipeEntity } from "@entities/recipe"

//RESPONSES
export type RecipeListResponse = { meals: RecipeEntity[] }
export type CategoryListResponse = { categories: CategoryEntity[] }

// PARAMS
export type RecipeParams = {
  query?: string
  page?: string
  pageSize?: string
  category?: string
}

// TYPES
export interface CategoryEntity {
  idCategory: string
  strCategory: string
  strCategoryDescription: string
  strCategoryThumb: string
}
