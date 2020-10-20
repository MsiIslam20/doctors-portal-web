import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HeaderMain from './components/HomeMain/HeaderMain/HeaderMain';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HeaderMain />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
