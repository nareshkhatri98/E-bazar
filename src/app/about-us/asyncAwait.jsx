"use client";
import React, { useEffect } from 'react'



// checkEvenNo(2)
// .then((val) => {
//   console.log(val, " -> Success");
// })
// .catch((error) => {
//   console.log(error, " -> Failure");
// });

const checkEvenNo = (a) => {
    return new Promise((resolve, reject) => {
      if (a % 2 === 0) {
        setTimeout(() => {
          resolve("THis is even no");
        }, 2000);
      } else {
        setTimeout(() => {
          reject("THis is odd no");
        }, 2000);
      }
    });
  };


const AsyncAwait = () => {
    const getValue = async () => {
        try {
          const value = await checkEvenNo(3);
          console.log(value);
        } catch (err) {
          console.log("err", err);
        }
      };
    
      useEffect(() => {
        getValue();
      }, []);(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default AsyncAwait