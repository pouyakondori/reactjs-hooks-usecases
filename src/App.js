import React from 'react'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import useReducerExample1 from './pages/useReducer1/useReducerBefore'
import useReducerExample2 from './pages/useReducer1/useReducer'

import useRefExample from './pages/useRef'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/useReducer1" component={useReducerExample1} />
          <Route path="/useReducer2" component={useReducerExample2} />
          <Route path="/useRef" component={useRefExample} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}