import React from 'react';
import SideBar from '../SideBar/SideBar';
import ReactCalendar from '../../ReactCalendar/ReactCalendar';
import { useEffect } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/js/dist/dropdown'


const Appointments = () => {
  //calendar
  const [date, setDate] = useState(new Date());
  const handleDateChange = date => {
    setDate(date);
  }
  //calendar ends
  const appointmentDate = date.toDateString();
  console.log(appointmentDate)

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
    <div>
      <div className=" d-flex">
        <div className="col-2">
          <SideBar></SideBar>
        </div>
        <div className="col-10 bg-light" style={{ height: '100vh',  padding: '20px 50px'  }} >
        <h3 className="text-primary mt-2">Appointments</h3>
        <hr/>
          <div className=" d-flex justify-content-between mt-4">
            <div className="col-5">
              <div className="calendar">
                <Calendar onChange={handleDateChange} value={date} />
                {console.log('current date', date)}
              </div>
            </div>
            <div className="col-7">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    appointments.map(appointment => appointmentDate == appointment.date &&
                      <tr key={appointment._id} >
                        <td>{appointment.name}</td>
                        <td>{appointment.phoneNumber}</td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-secondary btn-sm" type="button">
                              Not visited
                            </button>
                            <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                              <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu">
                              <button className="dropdown-item btn-sm" >Visited</button>
                              <button className="dropdown-item btn-sm">Delete</button>
                            </div>
                          </div>
                        </td>
                      </tr>)
                  }
                  {/* <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid row " >
                <SideBar></SideBar>
                <div className="col-md-10 p-4 pr-5" style={{position:"absolute", right:0,backgroundColor: "#F4FDFB",height:"100%"}}>
                    <h5 className="mb-5">Appointments</h5>
                    <div className="row">
                        <div className="col-md-6">
                            <ReactCalendar/>  
                        </div>
                        <div className="col-md-6">
                          <h3>appointent</h3>
                        </div>
                    </div>
                    
                </div>
            </div> */}
    </div>
  );
};

export default Appointments;