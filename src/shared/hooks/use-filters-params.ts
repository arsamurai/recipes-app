import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"

export const useFiltersParams = <T>(validKeys: (keyof T)[]) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const filters: { [key: string]: string } = Object.fromEntries(searchParams.entries())

  const cleanedFilters: Partial<T> = {}

  for (const key in filters) {
    if (validKeys.includes(key as keyof T)) {
      cleanedFilters[key as keyof T] = filters[key] as T[keyof T]
    }
  }

  const handleParams = useCallback(
    (key: string, value: string | string[]) => {
      const paramValue = Array.isArray(value) ? value.join(",") : value

      if (searchParams.has(key, paramValue)) {
        return
      }

      if (paramValue) {
        searchParams.set(key, paramValue)
      } else {
        searchParams.delete(key)
      }
      setSearchParams(searchParams)
    },
    [setSearchParams, searchParams],
  )

  return {
    filters: cleanedFilters,
    onChangeParam: handleParams,
  }
}
