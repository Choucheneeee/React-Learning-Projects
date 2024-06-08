import React, {useState} from 'react'

function Mycomp() {
    const [food,setFoods]=useState(["apple", "orange", "banana"])
    function handleAddFood(){
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFoods(f=>[...f,newFood])
    }
    function handleRemoveFood(index){
//parametre ignored
        setFoods(food.filter((_,i) => i!==index))
    }
    return (
    <div>
        <h2>List of Food</h2>
        <ul>
            {food.map((foods,index)=>
            <li key={index} onClick={()=>handleRemoveFood(index)}>
                
                {foods}</li>)}
        </ul>
        <input type='text' id="foodInput" placeholder='enter food name' />
        <button onClick={handleAddFood}>Add Food</button>
    
    
    </div>
  )
}

export default Mycomp