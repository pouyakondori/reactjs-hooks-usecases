import React from 'react'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import useRefExample from './pages/useREf/useRef'
import useReducerEx1Before from './pages/useReducerEx1/useReducerEx1Before'
import useReducerEx1 from './pages/useReducerEx1/useReducerEx1'
import useReducerEx2 from './pages/useReducerEx2/useReducerEx2'
import useMemoEx1 from './pages/useMemoEx1/useMemoEx1'
import useCallbackEx1 from './pages/useCallbackEx1/useCallbackEx1'
import useLocalStorageEx1 from './pages/useLocalStorageEx1/useLocalStorageEx1'
export default function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/useRef" component={useRefExample} />
          <Route path="/useReducerEx1Before" component={useReducerEx1Before} />
          <Route path="/useReducerEx1" component={useReducerEx1} />
          <Route path="/useReducerEx2" component={useReducerEx2} />
          <Route path="/useMemoEx1" component={useMemoEx1} />         
          <Route path="/useCallbackEx1" component={useCallbackEx1} />         
          <Route path="/useLocalStorageEx1" component={useLocalStorageEx1} />         
          </Switch>
      </div>
    </Router>
    </div>
  );
}