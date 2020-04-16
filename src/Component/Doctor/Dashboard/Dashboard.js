import React from 'react';
import ReactCalendar from '../../ReactCalendar/ReactCalendar';

const Dashboard = () => {
    return (
        <div className="container" style={{marginLeft:'0px'}}>
            <h2 className="text-danger"> Dashboard</h2>
            <div className="row d-flex">
                <div className="col-6">
                    <ReactCalendar></ReactCalendar>
                </div>
                <div className="col-6">
                    <h3>Patients</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;