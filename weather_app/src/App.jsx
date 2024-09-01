import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import './css.scss'

import Search from './Search'
import { GalleryWithCarousel } from './GalleryWithCarousel'




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Search/>
    </>
  );
}


export default App
