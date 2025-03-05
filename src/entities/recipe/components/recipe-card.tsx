import { FC } from "react"
import { Link } from "react-router-dom"

import { ROUTES } from "@shared/constants"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shared/ui/card"
import { Typography } from "@shared/ui/typography"

import { RecipeCardProps } from "../recipe.types"

const RecipeCard: FC<RecipeCardProps> = ({
  idMeal,
  strMealThumb,
  strMeal,
  strCategory,
  strArea,
  action,
}) => {
  return (
    <Card className="flex w-full max-w-72 flex-col justify-between justify-self-center">
      <CardHeader>
        <Link
          to={`${ROUTES.RECIPE.path}/${idMeal}`}
          className="transition-all hover:text-blue-700 hover:underline"
        >
          {strMealThumb ? (
            <img
              src={strMealThumb + "/preview"}
              alt="recipe-img"
              className="h-56 w-full rounded-xl object-cover"
            />
          ) : (
            <div className="h-56 w-full rounded-xl bg-slate-500">Image not found (</div>
          )}
        </Link>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>
          <Link
            to={`${ROUTES.RECIPE.path}/${idMeal}`}
            className="transition-all hover:text-blue-700 hover:underline"
          >
            {strMeal}
          </Link>
        </CardTitle>
        <CardDescription>
          <div className="flex w-full justify-between">
            <Typography variant="caption" as="span" className="font-bold">
              Category:
            </Typography>
            <Typography variant="caption" as="span">
              {strCategory}
            </Typography>
          </div>
          <div className="flex w-full justify-between">
            <Typography variant="caption" as="span" className="font-bold">
              Origin:
            </Typography>
            <Typography variant="caption" as="span">
              {strArea}
            </Typography>
          </div>
        </CardDescription>
      </CardContent>
      {action && <CardFooter className="justify-center">{action}</CardFooter>}
    </Card>
  )
}
export default RecipeCard
