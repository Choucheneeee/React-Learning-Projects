import React , {useState,useEffect} from 'react' ;

function Counter() {
    

    const [count,setcount]=useState(0);
    const [counter,setcounter]=useState(1);

    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    const reset=()=>{
        setcount(0)
    }
    const incrementc=()=>{
        setcounter(counter+1)
    }
    const decrementc=()=>{
        setcounter(counter-1)
    }
    const resetc=()=>{
        setcounter(0)
    }
    useEffect(()=>{
        console.log("useeffect run ")
      },[count])
    return(
        <div className='c-container'>
            <p className='c-display'>{count}</p>
            <p className='c-d'>{counter}</p>

            <button className='c-button-d' onClick={decrement}>decrement</button>
            <button className='c-button-r' onClick={reset}>reset</button>
            <button className='c-button-i' onClick={increment}>increment</button>
            <button className='c-button-d' onClick={decrementc}>decrement counter </button>
            <button className='c-button-r' onClick={resetc}>reset counter</button>
            <button className='c-button-i' onClick={incrementc}>increment counter </button>

        </div>

    );
}

export default Counter

/* this code is a counter i make it with useState  */
/* after i added a code to try useEffect and try the dependencies .when i let the count state in dependencies it the state  change the first render or when i change the 
state of  count .it is like a constraint to make useEffect work  */ 