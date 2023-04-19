import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/">Products</NavLink>
      <NavLink to="/admin/manage-products">Admin</NavLink>
    </Nav>
  )
}

const Nav = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;

const NavLink = styled(Link)`
  padding: 10px;
  margin-left: 20px;
  color: black;
  text-decoration: none;
  font-size: 15pt;

  &:hover {
    color: rgb(103, 163, 186);
  }
`;

export default Navigation
