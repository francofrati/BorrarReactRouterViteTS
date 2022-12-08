import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<><h1>Hola Mundo</h1><Link to='/about'>About</Link></>} />
        <Route path='/about' element={<><h2>About</h2><Link to='/'>Home</Link></>} />
      </Routes>
    </div>
  )
}

export default App
