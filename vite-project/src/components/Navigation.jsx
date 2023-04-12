import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='nav'>
      <Link to="/">Products</Link>
      <Link to="/admin/manage-products">Admin</Link>
      <Link to="/">UpdateProduct</Link>

    </nav>
  )
}

export default Navigation
