import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { FC, PropsWithChildren } from "react"

const handleServerError = (error: Error) => {
  if (error instanceof AxiosError && error?.response) {
    if (error.response.status >= 500) {
      alert("Ой! Щось пішло не так")
    }
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 3000,
    },
  },
  queryCache: new QueryCache({
    onError: handleServerError,
  }),
  mutationCache: new MutationCache({
    onError: handleServerError,
  }),
})

const QueryProvider: FC<PropsWithChildren> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default QueryProvider
