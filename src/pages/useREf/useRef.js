/* Here we used useRef for storing the previous state of an input field. This is a simple example that shows how to store the previous state by using useRef
*/
import React, { useEffect, useRef, useState } from 'react'

function useRefExample() {
  const [name, setName] = useState('')
  const prevName = useRef('')

  useEffect(() => {
    prevName.current = name
  }, [name])
  return (
    <div className="useRefExample">
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>here is the current state: {name} and this is the previous state: {prevName.current}</div>
    </div>
  );
}

export default useRefExample;