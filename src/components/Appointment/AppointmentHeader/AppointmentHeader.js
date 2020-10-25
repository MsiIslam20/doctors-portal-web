import React from 'react';
import './AppoinmentHeader.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import bg from '../../../images/home.png';


const AppointmentHeader = ({handleDateChange}) => {

    return (
        <section className="appointmentHeader-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="header-inner">
                                    <h1>Appointment</h1>
                                    <Calendar
                                        onChange={handleDateChange}
                                        value={new Date()}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={bg} alt="" className="img-fluid"/>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHeader;