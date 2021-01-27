import React, {useState} from 'react'

export default function useReducerFunction() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount (prevCount => prevCount - 1)
    }

    return (
        <>
            <button onClick={decrement}> - </button>
            <span>{count}</span>
            <button onClick={increment}> + </button>
        </>
    )
}