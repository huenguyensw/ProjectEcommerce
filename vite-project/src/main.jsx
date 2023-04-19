import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Products from './pages/Products'
import ManageProducts from './pages/admin/ManageProducts'
import UpdateProduct from './pages/admin/UpdateProduct'
import CreateProduct from './pages/admin/CreateProduct'
import Root from './pages/Root'
import Product from './pages/Product'
import Checkout from './pages/Checkout'


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
        path: "/products/:id",
        element: <Product/>
      },
      {
        path: "/admin/manage-products",
        element: <ManageProducts/>
      },
      {
        path: "/admin/update-product/:id",
        element: <UpdateProduct/>
      },
      {
        path: "/admin/create-product",
        element: <CreateProduct/>
      },
      {
        path: "/checkout",
        element: <Checkout/>
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
