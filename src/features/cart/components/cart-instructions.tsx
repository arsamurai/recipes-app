import { FC } from "react"

import { RecipeEntity } from "@entities/recipe"

import { Typography } from "@shared/ui/typography"

const CartInstructions: FC<{ recipes: RecipeEntity[] }> = ({ recipes }) => {
  return (
    <div className="space-y-4">
      <Typography variant="itemTitle" as="h3">
        Instructions:
      </Typography>
      <div className="space-y-4">
        {recipes.map(item => (
          <div key={item.idMeal} className="space-y-2">
            <Typography variant="pageSubtitle" as="h4">
              {item.strMeal}
            </Typography>
            <Typography>{item.strInstructions}</Typography>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CartInstructions
