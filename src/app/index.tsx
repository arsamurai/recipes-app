import { Suspense } from "react"

import { QueryProvider } from "./query"
import { Router } from "./router"

const App = () => {
  return (
    <QueryProvider>
      <Suspense>
        <Router />
      </Suspense>
    </QueryProvider>
  )
}
export default App
