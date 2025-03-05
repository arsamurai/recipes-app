import { ReactNode, useEffect, useState } from "react"
import { StoreApi } from "zustand"

import { CartContext } from "./cart.context"
import { CartStore, cartStore } from "./cart.store"

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<StoreApi<CartStore>>(cartStore)

  useEffect(() => {
    const unsubscribe = cartStore.subscribe(() => setState(cartStore))
    return () => unsubscribe()
  }, [])

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>
}

export default CartProvider
