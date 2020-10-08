import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Doctors <strong>Portal</strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">                    
                        <ul className="navbar-nav ml-auto">                           
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Home</a>
                            </li>    
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Review</a>
                            </li> 
                            {/* <li className="nav-item">
                                {
                                    loggedInUser.name ? <Link to="/events"><p className="nav-link">Events</p></Link> :
                                    <Link to="/login"><p className="nav-link">Events</p></Link>
                                }
                            </li>  */}
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Blog</a>
                            </li> 
                            {/* <li className="nav-item">
                                {
                                    loggedInUser.name ? <p className="nav-link username">{loggedInUser.name}</p> : <Link to="/login"><p className="nav-link btn btn-primary btn-main">Register</p></Link>
                                }
                            </li>                              */}
                            <li className="nav-item">
                                <Link to="/admin">
                                    <p className="nav-link btn btn-dark btn-main">Admin</p>
                                </Link>
                            </li>                             
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;