import React from 'react';
import './App.css';
import './styles/main.css';

import NavBar from './components/navigation';
import Section1 from './components/section1';

// import Button from './components/reusable/button'

function App() {
  return (
    <div>
      <NavBar />
      <Section1 />
      {/* <Button label="submit the form" text="" bg="softBlue"/> */}
    </div>
  );
}

export default App;
