import React from 'react'

export default function HomePage() {
  return (
    <div className="App">
      <div>Check examples in /pages . If you are also interested to add more examples, please contribute on the code. thanks :)</div>
      <ul>
        <li><a href="/useRef" target="_blank">useRef example 1 - before editing and by using useState</a></li>
        <li><a href="/useReducerEx1Before" target="_blank">useReducer example 1 - after updates and using useReducer</a></li>
        <li><a href="/useReducerEx1" target="_blank">useReducer example 1 - after updates and using useReducer</a></li>        
        <li><a href="/useReducerEx2" target="_blank">useReducer example 2 - Todo List</a></li>
        <li><a href="/useMemoEx1" target="_blank">useMemo example 1 </a></li>
        <li><a href="/useCallbackEx1" target="_blank">useCallback example 1 </a></li>
        <li><a href="/useLocalStorageEx1" target="_blank">useLocalStorage example 1 </a></li>
      </ul>
    </div>
  );
}