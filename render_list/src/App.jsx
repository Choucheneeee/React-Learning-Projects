import { useState } from 'react'
import List from './List'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const fruits= [
    {id:1 ,name:"apple",calories:55},
    {id:2 ,name:"orange",calories:164},
    {id:3 ,name:"banana",calories:47},
    {id:4 ,name:"coconut",calories:63},
    {id:5 ,name:"pinapple",calories:73}]
  const animals= [
      {id:1 ,name:"Dog",calories:55},
      {id:2 ,name:"cat",calories:164},
      {id:3 ,name:"racoun",calories:47},
      {id:4 ,name:"arneb",calories:63},
      {id:5 ,name:"chat",calories:73}]


  return (
  <>
      {fruits.length >0 && <List items={fruits} category="Fruits"/>}
      {animals.length>0 && <List items={animals} category="animals"/>}

  </>);

}

export default App
