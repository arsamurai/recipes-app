import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"

import { ROUTES } from "@shared/constants"
import { Button } from "@shared/ui/button"

import { useCartStore } from "../context/cart.context"

const CartButton = () => {
  const { recipes, isRecipes } = useCartStore(store => store)

  return (
    <Button variant="secondary" asChild>
      <Link to={ROUTES.CART.path} className="flex">
        <ShoppingCart />
        {isRecipes && <span className="-mt-2 -ml-1 text-xs">({recipes.length})</span>}
      </Link>
    </Button>
  )
}
export default CartButton
