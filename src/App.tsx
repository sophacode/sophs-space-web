import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)

  // Load initial count from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('global-counter')
    if (stored) {
      setCount(parseInt(stored, 10))
    }
  }, [])

  const incrementCount = () => {
    const newCount = count + 1
    setCount(newCount)
    localStorage.setItem('global-counter', newCount.toString())
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-left">
          <h2>Sophs.Space</h2>
        </div>
        <div className="nav-right">
          <button className="nav-button">Home</button>
          <button className="nav-button">Projects</button>
          <button className="nav-button">Blog</button>
          <button className="nav-button">Socials</button>
        </div>
      </nav>
      
      <main className="main-content">
        <h1> Hi, It's Me, Soph! This is my website, 
          and it's a work in progress...</h1>
        <div className="counter-section">
          <h1>Global Visitor Counter</h1>
          <button 
            className="counter-button" 
            onClick={incrementCount}
            disabled={loading}
          >
            {loading ? 'Loading...' : `Count: ${count}`}
          </button>
          <p className="counter-description">
            This count syncs across all visitors!
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
