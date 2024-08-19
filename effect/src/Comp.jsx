import React, { useState,useEffect } from 'react'

function Comp() {
    const [widht , setwidht]=useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(()=>{
        window.addEventListener("resize", handleResize );
    })
    function handleResize(){
        setwidht(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(
        <>
        <p>Window widht: {widht} px </p>
        <p>window height: {height} px </p>
        </>
    )
}

export default Comp

/*useeffect()=react hook that tells react to do this code when (pickone):
                this component re-render
                this component mounts 
                the state of a value
  useeffect(function,[dependencies])
  
  Uses:
  1-event listeners
  2-dom manipulation
  3-subscription(real-time updates)
  4-fetching data from api
  5-clean up when a component unlounts
                
                
                
                
                
                
                */