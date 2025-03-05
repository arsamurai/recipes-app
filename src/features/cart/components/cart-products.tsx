import { FC } from "react"

import { RecipeEntity } from "@entities/recipe"

import { Typography } from "@shared/ui/typography"

const CartProducts: FC<{ recipes: RecipeEntity[] }> = ({ recipes }) => {
  const getProducts = () => {
    const products = new Set<string>()

    recipes.forEach(item => {
      return [...Array(20).keys()].map(i => {
        const itemInfo = item as unknown as Record<string, string | undefined>
        const ingredient = itemInfo?.[`strIngredient${i + 1}`]

        if (ingredient && !products.has(ingredient)) {
          products.add(ingredient)
        }
      })
    })

    return Array.from(products).join(", ")
  }

  const products = getProducts()

  return (
    <div className="space-y-4">
      <Typography variant="itemTitle" as="h3">
        Products:
      </Typography>
      <Typography>{products}</Typography>
    </div>
  )
}
export default CartProducts
