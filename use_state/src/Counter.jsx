import React , {useState} from 'react' ;

function Counter() {

    const [count,setcount]=useState(0);
    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    const reset=()=>{
        setcount(0)
    }
    return(
        <div className='c-container'>
            <p className='c-display'>{count}</p>
            <button className='c-button-d' onClick={decrement}>decrement</button>
            <button className='c-button-r' onClick={reset}>reset</button>
            <button className='c-button-i' onClick={increment}>increment</button>

        </div>

    );
}

export default Counter