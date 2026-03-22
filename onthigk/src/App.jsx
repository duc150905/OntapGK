import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      setError(null);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("API lỗi");
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    setTimeout(() => {
      fetchdata();
    }, 2000);

  }, [])
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1 style={{ color: "red" }}>{error.message}</h1>}
      {!loading && !error && data && (
        data.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        ))
      )}
    </>
  )
}

export default App
