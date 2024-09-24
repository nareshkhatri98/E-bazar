"use client";
import React, { useEffect } from 'react'


const checkEven = () => {
    return new Promise((resolve, reject) => {
        if (a % 2 === 0) {
            resolve("this is even number");
        }
        else {
            setTimeout(() => {
                reject("this is odd number");
            }, 2000);

        }
    });
}
checkEven(2);


const AsyncAwait = () => {
    const getValue = async () => {
        try {
            const value = await checkEven(3);
            console.log(value);

        } catch (err) {

        }
    }

    useEffect(() => {
        getValue();
    }, [])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default AsyncAwait