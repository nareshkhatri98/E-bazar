"use client";
import React from 'react'
import Demo from './Demo'
import Async from './async'
import AsyncAwait from './asyncAwait'
import ProductList from './productList';

const Page = () => {
  return (
    <div>
        <h1 className='text-display-01'>This is about Page</h1>
        <AsyncAwait />
        <Demo />
        <Async />
        <ProductList />
        
    </div>
  )
}

export default Page