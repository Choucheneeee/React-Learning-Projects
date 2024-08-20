import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clickcomp from './Clickcomp.jsx'
import Hovercomp from './Hovercomp.jsx'
function App() {
  
  useEffect(()=>{
    console.log("useeffect run ")
  },)
  const [count, setCount] = useState(0)

  return (
    <>
      <Clickcomp/>
      <Hovercomp/>

    </>
  )
}

export default App
