import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [])
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </>
  )
}

export default App
