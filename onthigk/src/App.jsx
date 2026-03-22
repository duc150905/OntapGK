import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    }
    fetchdata();
  }, []);

  useEffect(() => {
    const result = data.filter((data) => data.title.toLowerCase().includes(search.toLowerCase()));
    setFilterData(result);
  }, [search]);
  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      {filterData.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default App
