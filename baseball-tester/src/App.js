import React from 'react';

import './App.css';
import Display from './Components/Display'
import Buttons from './Components/Buttons'
import useBaseballHook from './Hooks/Hooks'

function App() {
   const initialValues = {
    strikes: 0,
    ball: 0,
    foul: 0
  }
  
  const [num, increaseNum, hitBall] = useBaseballHook(initialValues)


  return (
    <div className="App">
      <header className="App-header">
        <h1>Baseball</h1>
      </header>
      <Display num={num} />
      <Buttons num={num} increaseNum={increaseNum} hitBall={hitBall} />
    </div>
  );
}

export default App;
