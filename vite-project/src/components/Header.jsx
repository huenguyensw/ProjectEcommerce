import React from 'react'
import Navigation from './Navigation'

import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



const Header = ({ itemCount, handleToggle }) => {

  return (
    <div className='header'>
      <Navigation />
      <section>
        <div>
          <button onClick={handleToggle}>
          <Badge color="secondary" badgeContent={itemCount}>
            <ShoppingCartIcon/>{" "}
          </Badge>
          </button>
        </div>

      </section>
    </div>
  )
}

export default Header
