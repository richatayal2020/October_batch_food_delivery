import React from 'react'

export const UserFunc = (props) => {
  return (
    <div className='border-black border-4 rounded-sm mt-5'>
    <h1 className='text-4xl strong '>About us page</h1> 
    <div>
    <h1>Name : {props.name}</h1>
    <h2>UserId : {"richatayal2020"}</h2>
    <h2>description : {"here you will find code related to react java js dsa and more...."}</h2>
    </div>
    </div>
  )
}
