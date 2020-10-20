import React from 'react';

const SingleTestimonial = ({testimonial}) => {
    return (
        <div className="col-md-4">
            <div className="tes-inner">
                <p>{testimonial.description}</p>
                <div className="d-flex">
                    <img src={testimonial.img} alt="" className="img-fluid"/>
                    <div>
                        <h5>{testimonial.name}</h5>
                        <h6>{testimonial.country}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;