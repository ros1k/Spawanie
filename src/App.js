import React, { useEffect,useState } from 'react'
import styled from 'styled-components'

import './App.css';

import Header from './Components/Header';
import Home from './Pages/Home';



function App() {
  const [isPageScrolled, setPageIsScrolled] = useState(false)
  const appRef = React.createRef()

  const isScrolling = (e) =>{
    if(window.pageYOffset === 0){
      setPageIsScrolled(false)
    }else{
      setPageIsScrolled(true)
    }
    }

    useEffect(() => {
      window.addEventListener('scroll', isScrolling);
    }, [isPageScrolled]);
  

  return (
    <div className="App" ref={appRef}>
      <Header isPageScrolled={isPageScrolled}/>
      <Main>
          <Home/>
      </Main>
    </div>
  );
}

export default App;

export const Main = styled.main`
  
`