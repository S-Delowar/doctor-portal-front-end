import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/SideBar';

const Prescriptions = () => {
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
        <div className="d-flex" >
            <div className="col-2">
                <SideBar></SideBar>
            </div>
            <div className="col-10" style={{ padding: '20px 50px' }}>
                <h3 className="text-primary mb-4">All Prescriptions</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr. No</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Prescription</th>
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
                                    <td><button className="btn btn-success btn-sm">View</button></td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Prescriptions;