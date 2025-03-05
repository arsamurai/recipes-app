import { FC } from "react"

import { RecipeCard, RecipeEntity } from "@entities/recipe"

import { Typography } from "@shared/ui/typography"

import RemoveRecipeButton from "./remove-recipe-button"

const CartList: FC<{ recipes: RecipeEntity[] }> = ({ recipes }) => {
  return (
    <div className="space-y-4">
      <Typography variant="itemTitle" as="h3">
        Recipes:
      </Typography>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map(item => (
          <RecipeCard
            key={item.idMeal}
            idMeal={item.idMeal}
            strMealThumb={item.strMealThumb}
            strMeal={item.strMeal}
            strCategory={item.strCategory}
            strArea={item.strArea}
            action={<RemoveRecipeButton id={item.idMeal} />}
          />
        ))}
      </div>
    </div>
  )
}

export default CartList
