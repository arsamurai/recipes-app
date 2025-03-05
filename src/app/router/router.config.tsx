import { CartPage, MainPage, RecipePage } from "@pages"
import { Navigate, createBrowserRouter } from "react-router-dom"

import { RootLayout } from "@features/layouts"

import { ROUTES } from "@shared/constants"

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT.path,
    element: <RootLayout />,
    errorElement: <Navigate to={ROUTES.ROOT.path} replace />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: ROUTES.RECIPE.path + "/:id",
        element: <RecipePage />,
      },
      {
        path: ROUTES.CART.path,
        element: <CartPage />,
      },
    ],
  },
])
