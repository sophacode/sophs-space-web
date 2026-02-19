import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
          <img src="/nobgdark.svg" alt="Sophs.Space" className="nav-logo" />
        </div>
        <div className="nav-right">
          <a href="/" className="nav-button">Home</a>
          <a href="/projects/" className="nav-button">Projects</a>
          <a href="/blog/" className="nav-button">Blog</a>
        </div>
      </nav>
      <main className="main-content">
        <h2> Hi, I'm Soph! This is my website, 
          and it's a work in progress...</h2>
        <div className="counter-section">
          <h1>Global Visitor Counter</h1>
          <button 
            className="counter-button" 
            onClick={incrementCount}
          >
            Count: {count}
          </button>
          <p className="counter-description">
            This count will sync across all visitors soon..
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
