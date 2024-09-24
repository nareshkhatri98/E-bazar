"use client";
import React from 'react'

const p2 = new Promise((resolve, reject) => {
    return resolve(123);
  });
  
  const promise = new Promise((resolve, reject) => {
    if (2 + 2 === 5) {
      return resolve("success");
    } else {
      return reject("Error");
    }
  });
  
  const checkSum = (number) => {
    return new Promise((resolve, reject) => {
      if (number % 2 === 0) {
        return resolve("Even");
      } else {
        return reject("Odd");
      }
    });
  };
const Async = () => {
    p2.then((val) =>{
    console.log(val)
  })
  setTimeout(() => {
    console.log("From timeout hello");
  }, 1000);

  promise
    .then((resolvedValue) => {
      console.log(resolvedValue);
    })
    .catch((rejectedValue) => {
      console.log(rejectedValue);
    });

  console.log("Hello 1");
  console.log("Hello 2");

  checkSum(11)
    .then((success) => {
      console.log(success);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log("Hello 3");



    return (
        <div>
            <h1>This is async </h1>
        </div>
    )
}

export default Async