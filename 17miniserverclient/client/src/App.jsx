import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {Toaster} from "react-hot-toast";

import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import RegisterProvider from './providers/RegisterProvider';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const router = createBrowserRouter([
    {
      path:"/Register",
       element:<RegistrationForm/>

    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/home",
      element: <Home/>
    },
  
    {
      path: "/",
      element: <ProtectedRoute />,
      children:[
        {
          path:"/home",
          element: <Home/>
        },
      ]
    }
  ])
  return (
    <div>
      <RegisterProvider>
        <RouterProvider  router={router} />
        <Toaster/>
      </RegisterProvider>
      {/* <Login/> */}
    </div>
  )
}

export default App;
