import React, { useEffect, useState } from 'react'
import Header from './Header';

export const Counter = () => {

    const [counter , setCounter] = useState(0) ;

    // perform a task after component is rendered
    // useEffect( ()=>{
    //     console.log("useEffect called")
    // } , [] )


    // perform a task on state variable updation
    // useEffect( ()=>{
    //     console.log("useEffect called" )
    // } , [counter] )


    // perform a task once component is unmounted 
    useEffect(()=>{
        console.log("component is mounted ")
        return function () {
            console.log("unmounted") ;
        }
    } , [])




  return (
    <>
        {/* {console.log("Component rendered")} */}
        <button onClick={()=>{setCounter(counter+1)}}>+</button>
        <div>{counter}</div>
        <button onClick={()=>{setCounter(counter-1)}}>-</button>

    </>
  )
}
