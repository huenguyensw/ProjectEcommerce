import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Products from './pages/Products'
import ManageProducts from './pages/admin/ManageProducts'
import UpdateProduct from './pages/admin/UpdateProduct'
import CreateProduct from './pages/admin/CreateProduct'
import Root from './pages/Root'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <Products/>
      },
      {
        path: "/admin/manage-products",
        element: <ManageProducts/>
      },
      {
        path: "/admin/update-product",
        element: <UpdateProduct/>
      },
      {
        path: "/admin/create-product",
        element: <CreateProduct/>
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
