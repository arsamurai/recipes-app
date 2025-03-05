import { createContext, useContext } from "react"
import { StoreApi, useStore } from "zustand"

import { CartStore } from "./cart.store"

export const CartContext = createContext<StoreApi<CartStore> | null>(null)

export const useCartStore = <T>(selector: (state: CartStore) => T) => {
  const store = useContext(CartContext)
  if (!store) {
    throw new Error("Missing CartProvider")
  }
  return useStore(store, selector)
}
