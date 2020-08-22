import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from 'containers/Login'
import Register from 'containers/Register'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback="Loading">
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
         </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
