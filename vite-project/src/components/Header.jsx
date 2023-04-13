import React from 'react'
import Navigation from './Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Cart from './Cart'

const Header = () => {
    const [cart, setCart] = useState(false)

    const toggle = () => {
        setCart(!cart)
        console.log(cart)
    }

    return (
        <div className='header'>
            <Navigation />
            <section>
                <button onClick={toggle}><FontAwesomeIcon icon={faCartShopping}/></button>
                {cart ? <Cart />
                : ''}
            </section>
        </div>
    )
}

export default Header
