import React, { useEffect } from 'react'
import LogoImage from '../../assets/images/logo-biale.png'
import  styled  from 'styled-components'

const Logo = ({isPageScrolled}) => {

  useEffect(() => {
  }, [isPageScrolled])

  return (
    <LogoWrapper >
        <LogoIMG isPageScrolled={isPageScrolled} src={LogoImage} alt="Logo usługi spawalnicze" />
    </LogoWrapper>
  )
}

export default Logo

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding:15px;
    height: fit-content;
    min-width: 350px;
    position: relative;
`
export const LogoIMG = styled.img`
    display: inline-block;
    transition: width 0.3s ease;
    width: ${props => props.isPageScrolled ? "250px" : "350px"};
`