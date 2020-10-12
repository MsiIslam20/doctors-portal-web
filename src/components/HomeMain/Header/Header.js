import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

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
                                <a className="nav-link" href="#0">About</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Dental Services</a>
                            </li>   
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Reviews</a>
                            </li>      
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Contact Us</a>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;