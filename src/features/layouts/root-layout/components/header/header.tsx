import { Link } from "react-router-dom"

import { CartButton } from "@features/cart"

import { ROUTES } from "@shared/constants"
import { Typography } from "@shared/ui/typography"

const Header = () => {
  return (
    <div className="sticky top-0 left-0 z-10 border-b border-indigo-950 bg-blue-900 py-2">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to={ROUTES.ROOT.path}>
          <Typography as="h3" className="text-white">
            Resipes App
          </Typography>
        </Link>
        <CartButton />
      </div>
    </div>
  )
}
export default Header
