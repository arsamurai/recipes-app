import { useParams } from "react-router-dom"

import { BackButton } from "@features/back-button"
import { AddRecipeButton, RemoveRecipeButton, useCartStore } from "@features/cart"

import { useRecipeQuery } from "@services/recipe-service"

import { RecipeFull } from "@entities/recipe"

import { Loading } from "@shared/ui/loading"
import { Typography } from "@shared/ui/typography"

const RecipeInfo = () => {
  const { id } = useParams()
  const recipes = useCartStore(store => store.recipes)
  const { data, isLoading } = useRecipeQuery(Number(id))

  if (isLoading) {
    return <Loading />
  }

  if (!Array.isArray(data)) {
    return (
      <Typography as="h3" variant="itemTitle" className="my-16 text-center">
        This recipe does not exist
      </Typography>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-between">
        <BackButton title="Back to list" />
        {recipes.some(recipe => recipe.idMeal === data[0].idMeal) ? (
          <RemoveRecipeButton id={data[0].idMeal} />
        ) : (
          <AddRecipeButton recipe={data[0]} />
        )}
      </div>
      <RecipeFull recipe={data[0]} />
    </div>
  )
}

export default RecipeInfo
