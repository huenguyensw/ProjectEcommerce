import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Products</Link>
      <Link to="/admin/manage-products">Admin</Link>
    </Nav>
  )
}

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 4rem;`;

export default Navigation
