import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.jsx'
import UserDetails from './Components/UserDetails.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
   
  },
  {
    path:'/users/:id',
    loader : ({params})=>fetch(`http://localhost:4000/users/${params.id}`),
    Component: UserDetails
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
