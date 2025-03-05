import { AddRecipeButton, RemoveRecipeButton, useCartStore } from "@features/cart"

import { useRecipeListQuery } from "@services/recipe-service"

import { RecipeCard } from "@entities/recipe"

import { cn } from "@shared/lib/css"
import { Loading } from "@shared/ui/loading"
import { Pagination } from "@shared/ui/pagination"
import { Typography } from "@shared/ui/typography"

import { useRecipeFilters } from "../use-recipe-filters"

const RecipeList = () => {
  const recipes = useCartStore(store => store.recipes)
  const { filters, onChangeParam } = useRecipeFilters()
  const { data, isLoading, isPlaceholderData } = useRecipeListQuery(filters.query)

  const startIndex = (Number(filters.page) - 1) * Number(filters.pageSize)
  const endIndex = startIndex + Number(filters.pageSize)
  const filteredData = data?.filter(
    item => !filters.category || filters.category.includes(item.strCategory),
  )
  const paginatedData = filteredData?.slice(startIndex, endIndex)
  const totalPages = filteredData?.length
    ? Math.ceil(filteredData?.length / Number(filters.pageSize))
    : 0
  const isPagination = totalPages > 1

  if (isLoading) {
    return <Loading />
  }

  if (!Array.isArray(data)) {
    return (
      <Typography as="h3" variant="itemTitle" className="my-16 text-center">
        Oops... Nothing found!
      </Typography>
    )
  }

  return (
    <>
      <div
        className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", {
          "cursor-wait opacity-50": isPlaceholderData,
        })}
      >
        {paginatedData?.map(item => {
          return (
            <RecipeCard
              key={item.idMeal}
              idMeal={item.idMeal}
              strMealThumb={item.strMealThumb}
              strMeal={item.strMeal}
              strCategory={item.strCategory}
              strArea={item.strArea}
              action={
                recipes.some(recipe => recipe.idMeal === item.idMeal) ? (
                  <RemoveRecipeButton id={item.idMeal} />
                ) : (
                  <AddRecipeButton recipe={item} />
                )
              }
            />
          )
        })}
      </div>
      {isPagination && (
        <Pagination
          totalPages={totalPages}
          currentPage={Number(filters.page)}
          onPageChange={(page: number) => {
            onChangeParam("page", page.toString())
          }}
        />
      )}
    </>
  )
}
export default RecipeList
