import React from 'react';
import './Services.css';
import service1 from '../../../images/service-1.png';
import service2 from '../../../images/service-2.png';
import service3 from '../../../images/service-3.png';
import SingleService from './SingleService';

const serviceData = [
    {
        title: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
        key: 1,
        img: service1
    },
    {
        title: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
        key: 2,
        img: service2
    },
    {
        title: 'Teeth Whitening',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
        key: 3,
        img: service3
    }
]

const Services = () => {
    return (
        <section className="service-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="service-title">
                            <h5>OUR SERVICES</h5>
                            <h1>Services We Provide</h1>
                        </div>
                        <div className="row">
                            {
                                serviceData.map(service => <SingleService service={service} key={service.key}></SingleService>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;