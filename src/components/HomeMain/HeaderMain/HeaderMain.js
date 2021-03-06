import React from 'react';
import About from '../About/About';
import Appointment from '../Appoinment/Appoinment';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
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
            <Doctors></Doctors>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </>
    );
};

export default HeaderMain;