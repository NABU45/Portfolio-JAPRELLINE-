import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path:"/Register",

    },
    {
      path:"/login",
    },
  ])
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
