import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HeaderMain from './components/HomeMain/HeaderMain/HeaderMain';
import NotFound from './components/NotFound/NotFound';
import AppointmentMain from './components/Appointment/AppointmentMain/AppointmentMain';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HeaderMain />
        </Route>
        <Route path="/appointment">
          <AppointmentMain />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
