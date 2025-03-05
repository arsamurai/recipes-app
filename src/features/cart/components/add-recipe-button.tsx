import { ShoppingBasket } from "lucide-react"
import { FC } from "react"

import { RecipeEntity } from "@entities/recipe"

import { Button } from "@shared/ui/button"

import { useCartStore } from "../context/cart.context"

const AddRecipeButton: FC<{ recipe: RecipeEntity }> = ({ recipe }) => {
  const addRecipe = useCartStore(store => store.addRecipe)

  const handleClick = () => {
    addRecipe(recipe)
  }

  return (
    <Button onClick={handleClick}>
      <ShoppingBasket />
      <span>Add to cart</span>
    </Button>
  )
}
export default AddRecipeButton
