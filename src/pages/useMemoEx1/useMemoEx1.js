import React, {useState, useMemo, useEffect} from 'react'

export default function useMemoEx1() {
    const [number, setNumber ] = useState(0)
    const [ dark, setDark ] = useState(false)
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])
    const themeStyles = useMemo(()=> {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark]) 

   useEffect(() => {
       console.log('Theme Canged')
   }, [themeStyles]) 

    return (
        <div>
            <h1>useMemo Example</h1>
            <input type="number" value={number} 
                onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

function slowFunction(num) {
    console.log('Calling Slow Function')
    for(let i=0; i <= 1000000000 ; i++) {}
    return num * 2
}