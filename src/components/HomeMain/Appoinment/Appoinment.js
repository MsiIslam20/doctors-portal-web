import React from 'react';
import './Appoinment.css';
import doctors from '../../../images/doctors.png'

const Appointment = () => {
    return (
        <section className="appointment-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="appointment-inner">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={doctors} alt="" className="img-fluid"/>
                                </div>
                                <div className="col-md-6">
                                    <div className="inner-details">
                                        <h5 className="text-brand">APPOINTMENT</h5>
                                        <h1>Make an appointment Today</h1>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its</p>
                                        <button className="btn btn-primary btn-brand">Make Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;