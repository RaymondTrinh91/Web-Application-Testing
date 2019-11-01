import { useState, useEffect } from 'react';


const useBaseballHook = (initial) => {
const [num, setNum] = useState(initial)

  // ==============Reset board&Fouls===================
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
  // ==============Reset board&Fouls===================

  //==============Methods===================
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
  //==============Methods===================

  return[num, increaseNum, hitBall]
}

export default useBaseballHook;