import React from 'react';
import SingleInfo from './SingleInfo';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        key: 1,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        key: 2,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faPhone,
        key: 3,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        {
                            infosData.map(info => <SingleInfo key={info.key} info={info}></SingleInfo>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;