import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faCalendarCheck, faUsers, faCog, faFilePrescription, faSignOutAlt, faArrowLeft, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div className="container sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4">
            
            <ul className="list-unstyled">
                <li>
                    <h3 className="text-white"><FontAwesomeIcon icon={faUserMd} />Doctor</h3>
                    <hr className="bg-white"/>
                </li>
                <li>
                    <Link to="/doctor/dashboard" className="text-white text-decoration-none" >
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointments" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCalendarCheck} /> <span>Appointments</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/patients" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faUsers} /><span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faFilePrescription} /><span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/settings" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faCog} /><span>Settings</span>
                    </Link>
                </li>
                <br/>
                <br/>
                <div>
                    <Link to="/" className="text-white text-decoration-none">
                    <FontAwesomeIcon icon={faArrowLeft} /><span>Log Out</span>
                    </Link>
                </div>
            </ul>
        </div>
    );
};

export default SideBar;