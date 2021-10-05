import React from "react"
import styled from "styled-components"
import Constrain from "./Constrain"
import LogoImage from "../../images/Logo.svg"


const HeaderContainer = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey[0]};
  height: ${(props) => props.theme.layout.headerHeight};
  box-sizing: border-box;

  
`

const Logo = styled.img`
  width: 160px;
  margin-top: 12px;
  ${(props) => props.theme.query.lg} {
    padding-left: 12px;
  }
`

const Header = () => {
  return (
    <HeaderContainer >
      <Constrain>
        <Logo src={LogoImage} />
      </Constrain>
    </HeaderContainer>
  )
}

export default Header
