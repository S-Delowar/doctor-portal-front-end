import React from 'react';
import './App.css';
import 'typeface-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Appointment from './Component/Appointment/Appointment';
import NotFound from './Component/NotFound/NotFound';
import Home from './Component/Home/Home';
import ReactCalendar from './Component/ReactCalendar/ReactCalendar';
import { useState } from 'react';
import Doctor from './Component/Doctor/Doctor';

function App() {
  const [disease, setDisease] = useState([]);
  const handleDisease = data => {
    setDisease(data)
  }

  return (
      <div className="container">
        <Router>
          <Switch>
          <Route exact path="/">
              <Header></Header>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Home></Home>
            </Route>
            <Route path="/doctor">
              <Header></Header>
              <Doctor></Doctor>
            </Route>
            <Route path='/appointment'>
              <Header></Header>
              <Appointment disease={disease}  handleDisease={handleDisease}></Appointment>
            </Route>
            <Route path="/calendar">
              <ReactCalendar></ReactCalendar>
            </Route>
            <Route path="*">
              <Header></Header>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
