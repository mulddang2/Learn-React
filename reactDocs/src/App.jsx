import './App.css';
import { useState } from "react"

import MyButton from './responding-to-events/MyButton';

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
  <>
    <h1>Counters that update separately</h1>
    <div><MyButton count={count} onClick={handleClick}/></div>
    <div><MyButton count={count} onClick={handleClick}/></div>
  </>
  )
  ;
}

export default App;
