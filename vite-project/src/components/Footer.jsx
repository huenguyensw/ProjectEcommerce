import React from 'react'
import CopyrightIcon from "@material-ui/icons/Copyright"
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterSection>
      Copyright <CopyrightIcon fontSize='small'/> 2023
    </FooterSection>
  )
}
const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-right: 10px;
  justify-content: end;
`;
export default Footer
