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
      <PageHeader isPageScrolled={isPageScrolled}>
          <Logo isPageScrolled={isPageScrolled} />
          <Navigation isPageScrolled={isPageScrolled} />
      </PageHeader>
    </HeaderWrapper>
  )
}

export default Header

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  width: 100%;
  transition: 0.3s ease;
  background-color: ${props => props.isPageScrolled ? '#000000c0' : 'transparent'};
`
export const PageHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 1200px;
  left: calc(50% - 600px);

  margin: 0 auto;

  height: ${props => props.isPageScrolled ? "75px" : "100px"};

  //border-bottom:1px solid #dddddd55;
  transition: 0.3s ease;
  
`
