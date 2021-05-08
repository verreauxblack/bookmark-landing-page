import React from 'react';
import './App.css';
import './styles/main.css';

import NavBar from './components/navigation';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/Section3';

// import Button from './components/reusable/button'

function App() {
  return (
    <>
    <NavBar />
    <Section1 />
    <Section2 /> 
    <Section3 /> 
    </>
  );
}

export default App;
