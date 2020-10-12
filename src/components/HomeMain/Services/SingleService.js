import React from 'react';

const SingleService = ({service}) => {
    return (
        <div className="col-md-4">
            <div className="service-inner text-center">
                <img style={{width: '60px', height: '60px', marginBottom: '30px'}} src={service.img} alt="" className="img-fluid"/>
                <h6>{service.title}</h6>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default SingleService;