import React from 'react';
import About from '../About/About';
import Appointment from '../Appoinment/Appoinment';
import Blog from '../Blog/Blog';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const HeaderMain = () => {
    return (
        <>
            <Header></Header>
            <Home></Home>
            <Services></Services>
            <About></About>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </>
    );
};

export default HeaderMain;