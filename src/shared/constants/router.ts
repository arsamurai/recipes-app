interface HandleParams {
  authProtected?: boolean
}

export interface RouterParams {
  path: string
  handle?: HandleParams
}

export const ROUTES = {
  ROOT: {
    path: "/",
  },
  RECIPE: {
    path: "/recipe",
  },
  CART: {
    path: "/cart",
  },
} satisfies Record<string, RouterParams>
