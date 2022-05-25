import React from 'react'
import styled from 'styled-components'

import bgImage from '../../../assets/images/welding3.jpg'

const Services = () => {
  return (
    <ServicesWrapper>
        <ServicesLeft>
                <ServicesList>
                    <ServicesListItem>
                      <ServicesIcon>

                      </ServicesIcon>
                      <ServicesListItemDescription>
                          <ServicesTitle> Lorem ipsum dolor sit, </ServicesTitle>
                          <ServicesDescription>wise is one of the worlds leading managment consulting firms</ServicesDescription>
                      </ServicesListItemDescription>
                    </ServicesListItem>
                    <ServicesListItem>
                      <ServicesIcon>

                      </ServicesIcon>
                      <ServicesListItemDescription>
                          <ServicesTitle> Lorem ipsum dolor sit,</ServicesTitle>
                          <ServicesDescription>wise is one of the worlds leading managment consulting firms</ServicesDescription>
                      </ServicesListItemDescription>
                    </ServicesListItem>
                    <ServicesListItem>
                      <ServicesIcon>

                      </ServicesIcon>
                      <ServicesListItemDescription>
                          <ServicesTitle> Lorem ipsum dolor sit,</ServicesTitle>
                          <ServicesDescription>wise is one of the worlds leading managment consulting firms</ServicesDescription>
                      </ServicesListItemDescription>
                    </ServicesListItem>
                </ServicesList>
        </ServicesLeft>
        <ServicesPosts>
          <ServicesPostsTitle>
            Newsy i ogłoszenia
            </ServicesPostsTitle>
            <ServicesPost>
              <ServicesPostTitle>
                Nowe zlecenia
              </ServicesPostTitle>
              <ServicesPostDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServicesPostDescription>
            </ServicesPost>
            <ServicesPost>
              <ServicesPostTitle>
                Nowe zlecenia
              </ServicesPostTitle>
              <ServicesPostDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </ServicesPostDescription>
          </ServicesPost>
        </ServicesPosts>
    </ServicesWrapper>
  )
}

export default Services

export const ServicesWrapper = styled.div`
  max-width:1200px;
  margin:0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding:100px 0;
`
export const ServicesLeft = styled.div`
  padding: 25px;
  position: relative;
  color:white;
  display: flex;
  width: 33%;
  margin-left: 40px;
  &:before{
    content:"";
    display:block;
    width:2000px;
    height:120%;
    background-color:#36373B;
    position:absolute;
    top:-10%;
    right:-50px;
    z-index: -1;
  }
`
export const ServicesList = styled.ul`
  list-style:none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;

  
`
export const ServicesListItem = styled.li`
  margin-bottom: 30px;
  max-width: 250px;
  &:last-child{
    margin-bottom: 0px;
  }
  
`
export const ServicesIcon = styled.div``
export const ServicesListItemDescription = styled.div``
export const ServicesTitle = styled.h3`
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 15px;
`
export const ServicesDescription = styled.p`
  font-size: 12px;
`
export const ServicesPosts = styled.div`

  border: 4px solid white;
  width: 33%;
  display: flex;
  position: relative;        
  color: white;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding:60px 30px 60px 100px;
  width: 280px;
  height: 200px;
  &:before{
    content:"";
    position: absolute;
    top:-30%;
    left:40px;
    width:1000px;
    height:160%;
    background-position: bottom center;
    background-image: url(${bgImage});
    background-size: cover;
    z-index: -1;
  }
  &:after{
    content:"";
    position: absolute;
    top:-30%;
    left:40px;
    width:1000px;
    height:160%;
    background-color: #FF6F3A;
    z-index: -1;
    opacity:0.75;
  }
`
export const ServicesPostsTitle = styled.h3`
  margin-bottom: 25px;
  text-transform: uppercase;
  font-size: 23px;
  font-weight: 600;
`
export const ServicesPost = styled.div`
  margin-bottom: 25px;
`
export const ServicesPostTitle = styled.h3`
  font-weight: 400;
  margin-bottom: 5px;
`
export const ServicesPostDescription = styled.p`
  color:black;
  font-weight: 300;
`