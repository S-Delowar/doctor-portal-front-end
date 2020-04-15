import React from 'react';
import './Appointment.css'
import Image from '../../images/Mask Group 1.png'
import ReactCalendar from '../ReactCalendar/ReactCalendar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
//for dialog material dialog:
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
//import material ui finished


const Appointment = (props) => {
    //calendar
    const [date, setDate] = useState(new Date());
    const handleDateChange = date => {
        setDate(date);
    }
    //calendar ends
    //form
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    //form ends
    //dialog:
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //dialog ends




    return (
        <div>
            <div className="row d-flex appointment-date-section">
                <div className="col-6">
                    <h2>Choose your date-</h2>
                    <div className="calendar">
                        <Calendar onChange={handleDateChange} value={date} />
                        {console.log(date)}
                    </div>
                </div>
                <div className="col-6">
                    <img src={Image} alt="" />
                </div>
            </div>


            <div className="available-appointments" style={{ marginBottom: '150px', border:'1px solid lightgray', padding:'30px 10px' }}>
                <h2 className="text-center mb-4">Available appointments on: <span className="text-danger">{date.toDateString()}</span></h2>
                <div className="card-group">
                    <div className="card mt-4 mr-2">
                        <div className="card-body text-center">
                            <h4 className="card-title text-primary">Teeth Orthodontics</h4>
                            <h6>8:00 AM - 9:00 AM</h6>
                            <p className="card-text text-secondary">10 spaces available</p>
                            <button onClick={handleClickOpen} className="btn btn-primary">BOOK APPOINTMENT</button>
                        </div>
                    </div>
                    <div className="card mt-4 mr-2">
                        <div className="card-body text-center">
                            <h4 className="card-title text-primary">Cosmetic Denstistry</h4>
                            <h6>10:05 AM - 11:30 AM</h6>
                            <p className="card-text text-secondary">12 spaces available</p>
                            <button onClick={handleClickOpen} className="btn btn-primary">BOOK APPOINTMENT</button>
                        </div>
                    </div>
                    <div className="card mt-4 mr-2">
                        <div className="card-body text-center">
                            <h4 className="card-title text-primary">Teeth Cleaning</h4>
                            <h6>5:00 PM - 6:00 PM</h6>
                            <p className="card-text text-secondary">10 spaces available</p>
                            <button onClick={handleClickOpen} className="btn btn-primary">BOOK APPOINTMENT</button>
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <div className="card mt-4 mr-2">
                        <div className="card-body text-center">
                            <h4 className="card-title text-primary">Cavity Protection</h4>
                            <h6>7:00 PM - 8:30 PM</h6>
                            <p className="card-text text-secondary">10 spaces available</p>
                            <button onClick={handleClickOpen} className="btn btn-primary">BOOK APPOINTMENT</button>
                        </div>
                    </div>
                    <div className="card mt-4 mr-2">
                        <div className="card-body text-center">
                            <h4 className="card-title text-primary">Teeth Orthodontics</h4>
                            <h6>8:00 AM - 9:00 AM</h6>
                            <p className="card-text text-secondary">10 spaces available</p>
                            <button onClick={handleClickOpen} className="btn btn-primary">BOOK APPOINTMENT</button>
                        </div>
                    </div>
                    <div className="card mt-4 mr-2">
                        <div className="card-body text-center">
                            <h4 className="card-title text-primary">Teeth Orthodontics</h4>
                            <h6>8:00 AM - 9:00 AM</h6>
                            <p className="card-text text-secondary">10 spaces available</p>
                            <button onClick={handleClickOpen} className="btn btn-primary">BOOK APPOINTMENT</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*dialog starts.. */}
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"Give your Informations to get Appointment"}</DialogTitle>
                    <DialogContent>
                        <form className="appointment-dialog" onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" ref={register({ required: true })} placeholder="Name" />
                            {errors.name && <span className="error">Name is required</span>}

                            <input name="phoneNumber" ref={register({ required: true })} placeholder="Phone Number" />
                            {errors.phoneNumber && <span className="error">Phone number is required</span>}

                            <input name="email" ref={register({ required: true })} placeholder="Email" />
                            {errors.email && <span className="error">Email is required</span>}

                            <input name="address" ref={register({ required: true })}  placeholder="Address"/>
                            {errors.address && <span className="error">Address is required</span>}

                            <input name="date" defaultValue={date.toDateString()} ref={register({ required: true })} />

                            <input className="btn btn-success" type="submit" value="Send"/>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            {/*dialog ends.. */}



        </div>

    );
};

export default Appointment;