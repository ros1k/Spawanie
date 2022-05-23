import React from 'react'
import styled from 'styled-components'
import image from '../../../assets/images/about-image.jpg'
import { ThemeColors } from '../../../assets/styles/global'
const About = () => {
  return (
    <AboutWrapper>
         <AboutImageWrapper>
             <div></div>
             <AboutImage src={image} alt=""/>
         </AboutImageWrapper>
         <AboutContent>
                <AboutTitle> <span> Usługi </span> spawalnicze </AboutTitle>
                <AboutSpan>O MNIE</AboutSpan>
                <AboutDesc>Potrzebujesz coś naprawić lub przerobić ze stali czarnej? </AboutDesc>
                <AboutDescLight>A może masz pomysł na jakieś krzesło lub stół z ciekawym kształtem w stylu loft.</AboutDescLight>
                <AboutDescLight>Zapraszam do kontaktu. </AboutDescLight>
         </AboutContent>
    </AboutWrapper>
  )
}

export default About


export const AboutWrapper = styled.div`
    width:1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: -100px;
    z-index: 10;
`
    
export const AboutImageWrapper = styled.div`
    width: 320px;
    height: 320px;
    position: relative;
    & > div{
        width: 100%;
        height: 100%;
        box-shadow: 11px 11px 6px 5px ${ThemeColors.Gray};
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
    }
    &:after{
        content:"";
        width: 50%;
        height: 80%;
        position: absolute;
        top: 35px;
        left: -25px;
        z-index: -1;
        background-color: ${ThemeColors.Orange};

    }
    &:before{
        content:"";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.2);
        
    }

`
export const AboutImage = styled.img`
   width:320px;
   height: 320px; 
`
export const AboutContent = styled.div`
    padding:50px 50px; 
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`
export const AboutTitle = styled.h2`
    text-transform: uppercase;
    margin-bottom: 42px;
    font-weight: 600;
    position: relative;
    &:before{
        content:"";
        width: 100%;
        height: 3px;
        background-color: ${ThemeColors.Orange};
        position: absolute;
        top: 40px;
        left: -190px;
        z-index: -1;

    }
`
export const AboutDesc = styled.p`
    max-width: 450px;
    margin-bottom: 10px;
`
export const AboutDescLight = styled(AboutDesc)`
    color: ${ThemeColors.Gray};
`
export const AboutSpan = styled.span`
    position: absolute;
    top:50px;
    right:60px;
    font-weight: 500;
    font-size:12px;
    transform: rotateZ(-90deg);
    letter-spacing: 3px;
    color: ${ThemeColors.Orange};
    &:before{
        content:"";
        width: 200%;
        height: 1px;
        position: absolute;
        top: 5px;
        left: 70px;
        
        background-color: ${ThemeColors.Orange};
    }
`