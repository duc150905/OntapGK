import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [userID, setUserID] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      setError(null);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
        if (!res.ok) throw new Error("user not found");
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchdata();
  }, [userID]);
  return (
    <div>
      <input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {!error && data && (
        <div key={data.id}>
          <p>{data.name}</p>
          <p>{data.phone}</p>
          <p>{data.website}</p>
        </div>
      )}
    </div>
  )
}

export default App
