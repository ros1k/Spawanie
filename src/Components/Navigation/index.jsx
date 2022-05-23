import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeColors } from '../../assets/styles/global'

const Navigation = () => {

    return (
    <NavigationWrapper>
        <NavigationList>
            <NavigationItem className="active" >
                <NavigationLink  to="/">Strona główna</NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink to="/projekty">Projekty</NavigationLink>
            </NavigationItem>
            <NavigationItem>
                <NavigationLink to="/kontakt">Kontakt</NavigationLink>
            </NavigationItem>
        </NavigationList>
        <NavigationQuoteButton>Napisz o wycene</NavigationQuoteButton>
    </NavigationWrapper>
  )
}

export default Navigation

export const NavigationWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    margin-left: 60px;

`
export const NavigationList = styled.ul`
    list-style:none;
    display:flex;
    flex-direction: row;

`
export const NavigationItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    height: 100%;
    position: relative;
    overflow: hidden;
    transition: 0.3s ease;
    &:before{
        content:"";
        position: absolute;
        bottom:0;
        left:0;
        width:100%;
        height:4px;
        transform-origin: right center;
        transform: scale(0,1);
        background-color: ${ThemeColors.Blue};
        opacity:1;
        transition: transform .25s cubic-bezier(.37,.31,.2,.85);
    }
    &:hover{
    &:before{
        transform: scale(1,1);
        transform-origin: left center;
        }
    }
    &.active {
        &:before{
            transform: scale(1,1);
        }
        a{
            color: ${ThemeColors.Blue};
        }
    }
`
export const NavigationLink = styled(Link)`
    color:white;
    text-decoration: none;
    transition: 0.3s ease;
    &:hover{
        color:${ThemeColors.BlueLight};
    }
`
export const NavigationQuoteButton = styled.button`
    margin-left: 100px;
    background-color:${ThemeColors.Blue};
    color:white;
    padding:15px 25px;
    border-radius: 5px;
    cursor: pointer;
    height: 60px;
    align-self: center;
    width: 180px;
    font-weight: 700;
    font-size:15px;
    transition: 0.3s ease;
    &:hover{
    background-color:${ThemeColors.BlueLight};
    }
`