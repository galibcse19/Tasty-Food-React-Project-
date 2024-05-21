import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import ErrorPage from './Components/ErrorPage';
import Main from './Components/Main';
import AddFood from './Components/AddFood';
import Contact from './Components/Contact';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Card from './Components/Card';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
    {
      path:"/addFood",
      element:<AddFood></AddFood>,
    },
    {
      path:"/contact",
      element:<Contact></Contact>,
    },
    {
      path:'/signIn',
      element:<SignIn></SignIn>,
    },
    {
      path:'/signUp',
      element:<SignUp></SignUp>,
    },
     {
    path:'/card',
    element:<Card></Card>,
  }
  ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='bg-white'>
    <RouterProvider router={router} />
   </div>
  </React.StrictMode>,
)
