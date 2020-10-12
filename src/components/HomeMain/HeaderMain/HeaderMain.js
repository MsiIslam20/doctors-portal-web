import React from 'react';
import About from '../About/About';
import Appointment from '../Appoinment/Appoinment';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Services from '../Services/Services';

const HeaderMain = () => {
    return (
        <>
            <Header></Header>
            <Home></Home>
            <Services></Services>
            <About></About>
            <Appointment></Appointment>
        </>
    );
};

export default HeaderMain;