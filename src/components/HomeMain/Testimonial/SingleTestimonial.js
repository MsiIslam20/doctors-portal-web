import React from 'react';

const SingleTestimonial = ({testimonial}) => {
    return (
        <div className="col-md-4">
            <div className="tes-inner">
                <h4>{testimonial.name}</h4>
            </div>
        </div>
    );
};

export default SingleTestimonial;