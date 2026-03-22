import { useState, useEffect, useRef } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  return (
    <div>
      <p>state:{count}</p>
      <p>ref:{countRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Count+1</button>
      <button onClick={() => {
        countRef.current++;
        console.log(countRef.current);
      }}>ref+1</button>
    </div>
  )
}

export default App
