import React, { useEffect,useState } from 'react'
import './App.css';

import Header from './Components/Header';



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
    </div>
  );
}

export default App;
