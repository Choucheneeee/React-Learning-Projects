import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomp from '../Mycomp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Mycomp/>
    </>
  )
}

export default App
