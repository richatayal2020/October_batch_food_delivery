import React from 'react'
import { useRouteError } from 'react-router-dom'


export const Error = () => {
    const err = useRouteError() ; 
    console.log("ERROR IS",err) ;

  return (
    <div>
        <h1>OOPS !!</h1>
        <h2>something went wrong </h2>
        <h3>{err.status} {err.statusText}</h3>

    </div>
  )
}
