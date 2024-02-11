import React from 'react'
import { useState } from 'react'

const Count = () => {
    const [count,setCount]=useState(0)

    const incrementHandler=()=>{
        setCount(count+1)
    }

    const decrementHandler=()=>{
        setCount(count-1)
    }
    console.log(count)
  return (
    <>
    <h3>
    <button onClick={incrementHandler}>+</button>
    <span>{count}</span>
    <button onClick={decrementHandler}>-</button>
    </h3>
    </>
  )
}

export default Count