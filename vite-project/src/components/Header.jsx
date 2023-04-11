import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <Navigation />
            <section>
                <Outlet />
            </section>
            <section>
                <FontAwesomeIcon icon={faCartShopping} />
            </section>
        </div>
    )
}

export default Header
