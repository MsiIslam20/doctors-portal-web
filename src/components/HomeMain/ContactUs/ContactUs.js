import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <section className="contactUs-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="service-title service-title-white text-center">
                            <h5>CONTACT US</h5>
                            <h1>Always Connect with us</h1>
                        </div>
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <div className="contact-form">
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" id="validationDefault03" placeholder="Email Address*" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" id="validationDefault02" placeholder="Subject*" required />
                                    </div>     
                                    <div className="form-group">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your Message*" rows="6" required></textarea>
                                    </div>                           
                                    <div className="submit">
                                        <button className="btn mx-auto btn-primary btn-brand mb-5" type="submit">Submit</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;