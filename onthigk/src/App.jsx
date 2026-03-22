import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
    }
    fetchdata();
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
