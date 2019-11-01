import React, { useState, useEffect } from 'react';
import './App.css';
import Display from './Components/Display'
import Buttons from './Components/Buttons'

function App() {
  const [num, setNum] = useState({
    strikes: 0,
    ball: 0,
    foul: 0
  })

  useEffect(() => {
    setTimeout(() => {
      if (num.ball === 4 || num.strikes === 3) {
        setNum({ ball: 0, strikes: 0 })
      }
    }, 3500)
  }, [num])

  useEffect(() => {
    num.strikes < 2 && num.foul > 0
      ? setNum({ ...num, strikes: num.strikes + 1, foul: 0 })
      : setNum({ ...num, strikes: num.strikes, foul: 0 })
  }, [num.foul])

  const increaseNum = event => {
    event.preventDefault()
    if (num.strikes !== 3 && num.ball !== 4) {
      setNum({ ...num, [event.target.name]: Number(event.target.value) + 1 })
    }
  }

  const hitBall = event => {
    event.preventDefault();
    setNum({
      ball:0,
      strikes:0,
    })
  }

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
