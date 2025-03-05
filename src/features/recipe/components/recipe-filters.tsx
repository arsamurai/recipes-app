import { useCategoriesQuery } from "@services/recipe-service"

import { Input } from "@shared/ui/input"
import { Select } from "@shared/ui/select"
import { Typography } from "@shared/ui/typography"

import { useRecipeFilters } from "../use-recipe-filters"

const RecipeFilters = () => {
  const { filters, onChangeParam } = useRecipeFilters()
  const { data } = useCategoriesQuery()

  const getCategoriesOptions = () => {
    return data?.map(item => ({ label: item.strCategory, value: item.strCategory }))
  }

  const categoriesOptions = getCategoriesOptions()

  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <Typography as="span">Search:</Typography>
        <Input
          value={filters.query ?? ""}
          onChange={e => {
            onChangeParam("query", e.target.value)
            onChangeParam("page", "1")
          }}
          className="w-60"
        />
      </div>
      <div className="flex items-center gap-2">
        <Typography as="span">Category:</Typography>
        <Select
          value={categoriesOptions?.find(item => item.value === filters.category)}
          onChange={options => {
            onChangeParam(
              "category",
              options.map(option => option.value),
            )
            onChangeParam("page", "1")
          }}
          options={categoriesOptions}
          isMulti
        />
      </div>
    </div>
  )
}
export default RecipeFilters
