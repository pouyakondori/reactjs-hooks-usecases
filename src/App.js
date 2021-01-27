import React from 'react'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import useRefExample from './pages/useREf/useRef'
import useReducerEx1Before from './pages/useReducerEx1/useReducerEx1Before'
import useReducerEx1 from './pages/useReducerEx1/useReducerEx1'
import useReducerEx2 from './pages/useReducerEx2/useReducerEx2'

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
        </Switch>
      </div>
    </Router>
    </div>
  );
}