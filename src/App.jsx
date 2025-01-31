// import { Analytics } from "@vercel/analytics/react"
// import ErrorElement from "./components/ErrorElement"
import ErrorPage from "./pages/ErrorPage"
import MainLayout from "./Layout/MainLayout"
import PageForHome from "./pages/PageForHome"
import JobsPage from './pages/JobsPage'
import AddJob from "./pages/AddJob"
import JobPage, { getEachJob } from "./pages/JobPage"

import {createBrowserRouter, RouterProvider, Route, createRoutesFromElements} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>} >
      <Route index element={<PageForHome/>} />
      <Route path="/jobs" element={<JobsPage/>} />
      <Route path="/jobs/:id" element={<JobPage/>} loader={getEachJob} />
      {/* <Analytics/> */}
      <Route path="/add-jobs" element={<AddJob/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router } />
    </>
  )
}

export default App