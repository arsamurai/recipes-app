import { CircleX } from "lucide-react"
import { FC } from "react"

import { Button } from "@shared/ui/button"

import { useCartStore } from "../context/cart.context"

const RemoveRecipeButton: FC<{ id: string }> = ({ id }) => {
  const removeRecipe = useCartStore(store => store.removeRecipe)

  const handleClick = () => {
    removeRecipe(id)
  }

  return (
    <Button variant="secondary" onClick={handleClick}>
      <CircleX />
      <span>Remove from cart</span>
    </Button>
  )
}
export default RemoveRecipeButton
