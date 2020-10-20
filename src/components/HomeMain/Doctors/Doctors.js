import React from 'react';
import doctor from '../../../images/our-doctor.png';
import SingleDoctor from './SingleDoctor';

const doctorsData = [
    {
        name: 'Dr. Caudi',
        phone: '+61 452 200 126',
        key: 1,
        img: doctor
    },
    {
        name: 'Dr. Caudi',
        phone: '+61 452 200 126',
        key: 2,
        img: doctor
    },
    {
        name: 'Dr. Caudi',
        phone: '+61 452 200 126',
        key: 3,
        img: doctor
    },
]

const Doctors = () => {
    return (
        <section className="doctors-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="service-title text-center">
                            <h5>Our Doctors</h5>
                        </div>
                        <div className="row">
                            {
                                doctorsData.map(doctor => <SingleDoctor doctor={doctor} key={doctor.key}></SingleDoctor>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors;