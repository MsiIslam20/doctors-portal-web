import React from 'react';
import './Blog.css';
import tes1 from '../../../images/tes1.png';
import tes2 from '../../../images/tes2.png';
import tes3 from '../../../images/tes3.png';

const blogData = [
    {
        name: 'Dr. Caudi',
        title: '2 times of brush in a day can Keep you healthy',
        description: 'It is a long established fact that by the readable content of a lot layout. The point ',
        date: '23 April 2019',
        key: 1,
        img: tes1
    },
    {
        name: 'Dr. John Mitchel',
        title: 'The tooth cancer is taking a challenge',
        description: 'It is a long established fact that by the readable content of a lot layout. The point ',
        date: '23 April 2019',
        key: 1,
        img: tes1
    },
    {
        name: 'Rashed Kabir',
        title: 'Check at least a doctor in a year for your teeth',
        description: 'It is a long established fact that by the readable content of a lot layout. The point ',
        date: '23 April 2019',
        key: 1,
        img: tes1
    }
]

const Blog = () => {
    return (
        <section className="blog-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="service-title text-center">
                            <h5>OUR BLOG</h5>
                            <h1>From Our Blog News</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;