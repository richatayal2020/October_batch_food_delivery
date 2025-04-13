import React, { useState } from 'react'
import { useRef } from 'react';
export const UseRef = () => {
    const [counterImp , setCounter] = useState(0) ;

    const counternotimp = useRef(0) 

    
    function fun (){
        counternotimp.current = counternotimp.current + 1 ; 
        console.log(counternotimp.current)
        console.log(counternotimp)
    }
  return (
    <div>
        <button onClick={()=> {setCounter(counterImp + 1)}}> imp  </button>
        <h1>{counterImp}</h1>
        <button onClick={fun}> not imp  button</button>
        <h1>{counternotimp.current}</h1>
    </div>
  )
}
