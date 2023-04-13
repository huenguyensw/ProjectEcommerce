import React from 'react'
import Navigation from './Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Cart from './Cart'

const Header = () => {
    const showCart = () => {
    }


    return (
        <div className='header'>
            <Navigation />
            <section>
                <button onClick={showCart}><FontAwesomeIcon icon={faCartShopping}/></button>
            </section>
        </div>
    )
}

export default Header
