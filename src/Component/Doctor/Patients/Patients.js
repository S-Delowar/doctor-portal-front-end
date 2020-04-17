import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/SideBar';

const Patients = () => {
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
            <div className="col-2">
                <SideBar></SideBar>
            </div>
            <div className="col-10 bg-light" style={{ height: '100vh',  padding: '20px 30px 20px 50px'  }}>
                <div className="patients-table">
                <h3 className="text-primary mt-2">All Patients</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Se No</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map(appointment =>
                                    <tr key={appointment._id}>
                                        <td>{appointments.indexOf(appointment) + 1}</td>
                                        <td>{appointment.name}</td>
                                        <td>{appointment.gender}</td>
                                        <td>{appointment.age}</td>
                                        <td>{appointment.phoneNumber}</td>
                                        <td>{appointment.address}</td>
                                        <td>{appointment.date}</td>
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

export default Patients;