import React from 'react'
import styled,{ keyframes }  from 'styled-components'
import image1 from '../../../assets/images/projects/20220520_110423-min.jpg'
import image2 from '../../../assets/images/projects/20210521_184512-min.jpg'
import image3 from '../../../assets/images/projects/20210429_153231-min.jpg'
import image4 from '../../../assets/images/projects/burta-min.jpg'



const Projects = () => {
  return (
    <ProjectsWrapper>
        <ProjectsTitle>
            Ostatnie Projekty
        </ProjectsTitle>
        <ProjectsList>
          <ProjectSingle bg={image1}>
             <ProjectTitle>
                Stolik
             </ProjectTitle>
          </ProjectSingle>
          <ProjectSingle bg={image2}>
             <ProjectTitle>
                Grill
             </ProjectTitle>
          </ProjectSingle>
          <ProjectSingle bg={image3}>
             <ProjectTitle>
                Wymiana podłogi
             </ProjectTitle>
          </ProjectSingle>
          <ProjectSingle bg={image4}>
             <ProjectTitle>
                Nowa burta
             </ProjectTitle>
          </ProjectSingle>
        </ProjectsList>
    </ProjectsWrapper>
  )
}

export default Projects

export const bgAnimation = keyframes`
  0% {
    background-position: center;
  }
  10%{
    background-position: left;
  }
  90%{
    background-position: right;
  }
  100% {
    background-position: center;
  }

`


export const ProjectsWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:80px 0;
`
export const ProjectsTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 50px;
`
export const ProjectsList = styled.ul`
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
`
export const ProjectSingle = styled.li`
  width: 200px;
  height: 300px;
  margin: 0 10px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center ;
  display: flex;
  align-items: flex-end;
  transition: 0.3s ease;
  &:hover{
    animation: ${bgAnimation} 4s ease-in-out;
  }
`
export const ProjectTitle = styled.h3`
  text-align: center;
  padding:20px;
  font-size:16px;
  width: 100%;
  color:white;
  background-color: rgba(0,0,0,0.5);
`
export const ProjectDescription = styled.p`

`

