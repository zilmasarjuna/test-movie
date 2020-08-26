import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import List from 'containers/List'
import Detail from 'containers/Detail'

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback="Loading">
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/movie/:id" component={Detail} />
          </Switch>
         </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
