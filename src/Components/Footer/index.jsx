import { ThemeColors, SecondaryColors } from '../../assets/styles/global'
import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <PageFooter id='footer'>
        <FooterLogo>
            <Logo/>
        </FooterLogo>
        <FooterContent>
            <FooterText>
            <img src="https://img.icons8.com/ios/50/000000/address--v1.png" alt='Google map icon'/>
            <FooterLink to="https://goo.gl/maps/e3cPvBv5a4H5r8xq7"> Atalin 34a, 26-700</FooterLink> 
                </FooterText>
            <FooterText>
                <img src="https://img.icons8.com/ios/50/000000/phone.png" alt='Phone icon'/>
                515 553 646
                </FooterText>
        </FooterContent>
 
        
    </PageFooter>
  )
}

export default Footer

export const PageFooter = styled.footer`
    background-color:${SecondaryColors.Gray};
    display: flex;
    padding: 25px;
    flex-direction: row;
    justify-content: space-between;
`
export const FooterLogo = styled.div``
export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`
export const FooterText = styled.p`
    margin-bottom:10px;
    color:white;
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        filter: invert(100%);
        height: 25px;
        width: 25px;
        margin-right: 10px;
    }
`
export const FooterMap = styled.div``
export const FooterLink = styled(Link)`
    color:white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
`