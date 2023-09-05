import React, { ChangeEvent, useContext, useEffect, useRef, useState } from "react"
import { AuthContext, useAuth } from "../context/AuthContext";

export function AboutPage() {

    const intrevalId = useRef<NodeJS.Timer>();
    const inputRef = useRef<HTMLInputElement>(null);

    const { user } = useAuth();

 

    // useEffect(() => {
    //     intrevalId.current = setInterval(() => {
    //         console.log('Hello');
    //         setCounter(7);
    //     }, 2000);

    //     return () => {
    //         stopInterval();
    //     }
    // }, [])

    // const stopInterval = () => {
    //     clearInterval(intrevalId.current);
    // }

    // useEffect(() => {
    //     if (inputRef.current) {
    //         inputRef.current.focus();
    //         inputRef.current.offsetWidth;
    //     }
    // }, [])

    // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputText(event.target.value);
    // }

    return (
        <>
            <div>About</div>
            <div>user is {user}</div>
            {/* <button onClick={onClick}>
                Click
            </button>
            <div>{counter.current}</div> */}
            {/* <input
                ref={inputRef}
                type="text"
                placeholder="Enter Input:"
                value={inputText}
                onChange={onChange}
            /> */}
        </>
    )
}