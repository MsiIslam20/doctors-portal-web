import React from 'react';
import about from '../../../images/about.png';
import './About.css'

const About = () => {
    return (
        <section className="about-wrapper">
            <div className="container">
                <div className="col-md-12">
                    <div className="about-inner">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6">
                                <img src={about} alt="" className="img-fluid"/>
                            </div>
                            <div className="col-md-6">
                                <div className="details">
                                    <h1>Exceptional Dental <br/> Care, on Your Terms</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page </p>
                                    <button className="btn btn-brand btn-primary">Learn More</button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;