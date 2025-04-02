import React from 'react'
import { Button } from "./components/ui/button"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/Landing'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/job-listing'
import PostJob from './pages/post-job'
import MyJobs from './pages/my-jobs'
import SavedJobs from './pages/saved-job'
import JobPage from './pages/job'
import { ThemeProvider } from './components/theme-provider'


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          
            <Onboarding />
        ),
      },
      {
        path: "/jobs",
        element: (
          
            <JobListing />
        ),
      },
      {
        path: "/post-job",
        element: (
          
            <PostJob />
        ),
      },
      {
        path: "/my-jobs",
        element: (
          
            <MyJobs />
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          
            <SavedJobs />
        ),
      },
      {
        path: "/job/:id",
        element: (
          
            <JobPage />
        ),
      },
    ],
  },
]);

const App = () => {
  return (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router}/>
  </ThemeProvider>   
  )
}

export default App