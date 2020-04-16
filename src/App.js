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
import Dashboard from './Component/Doctor/Dashboard/Dashboard';
import SideBar from './Component/Doctor/SideBar/SideBar';
import Appointments from './Component/Doctor/Appointments/Appointments';
import Patients from './Component/Doctor/Patients/Patients';
import Prescriptions from './Component/Doctor/Prescriptions/Prescriptions';

function App() {
  const [disease, setDisease] = useState([]);
  const handleDisease = data => {
    setDisease(data)
  }

  return (
      <div>
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
               
            <Route path='/appointment'>
              <Header></Header>
              <Appointment disease={disease}  handleDisease={handleDisease}></Appointment>
            </Route>
            <Route path="/doctor/dashboard">
              <SideBar></SideBar>
              <Dashboard></Dashboard>
            </Route>
            <Route path="/doctor/appointments">
              <SideBar></SideBar>
              <Appointments></Appointments>
            </Route>
            <Route path="/doctor/patients">
              <SideBar></SideBar>
              <Patients></Patients>
            </Route>
            <Route path="/doctor/prescriptions">
              <SideBar></SideBar>
              <Prescriptions></Prescriptions>
            </Route>
            <Route path="/doctor">
              <SideBar></SideBar>
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
