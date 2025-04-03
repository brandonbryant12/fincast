import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Button } from '@repo/ui'
import './index.css' // We'll create this later

// Basic route components (can be moved to separate files later)
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Button 
        onClick={() => console.log('Hello World')}
        variant="default"
      >
        Log Hello World
      </Button>
    </div>
  )
}

function About() {
  return <h2>About Page</h2>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
) 