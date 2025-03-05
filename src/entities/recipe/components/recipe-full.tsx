import { FC } from "react"

import { Typography } from "@shared/ui/typography"
import { YouTubeFrame } from "@shared/ui/youtube-frame"

import { RecipeEntity } from "../recipe.types"

const RecipeFull: FC<{ recipe: RecipeEntity }> = ({ recipe }) => {
  const { strMeal, strSource, strCategory, strArea, strMealThumb, strInstructions, strYoutube } =
    recipe

  return (
    <div className="space-y-5 sm:space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-5 sm:gap-10">
        <div className="flex gap-2">
          <Typography as="h1" variant="pageTitle">
            {strMeal}
          </Typography>
          <a href={strSource} target="_blank" className="mt-2 text-xs text-blue-800 underline">
            (resource)
          </a>
        </div>
        <div className="flex flex-wrap items-start gap-5 sm:gap-10">
          <div className="flex gap-2">
            <Typography as="span" className="font-bold">
              Category:
            </Typography>
            <Typography as="span">{strCategory}</Typography>
          </div>
          <div className="flex gap-2">
            <Typography as="span" className="font-bold">
              Origin:
            </Typography>
            <Typography as="span">{strArea}</Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 sm:gap-10 md:flex-row">
        <div className="h-80 md:sticky md:top-20 md:h-96 md:w-1/2">
          <div className="mx-auto size-full max-w-96 rounded-xl bg-slate-100 md:mx-0 md:max-w-none">
            {strMealThumb ? (
              <img
                src={strMealThumb}
                alt="recipe-img"
                className="size-full rounded-xl object-cover"
              />
            ) : (
              <div className="size-full rounded-xl bg-slate-500">Image not found (</div>
            )}
          </div>
        </div>
        <ul className="space-y-2 md:w-1/2">
          {[...Array(20).keys()].map(i => {
            const recipeInfo = recipe as unknown as Record<string, string | undefined>
            const ingredient = recipeInfo[`strIngredient${i + 1}`]
            const measure = recipeInfo[`strMeasure${i + 1}`]

            return ingredient ? (
              <li key={i} className="flex w-full justify-between gap-4">
                <Typography as="span">{ingredient}</Typography>
                <span className="flex-grow border-b border-dotted border-gray-400"></span>
                <Typography as="span">{measure}</Typography>
              </li>
            ) : null
          })}
        </ul>
      </div>
      <div className="space-y-2 sm:space-y-4">
        <Typography variant="itemTitle" as="h3">
          Instruction:
        </Typography>
        <Typography>{strInstructions}</Typography>
      </div>
      <div className="space-y-2 sm:space-y-4">
        <Typography variant="itemTitle" as="h3">
          YouTube video:
        </Typography>
        <YouTubeFrame url={strYoutube} />
      </div>
    </div>
  )
}
export default RecipeFull
