import React from 'react';
import './Home.css'
import Image from '../../images/Mask Group 1.png';
import { Link } from 'react-router-dom';
import ResponsiveDialog from '../Appointment/AppointmentInfo';

const Home = () => {
    return (
        <div className="home-section">
            <div className="row">
            <div className="col-6 p-4">
                <h1>Your New Smile Starts Here</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <br/>
                <Link to="/appointment">
                <button className="btn btn-primary">GET APPOINTMENT</button>
                </Link>
            </div>
            <div className="col-6 justify-content-end">
                <img src={Image} alt=""/>
            </div>
        </div>
        </div>
    );
};

export default Home;