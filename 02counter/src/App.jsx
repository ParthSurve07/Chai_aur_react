import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  function incVal() {
    // console.log("Value added", Math.random());  
    // counter += 1;  
    if(counter < 20) {
      setCounter(counter + 1);
    }
  }

  function decVal() {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>

      <button
        onClick={incVal}
      >Increase value</button>
      <br />
      <br />
      <button
        onClick={decVal}
      >Decrease value</button>
    </>
  )
}

export default App
