import React,{useState} from 'react'

function Mycomp() {
    const [car,setCar]=useState({year:2018,
        make:"Jeep",
        model:"Wrangler"})
    function handelYearChange(event){
        setCar(c => ({...car , year:event.target.value}))
        

    }
    function handelMakeChange(event){
        setCar(c => ({...car , make:event.target.value}))

        
    }
    function handelModelChange(event){
        setCar(c => ({...car , model:event.target.value}))

        
    }
  return (
     <div>
        <p>Your favourite car is : {car.year} {car.make} {car.model} </p>
        <input type='number' onChange={handelYearChange} value={car.year}/><br/>
        <input type='text' onChange={handelMakeChange} value={car.make}/><br/>
        <input type='text' onChange={handelModelChange} value={car.model}/><br/>

     </div>
  )
}

export default Mycomp