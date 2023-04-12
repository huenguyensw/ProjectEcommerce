import React from 'react'
import {Link} from 'react-router-dom'

const ManageProducts = () => {
  return (
    <div>
      <Link to='/admin/create-product'>Create Product</Link>
    </div>
  )
}

export default ManageProducts
