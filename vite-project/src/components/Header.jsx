import React from 'react'
import Navigation from './Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <Navigation />
            <section>
                <FontAwesomeIcon icon={faCartShopping} />
            </section>
        </div>
    )
}

export default Header
