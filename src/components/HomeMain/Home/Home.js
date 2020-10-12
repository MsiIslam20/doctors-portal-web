import React from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bg from '../../../images/home.png'
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import './Home.css';

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-0">
                        <div className="row">
                            <div className="col-md-5">
                                <h1>Your New Smile <br/> Starts Here</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                                <button className="btn btn-primary btn-brand">Get Appointment</button>
                            </div>
                            <div className="col-md-7">
                                <img src={bg} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Home;