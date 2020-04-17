import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import ReactCalendar from '../../ReactCalendar/ReactCalendar';
import SideBar from '../SideBar/SideBar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://thawing-hamlet-94010.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAppointments(data)
        })
    }, [appointments.length])

    return (
        <div className="d-flex">
            <div className="col-3">
                <SideBar></SideBar>
            </div>
            <div className="col-9">
                <h5 className="mt-2">Dashboard</h5>
                <hr />
                
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body d-flex bg-danger text-white" style={{ borderRadius: '5px' }}>
                                <h1 className="align-middle mr-2 ml-2">09</h1>
                                <p className="text-left pl-4">Pending Appointments</p>
                            </div>
                        </div>
                        <div className="card">
                            <Link to="/doctor/appointments" className="text-decoration-none">
                                <div className="card-body d-flex bg-primary text-white" style={{ borderRadius: '5px' }}>
                                    <h1 className="align-middle mr-2 ml-2">15</h1>
                                    <p className="text-left pl-4">Today's Appointments</p>
                                </div>
                            </Link>
                        </div>
                        <div className="card">
                            <div className="card-body d-flex bg-success text-white" style={{ borderRadius: '5px' }}>
                                <h1 className="align-middle mr-2 ml-2">40</h1>
                                <p className="text-left pl-4 pr-4">Total Appointments</p>
                            </div>
                        </div>
                        <div className="card">
                            <Link to="/doctor/patients" className="text-decoration-none">
                                <div className="card-body d-flex text-white" style={{ borderRadius: '5px', backgroundColor: 'orange' }}>
                                    <h1 className="align-middle mr-2 ml-4">76</h1>
                                    <p className="text-left pl-4">Total Patients</p>
                                </div>
                            </Link>
                        </div>
                        
                </div>
                
                <div className="recent-appointments mt-4 p-4" style={{borderRadius:'5px', border:'2px solid lightgray'}}>
                    <h3 className="text-primary">Recent Appointments</h3>
                       <table className="table">
                           <thead>
                               <tr>
                           <th>Sr. No</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Time</th>
                                <th>Prescription</th>
                                <th>Status</th>
                                </tr>
                           </thead>
                           <tbody>
                               {
                                   appointments.map(appointment =>
                                    <tr key={appointment._id}>
                                        <td>{appointments.indexOf(appointment) + 1}</td>
                                   <td>{appointment.date}</td>
                                   <td>{appointment.name}</td>
                                        <td>{appointment.phoneNumber}</td>
                                        <td>3:30 PM</td>
                                        <td>Not Added</td>
                                        <td><button className="btn btn-primary btn-sm">Pending</button></td>
                                    </tr>
                                    )
                               }
                           </tbody>
                       </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;