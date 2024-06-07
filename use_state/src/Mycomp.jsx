
import React , {useState} from 'react' ;

function Mycomp() {

    const [name,setName]=useState("Guest");
    const [age,setage]=useState(0);
    const [isemployed,setisemployed]=useState(false);


    const updateName =()=>{
        setName("sidiiii");

}
    const incrementage =()=>{
    setage(age+1);

}
    const toggle =()=>{
        setisemployed(!isemployed);

}
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>age: {age}</p>
            <button onClick={incrementage}>Set age</button>
            <p>is employed : {isemployed ? "yes" :"noo "}</p>
            <button onClick={toggle}>Set age</button>
        </div>
    );
}

export default Mycomp