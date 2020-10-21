import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const AppointmentMain = () => {

    const [selectDate, setSelectDate] = useState(new Date());

    const handleDateChange = date => {
        setSelectDate(date);
    }

    return (
        <>
            <Header></Header>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectDate}></BookAppointment>
            <Footer></Footer>
        </>
    );
};

export default AppointmentMain;