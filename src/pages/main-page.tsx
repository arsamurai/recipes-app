import { RecipeList } from "@features/recipe"
import RecipeFilters from "@features/recipe/components/recipe-filters"

const MainPage = () => {
  return (
    <div className="w-full space-y-10">
      <RecipeFilters />
      <RecipeList />
    </div>
  )
}

export default MainPage
