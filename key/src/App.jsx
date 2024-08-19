  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'

  function App() {
    const people=["cha","reaed","omar" ,"kticha","baya"]
    return (
      <>
      {people.map((name,index,time)=>(
        <tr key={index}>{name} {time}</tr>
      ))}
      
      
      </>
    )
  }

  export default App
