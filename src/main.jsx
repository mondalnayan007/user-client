import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.jsx'
import UserDetails from './Components/UserDetails.jsx';
import UpdateUser from './Components/UpdateUser.jsx'
import UpdateProduct from './Components/UpdateProduct.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
   
  },
  {
    path:'/users/:id',
    loader : ({params})=>fetch(`http://localhost:4000/users/${params.id}`),
    Component: UserDetails
  },
  {
    path:'/update/:id',
    loader : ({params})=>fetch(`http://localhost:4000/users/${params.id}`),
    Component: UpdateUser 

  },
  {
    path:'/update-product/:id',
    loader :({params})=>fetch(`http://localhost:4000/products/${params.id}`),
    Component: UpdateProduct

  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
