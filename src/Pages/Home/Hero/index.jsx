import React from 'react'
import styled from 'styled-components'
import { ThemeColors } from '../../../assets/styles/global'
import image from '../../../assets/images/welding-5milsec-70percent.webp' 


const Hero = () => {
  return (
    <HeroWrapper>
        <HeroContent>
            <HeroTitle> <span> Spawanie </span> MiG/MAG/TIG </HeroTitle>
            <HeroDesc>Potrzebujesz coś naprawić lub przerobić ze stali czarnej? </HeroDesc>
            <HeroDesc> A może masz pomysł na jakieś krzesło lub stół z ciekawym kształtem w stylu loft.</HeroDesc>
            <HeroDesc> Zapraszam do kontaktu. </HeroDesc>
        </HeroContent>
        { <HeroImage src={image} alt="welding" /> }
    </HeroWrapper>
  )
}

export default Hero

export const HeroWrapper = styled.div`
    clip-path: polygon(0 0, 100% 0%, 100% 80%, 0% 100%);
    min-height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    z-index: -1;
    &:after{
        content:"";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: -1;
    }
    
`


export const HeroImage = styled.img`
    position: absolute;
    left:0;
    top:0;
    z-index: -1;
    width: 100%;
    height: 100%;
  
`

export const HeroContent = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    z-index: 1;
    color:white;
    display: flex;
    flex-direction: column;
    width: 1200px;
    min-height: 200px;
    margin: 0 auto;


`
export const HeroTitle = styled.h1`
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    color: ${ThemeColors.Orange};
    span{
        text-transform: capitalize;
        margin-left: -80px;
        font-weight: 300;
        color:white;
    }
`
export const HeroDesc = styled.p`
    font-size:17px;


`