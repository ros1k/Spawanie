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
  width: 1200px;
  left: calc(50% - 600px);
  top: 0;
  margin: 0 auto;

  height: ${props => props.isPageScrolled ? "75px" : "100px"};
  z-index: 9999;
  //border-bottom:1px solid #dddddd55;
  transition: 0.3s ease;
 
`
