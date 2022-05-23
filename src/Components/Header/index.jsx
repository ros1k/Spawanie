import React, { useEffect } from 'react'
import Logo from '../Logo'
import Navigation from '../Navigation'
import styled from 'styled-components'


const Header = ({isPageScrolled}) => {

  useEffect(() => {
    console.log(isPageScrolled);
  }, [isPageScrolled])


  return (
    <HeaderWrapper isPageScrolled={isPageScrolled}>
        <Logo isPageScrolled={isPageScrolled} />
        <Navigation isPageScrolled={isPageScrolled} />
    </HeaderWrapper>
  )
}

export default Header

export const HeaderWrapper = styled.header`
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.isPageScrolled ? "75px" : "100px"};
  z-index: 999;
  border-bottom:1px solid #dddddd55;
  transition: 0.3s ease;
 
`
