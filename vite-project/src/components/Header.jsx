import React from 'react'
import Navigation from './Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Cart from './Cart'

const Header = ({cart, toggle, insideCart}) => {

    return (
        <div className='header'>
            <Navigation />
            <section>
                <button className="cart-button" onClick={toggle} ><FontAwesomeIcon icon={faCartShopping}/></button>
                {cart ? <Cart insideCart={insideCart} onMouseLeave={toggle}/>
                : ''
                }
            </section>
        </div>
    )
}

export default Header
