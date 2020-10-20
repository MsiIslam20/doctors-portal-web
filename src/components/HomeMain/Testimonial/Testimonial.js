import React from 'react';
import './Testimonial.css';
import tes1 from '../../../images/tes1.png';
import tes2 from '../../../images/tes2.png';
import tes3 from '../../../images/tes3.png';
import SingleTestimonial from './SingleTestimonial';

const testimonialData = [
    {
        name: 'Winson Herry',
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using ‘Content here, content',
        key: 1,
        img: tes1,
        country: 'California'
    },
    {
        name: 'Madam Lori',
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using ‘Content here, content',
        key: 2,
        img: tes2,
        country: 'California'
    },
    {
        name: 'Hanry Jhonson',
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using ‘Content here, content',
        key: 3,
        img: tes3,
        country: 'California'
    }
]

const Testimonial = () => {
    return (
        <section className="testimonial-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="service-title">
                            <h5>TESTIMONIAL</h5>
                            <h1>What’s Our Patients <br/> Says</h1>
                        </div>
                        <div className="row">
                            {
                                testimonialData.map(testimonial => <SingleTestimonial testimonial={testimonial} key={testimonial.key}></SingleTestimonial>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;