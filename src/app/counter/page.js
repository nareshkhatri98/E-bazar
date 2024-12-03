"use client"
import { decrement, increment } from '@/Redux/counterSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'




const page = () => {
    const count  = useSelector((state) =>state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
        <h1 className='text-Heading-04'>Counter:{count} </h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())} className=' ml-10'>Decrement</button>
    </div>
  )
}

export default page