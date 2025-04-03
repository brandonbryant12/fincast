import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Button } from '@repo/ui'


function Home() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Home Page</h2>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => console.log('Hello World')}
      >
        Log Hello World
      </button>
    </div>
  )
}

function About() {
  return <h2 className="text-4xl font-bold">About Page</h2>
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