import React from 'react';
import {useEffect, useState} from 'react';
import './style.css';

function useCounter(initalValue) {
    const [value, setValue] = useState(0);

        useEffect(() => {
            fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
                .then(res => res.text())
                .then(res => setValue(+res))
                .catch(err => console.log(err));


        }, [])

     const incCounter = () => {
        if (value < 50) {
          setValue(value => value + 1)
        }
            }
      const decCounter = () => {
        if (value > -50) {
          setValue(value => value - 1)
        }
      }
      const rndCounter = () => {
        setValue(+(Math.random() * (50 - -50) + -50).toFixed(0))
      }

      const resetCounter = () => {
        setValue(initalValue)
      }



    return { value, incCounter, decCounter, rndCounter, resetCounter }
  }

  const Counter = () => {
      const {value, incCounter, decCounter, rndCounter, resetCounter} = useCounter(0);

      return (
        <div className="component">
          <div className="counter">{value}</div>
          <div className="controls">
            <button onClick={incCounter}>INC</button>
            <button onClick={decCounter}>DEC</button>
            <button onClick={rndCounter}>RND</button>
            <button onClick={resetCounter}>RESET</button>
          </div>
        </div>
      )
  }

  const RndCounter = () => {
     const {value, rndCounter, resetCounter} = useCounter(0);
      return (
        <div className="component">
          <div className="counter">{value}</div>
          <div className="controls">
            <button onClick={rndCounter}>RND</button>
            <button onClick={resetCounter}>RESET</button>
          </div>
        </div>
      )
  }

  const App = () => {
      return (
          <div className="wrapper">
              <Counter counter={0}/>
              <RndCounter counter={5}/>
          </div>
      )
  }

export default App;
