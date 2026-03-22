import { useState, useEffect } from 'react'
import './App.css'
import data from '../data.json';
function App() {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>

  )
}

export default App
