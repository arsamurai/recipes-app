import { Outlet } from "react-router-dom"

import { CartProvider } from "@features/cart"

import { Header } from "./components/header"
import { ScrollToTop } from "./components/scroll-to-top"

const RootLayout = () => {
  return (
    <CartProvider>
      <div className="flex min-h-svh flex-col space-y-5 pb-10">
        <Header />
        <main className="container mx-auto flex flex-1">
          <Outlet />
        </main>
      </div>
      <ScrollToTop />
    </CartProvider>
  )
}

export default RootLayout
