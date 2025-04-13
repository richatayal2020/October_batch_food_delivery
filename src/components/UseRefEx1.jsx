import React from 'react'
import { useRef } from 'react';

export const UseRefEx1 = () => {

    const inputRef = useRef(null) ;
    function focus (){
        inputRef.current.focus()
    }

    const h1Ref = useRef(null) ; 

    function colorProvider(){
        h1Ref.current.style.backgroundColor = 'lightgreen'
    }

  return (

    <div>
    <h1 ref={h1Ref}>hello world</h1>
    <br>

    </br>
        <input ref={inputRef} />
        <br></br>
        <button onClick={focus}>Focus on input</button>
        <br>

        </br>

        <button onClick={colorProvider}> bg color prvider </button>
        </div>
  )
}
