import React from 'react';

const SingleDoctor = ({doctor}) => {
    return (
        <div className="col-md-4">
            <div className="dr-inner text-center mt-5 pt-1 mb-5 pb-5">
                <img src={doctor.img} alt="" className="img-fluid"/>
                <h5 className="mt-3">{doctor.name}</h5>
                <p>{doctor.phone}</p>
            </div>
        </div>
    );
};

export default SingleDoctor;