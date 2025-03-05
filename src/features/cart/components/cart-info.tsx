import { BackButton } from "@features/back-button"

import { Typography } from "@shared/ui/typography"

import { useCartStore } from "../context/cart.context"
import CartInstructions from "./cart-instructions"
import CartList from "./cart-list"
import CartProducts from "./cart-products"

const CartInfo = () => {
  const { recipes, isRecipes } = useCartStore(store => store)

  return (
    <div className="space-y-5">
      <BackButton />
      {isRecipes ? (
        <>
          <CartList recipes={recipes} />
          <CartProducts recipes={recipes} />
          <CartInstructions recipes={recipes} />
        </>
      ) : (
        <Typography as="h3" variant="itemTitle" className="my-16 text-center">
          Cart is empty...
        </Typography>
      )}
    </div>
  )
}
export default CartInfo
