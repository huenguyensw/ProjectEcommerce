import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='body'>
      <Header/>
      <section>
        <Outlet />
      </section>
      <Footer/>
    </div>
  )
}

export default Root
