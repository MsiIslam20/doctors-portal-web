import React from 'react';

const SingleBlog = ({blog}) => {
    return (
        <div className="col-md-4">
            <div className="blog-inner">
                <div className="d-flex">
                    <img src={blog.img} alt="" className="img-fluid"/>
                    <div>
                        <h5>{blog.name}</h5>
                        <h6>{blog.date}</h6>
                    </div>
                </div>
                <h4>{blog.title}</h4>
                <p className="mb-0">{blog.description}</p>
            </div>
        </div>
    );
};

export default SingleBlog;