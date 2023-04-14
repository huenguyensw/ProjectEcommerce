import React from 'react'
import Navigation from './Navigation'

import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



const Header = ({ itemCount }) => {

  return (
    <div className='header'>
      <Navigation />
      <section>
        <div>
          <Badge color="secondary" badgeContent={itemCount}>
            <ShoppingCartIcon />{" "}
          </Badge>

          
        </div>

      </section>
    </div>
  )
}

export default Header
