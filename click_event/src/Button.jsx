import React from 'react'
    let count=0;

function Button() {

    const handleClick=(e)=>console.log(e)
   /* const handleClick=(name)=>{
        if (count<3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`)
        }
        else{
            console.log(`${name} stop clicking me `)

        }

    } */
  return (<button onClick={(e)=>handleClick(e)}>click </button>);

}

export default Button