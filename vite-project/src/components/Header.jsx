import React from 'react'
import Navigation from './Navigation'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styled from "styled-components"



const Header = ({ itemCount, handleToggle }) => {

  return (
    <HeaderSection>
      <Navigation />
      <Button onClick={handleToggle}>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
      </Button>
    </HeaderSection>
  )
}

const Button = styled.button`
  border: none;
  background-color: unset;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin:0;
`;



export default Header
