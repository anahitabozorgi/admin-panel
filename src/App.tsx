import { useEffect, useState } from 'react'
import './assets/css/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import axios from 'axios'
import Index from './pages/Index'
import About from './pages/About'
// import uuid from 'uuid'

const roots = createBrowserRouter([
  {
    path: "/",
    element: <Index/>
  },
  {
    path: "/about",
    element: <About/>
  }, 
  {
    path: "/user",
    element:<About/>
  }
]) 



function App() {




  return (
    <RouterProvider router={roots}/>
  )
}

export default App